<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <div>登录</div>
  <div>
    嵌套路由切换:
    <el-button @click="router.push('/inner1')">Inner1</el-button>
    <el-button @click="router.push('/inner2')">Inner2</el-button>
    <el-button @click="router.push('/ns')">NS</el-button>
  </div>
  <router-view/>
</template>

<style scoped>

</style>