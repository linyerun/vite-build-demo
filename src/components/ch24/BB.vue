<script setup lang="ts">
import bus from './bus.ts'
import {ref} from "vue";
const flag = ref(false)
bus.on('BA', (data: boolean)=>{
  flag.value = data
})
</script>

<template>
  <div>获取组件BA的值: {{flag}}</div>
</template>

<style scoped>

</style>