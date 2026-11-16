<script setup lang="ts">
import {reactive} from "vue"

/*
reactive
  1.用来绑定复杂的数据类型,例如: 对象、数组; 不能绑定普通类型, 例如: string, number;
  2.使用reactive 去修改值无须.value

shallowReactive
  1.一样是浅层更新, 到对象的第一层属性
  2.不能和reactive一起用,不然会导致shallowReactive被更新
*/

const obj = reactive({name: 'lyr'})
const change = () => {
  obj.name += "Go"
}
</script>

<template>
  <div>{{obj}}</div>
  <button @click.prevent="change">change</button>
</template>

<style scoped>

</style>