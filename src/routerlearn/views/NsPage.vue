<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div>Ns-Page</div>
  <el-button @click="router.push('/ns/all')">All</el-button>
  <hr>
  <router-view name="header"></router-view>
  <hr>
  <router-view/>
  <hr>
  <router-view name="footer"></router-view>
</template>

<style scoped>

</style>