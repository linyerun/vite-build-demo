<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import {onMounted} from "vue";
const router = useRouter();
const route = useRoute();
const login = () => {
  localStorage.setItem('token','sk-xxxx')
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
</template>

<style scoped>

</style>