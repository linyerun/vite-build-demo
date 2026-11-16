<script setup lang="ts">
// onBeforeCreate, onCreated在setup语法糖模式下没有这两个生命周期
console.log('setup')

import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";

// onBeforeMount里面是读不到dom的, onMounted里面可以
// onBeforeUpdate获取更新之前的dom, onUpdated获取更新之后的dom

onBeforeMount(()=>{
  console.log('创建之前---', div.value)
})
onMounted(()=>{
  console.log('创建完成---', div.value)
})
onBeforeUpdate(()=>{
  console.log('组件更新之前---', div.value?.innerText)
})
onUpdated(()=>{
  console.log('组件更新完成---', div.value?.innerText)
})
onBeforeUnmount(()=>{
  console.log('组件销毁之前')
})
onUnmounted(()=>{
  console.log('组件销毁完成')
})

const str = ref<string>('LinYeRun')
const div = ref<HTMLDivElement>()

const change = ()=>{
  str.value = '我被修改了'
}
</script>

<template>
  <h3>我是组件</h3>
  <div ref="div">{{str}}</div>
  <button @click="change">修改按钮</button>
  <hr>
</template>

<style scoped>

</style>