<script setup lang="ts">
import {useRouter} from 'vue-router'
import Items from '@/routerlearn/views/Items.vue'

const router = useRouter()

const toPageWay1 = (path: string) => {
  // router.push(path)
  router.push({path: path})
  // router.replace(path) // 这种跳转方式会清空历史
}

const toPageWay2 = (name: string) => {
  router.push({name: name})
  // router.replace({name: name}) // 这种跳转方式会清空历史
}

</script>

<template>
  <el-button>
    <router-link to="/">Login</router-link>
  </el-button>
  <el-button>
    <router-link :to="{name: 'Reg'}">Reg</router-link>
  </el-button>
  <el-button>
    <router-link replace to="/">Login-replace</router-link>
  </el-button>
  <el-button>
    <router-link replace :to="{name: 'Reg'}">Reg-replace</router-link>
  </el-button>

  <el-button @click="toPageWay1('/')">
    Login
  </el-button>
  <el-button @click="toPageWay2('Reg')">
    Reg
  </el-button>
  <hr>
  <el-button @click="router.go(1)">前进</el-button>
  <el-button @click="router.back()">后退</el-button>
  <hr>
  <hr>
  <Items/>
  <hr>
  <router-view/>
</template>

<style scoped>

</style>