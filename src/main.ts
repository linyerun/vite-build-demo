import {createApp, createVNode, render, toRaw} from 'vue'
import './style.css'
import App from './App.vue'
import Card from "./components/ch15/Card.vue";
import Loading from "./components/ch30/Loading.ts";
import {createPinia, type PiniaPluginContext} from "pinia";
import router from '@/routerlearn/router'

import LoadingBar from "@/routerlearn/views/demo/LoadingBar.vue";
const LoadingBarVNode = createVNode(LoadingBar)
// 必须用独立容器：render 会复用容器上的 _vnode，直接渲染到 body 会被 Loading 插件的 render(vnode, body) 卸载
const loadingBarContainer = document.createElement('div')
document.body.appendChild(loadingBarContainer)
render(LoadingBarVNode, loadingBarContainer)
router.beforeEach(() => LoadingBarVNode.component?.exposed?.startLoading())
router.afterEach(() => LoadingBarVNode.component?.exposed?.endLoading())

const app = createApp(App)

// 把mitt绑定到app中(要在app.component调用之前)
import mitt from "mitt";
const Mit = mitt()
//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit,
        $env: string,
        $filters: {
            // format<T>(str: T):string;
            format: <T>(str: T) => string,
        },
        $myloading: {
            show: () => void,
            hide: () => void,
        }
    }
}
app.config.globalProperties.$Bus = Mit
app.config.globalProperties.$env = 'dev'
app.config.globalProperties.$filters = {
    format<T> (str: T): string {
        return `林叶润: ${str}`
    }
}

// 创建pinia对象
const store = createPinia()

// 编写pinia持久化插件
const piniaKey = '__PINIA__'
interface PiniaPluginOptions {
    key?: string
}
// 保持数据到缓存中
const setStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value))
}
// 从缓存中读取
const getStorage = (key: string) => {
    return (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {})
}

const PiniaStateAutoSavePlugin = (options: PiniaPluginOptions) => {
    return (ctx: PiniaPluginContext) => {
        const {store} = ctx
        const key = `${options?.key ?? piniaKey}-${store.$id}`
        const data = getStorage(key)
        store.$patch(data)
        store.$subscribe(()=>setStorage(key, toRaw(store.$state)),{detached: true})
        // return {...data}
        // TEST 的缓存里有 user。哪怕它是 null，JS 里 typeof null === 'object' 也命中；登录后它是 {name, age} 普通对象，同样命中 → 报 Property "user" ... is not reactive
        // 所以使用$patch就好了
    }
}
store.use(PiniaStateAutoSavePlugin({})) // 每当一个store被创建时都会触发这个插件

app.use(router)// 路由注册
app.use(store)// pinia注册
app.use(Loading) // 注册自定义插件
app.component('Card', Card)// 把局部组件注册到全局
app.mount('#app')
