<script setup lang="ts">
/*
  watch:
    参数1: 参数监听源, 必须是响应式对象, 监听多个使用数组
    参数2: 回调函数
    参数3: options配置项, 一个对象, deep:是否开启深度监听(ref对象要开启,reactive可以不管源码层回开的), immediate:true 是否立即调用一次
*/

import {ref, reactive, watch} from 'vue';

// case1: ref
// 关闭直接实效deep: true直接实效
const message = ref({
  nav: {
    bar: {
      name: ''
    }
  }
})
watch(message, (newVal, oldVal) => {
  console.log('newVal-',newVal, 'oldVal-', oldVal);
},{
  immediate: true,
  deep: true
})

// case2: reactive
const message1 = reactive({
  nav: {
    bar: {
      name: ''
    }
  }
})
watch(message1, (newVal, oldVal) => {
  console.log('newVal-',newVal, 'oldVal-', oldVal);
},{
  immediate: true,
})

// case3: array
const msg2 = ref('')
const msg3 = ref('')
watch([msg2, msg3], (newVal, oldVal) => {
  console.log('newVal-',newVal, 'oldVal-', oldVal)
})

// case4: reactive监听单一值
const msg4 = reactive({
  nav: {
    bar: {
      name: '',
      age: 0,
    }
  }
})
watch(()=>msg4.nav.bar.name, (newVal, oldVal) => {
  console.log('newVal-',newVal, 'oldVal-', oldVal);
},{
  immediate: true,
})

// case5: ref监听单一值
const msg5 = ref({
  nav: {
    bar: {
      name: '',
      age: 0,
    }
  }
})
watch(()=>msg5.value.nav.bar.age, (newVal, oldVal) => {
  console.log('newVal-',newVal, 'oldVal-', oldVal);
},{
  immediate: true,
})
</script>

<template>
  <div>
    message: {{message}}
    <div>
      name: <input v-model="message.nav.bar.name">
    </div>
  </div>
  <div>
    message: {{message1}}
    <div>
      name: <input v-model="message1.nav.bar.name">
    </div>
  </div>
  <div>
    msg2: {{msg2}}
    msg3: {{msg3}}
    <div>
      msg2: <input v-model="msg2">
    </div>
    <div>
      msg3: <input v-model="msg3">
    </div>
  </div>
  <div>
    msg4: {{msg4}}
    <div>
      msg4.age: <input v-model="msg4.nav.bar.age">
    </div>
    <div>
      msg4.name: <input v-model="msg4.nav.bar.name">
    </div>
  </div>
  <div>
    msg4: {{msg5}}
    <div>
      msg4.age: <input v-model="msg5.nav.bar.age">
    </div>
    <div>
      msg4.name: <input v-model="msg5.nav.bar.name">
    </div>
  </div>
</template>

<style scoped>

</style>