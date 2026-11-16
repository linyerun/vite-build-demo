<script setup lang="ts">
import {ref, watchEffect} from "vue";

const msg1 = ref<string>('')
const msg2 = ref<string>('')

const stop = watchEffect((onCleanup)=>{
  console.log(msg1.value)
  console.log(msg2.value)
  // 这个函数先执行
  onCleanup(()=>{
    console.log('before')
  })
}, {
  flush: 'post', // pre: 组件更新前执行; sync: 强制效果始终同步触发; post: 组件更新后执行
  // 调试打断点时可以用
  /*onTrigger() {
    debugger
  }*/
})
</script>

<template>
  <div>
    msg1: {{msg1}}
  </div>
  <div>
    msg2: {{msg2}}
  </div>
  <div>
    msg1:<input v-model="msg1">
    msg2:<input v-model="msg2">
    <button @click="stop">停止监听</button>
  </div>
</template>

<style scoped>

</style>