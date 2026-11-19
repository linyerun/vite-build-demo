import {createRouter, createWebHistory, /*createWebHashHistory,*/ isNavigationFailure, type RouteRecordRaw} from 'vue-router'

// createWebHistory和createWebHashHistory底层实现不一样, 肉眼看后者多了"/#/"

// 吸取教训: children里面的path不要在开头加/
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        alias: ['/root1', '/root2'], // 起别名
        // 重定向方式
        // redirect: '/ns/all',
        // redirect: {path: '/ns/all'},
        redirect: (to)=>{
            console.log(to)
          return {
              path: '/ns/all',
              query: {name: '小林', ...to.query} // 可以传参
          }
        },
        component: ()=>import('@/routerlearn/views/Login.vue'),
        children: [
            {
                path: 'inner1',
                name: 'Inner1',
                component: () => import('@/routerlearn/views/Inner1.vue'),
            },
            {
                path: 'inner2',
                name: 'Inner2',
                component: () => import('@/routerlearn/views/Inner2.vue'),
            },
            {
                path: 'ns',
                name: 'Ns',
                component: ()=>import('@/routerlearn/views/NsPage.vue'),
                children: [
                    {
                        path: 'all',
                        name: 'All',
                        components: {
                            header: ()=>import('@/routerlearn/views/NsHeader.vue'),
                            default: ()=>import('@/routerlearn/views/NsDefault.vue'),
                            footer: ()=>import('@/routerlearn/views/NsFooter.vue'),
                        },
                    }
                ]
            }
        ],
    },
    {
        path: '/reg',
        name: 'Reg',
        component: ()=>import('@/routerlearn/views/Register.vue')
    },
    {
        path: '/query',
        name: 'Query',
        component: ()=>import('@/routerlearn/views/Query.vue')
    },
    {
        path: '/param',
        name: 'Param',
        component: ()=>import('@/routerlearn/views/Param.vue')
    },
    {
        path: '/path/:id',
        name: 'Path',
        component: ()=>import('@/routerlearn/views/Path.vue')
    },
    {
        path: '/demo/login',
        name: 'DemoLogin',
        component: ()=>import('@/routerlearn/views/demo/DemoLogin.vue'),
        // 可以添加元信息
        meta: {
            title: '登录页面'
        },
    },
    {
        path: '/demo/success',
        name: 'DemoSuccess',
        component: () => import('@/routerlearn/views/demo/SuccessPage.vue'),
        meta: {
            title: '成功'
        },
    }
]

declare module 'vue-router' {
    interface RouteMeta {
        title?: string
    }
}

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes: routes,
})

// 路由守卫: 一般用于鉴权放行与拦截

const whitePages = ['/demo/login']

// 跳转前的拦截
router.beforeEach((to, from) => {
    /*
    to: Route， 即将要进入的目标 路由对象；
    from: Route，当前导航正要离开的路由；

    vue-router 5.x用法中next已经被取消,通过return不同的东西来实现放行
    - next()=>return或者什么也不写
    - next(false)=>return false
    - next('/path')=>return '/path'
    */
    console.log('from:', from)

    // 白名单路径直接放行
    if (whitePages.includes(to.path)) {
        return
    }

    // 不允许跳转
    if (!localStorage.getItem('jump')) {
        alert('拒绝跳转')
        return false
    }

    // 跳到登录页面
    if (!localStorage.getItem('token')) {
        alert('请进行登录操作')
        return {name: 'DemoLogin'}
    }

    // 放行
    return
})

// 跳转后的拦截(跳转失败也没问题)
router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure)) {
        console.log('failed navigation', `from:"${from.path}" to:"${to.path}"`)
        return
    }
    console.log('success navigation', `from:"${from.path}" to:"${to.path}"`)
})

export default router
