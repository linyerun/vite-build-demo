<script setup lang="ts">
/*
toRef: 如果原始对象是非响应式 的就不会更新视图 数据是会变的;反之,更新视图和数据;

toRefs: 必须传入一个响应式对象,方便我们解构使用

toRaw: 将响应式对象转化为普通对象
*/


import {toRef, reactive, toRefs, toRaw} from "vue";

/*const obj = {
  foo: 1,
  bar: 1,
}*/
const obj = reactive({
  foo: 1,
  bar: 1,
})
const state = toRef(obj, 'bar')

const obj2 = reactive({
  foo: 1,
  bar: 1,
})
const {foo, bar} = toRefs(obj2)

const change = () => {
  state.value++
  foo.value++
  bar.value++
  console.log(obj, state)
  console.log(obj2, foo, bar)
  console.log(toRaw(obj))
}



</script>

<template>
  <div>
    <button @click="change">按钮</button>
    <div>state-{{state}}</div>
    <div>foo-{{foo}}</div>
    <div>bar-{{bar}}</div>
  </div>
</template>

<style scoped>

</style>