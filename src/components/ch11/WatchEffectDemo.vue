<script setup lang="ts">
import {ref, watchEffect} from "vue";

const msg1 = ref<string>('')
const msg2 = ref<string>('')

/*
watchEffect
  1. 初始化时,会立刻执行一次回调函数
  2. onCleanup,回调函数中的回调函数, 下一次回调函数触发时把上一次没执行完的逻辑做一个取消
  3.flush取值
    - pre（默认）= 改 DOM 之前跑 → 拿不到新 DOM
    - post = 改 DOM 之后跑 → 能拿到新 DOM
    - sync = 一变就立刻跑，不合并（很危险，别随便用）


<script setup lang="ts">
import {ref, watchEffect} from "vue";

const keyword = ref('')

watchEffect((onInvalidate) => {
  console.log('开始搜索:', keyword.value)

  const timer = setTimeout(() => {
    console.log('搜索完成:', keyword.value)
  }, 1000)

  // 关键：下次重跑前，把上一次的 timer 清掉
  onInvalidate(() => {
    console.log('清理上一次的 timer')
    clearTimeout(timer)
  })

})
<\/script>
<template>
  <input placeholder="搜索条件" v-model="keyword"/>
</template>
*/

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