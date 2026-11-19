<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import {onMounted, ref} from "vue";
const router = useRouter();
const route = useRoute();
const username = ref('')
const login = () => {
  localStorage.setItem('token','sk-xxxx')

  // 动态路由, 运行在运行时增删路由
  const rmRouteFunc1 = router.addRoute({
    path: '/demo/user/1',
    name: 'UserPage1',
    component: ()=>import('@/routerlearn/views/demo/UserPage1.vue')
  })
  const rmRouteFunc2 = router.addRoute({
    path: '/demo/user/2',
    name: 'UserPage2',
    component: ()=>import('@/routerlearn/views/demo/UserPage2.vue')
  })
  // 也可以进行路由嵌套
  /*const rmRouteFunc3 = router.addRoute('父路由的名称',{
    path: '/demo/user/2',
    name: 'UserPage2',
    component: ()=>import('@/routerlearn/views/demo/UserPage2.vue')
  })*/
  if (username.value === 'user1') {
    rmRouteFunc1()
  }
  if (username.value === 'user2') {
    rmRouteFunc2()
    // 也可以按名称删除
    // router.removeRoute('UserPage2')
  }
}
const allowJump = () => {
  localStorage.setItem('jump', 'true')
}
onMounted(() => {
  if (route.meta.title) {
    document.title = route.meta.title
  }
})
</script>

<template>
  <el-button type="success" @click="login">模拟登录</el-button>
  <el-button type="default" @click="allowJump">允许跳转</el-button>
  <el-button type="success" @click="router.push({name: 'DemoSuccess'})">SuccessPage</el-button>
  <el-input v-model="username" placeholder="请输入用户信息"/>
  <el-button @click="router.push('/demo/user/1')">toUser1</el-button>
  <el-button @click="router.push('/demo/user/2')">toUser2</el-button>
</template>

<style scoped>

</style>