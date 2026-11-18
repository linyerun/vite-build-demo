import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from "./components/ch15/Card.vue";
import Loading from "./components/ch30/Loading.ts";
import {createPinia} from "pinia";

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

// pinia注册
const store = createPinia()
app.use(store)

app.use(Loading) // 注册自定义插件
app.component('Card', Card)// 把局部组件注册到全局
app.mount('#app')
