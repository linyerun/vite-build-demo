import {createRouter, createWebHistory, /*createWebHashHistory,*/ type RouteRecordRaw} from 'vue-router'

// createWebHistory和createWebHashHistory底层实现不一样, 肉眼看后者多了"/#/"

// 吸取教训: children里面的path不要在开头加/
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
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
    }
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes: routes,
})

export default router
