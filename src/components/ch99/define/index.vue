<script setup lang="ts">
import Child from "./Child.vue";
import MySlot from "./MySlot.vue";

const list = [
  {
    name: "张三"
  },
  {
    name: "李四"
  },
  {
    name: "王五"
  }
]

</script>

<template>
  <Child :names="['lyr', 'go', 'java', 'python']" :flags="[true, false]"/>
  <MySlot :data="list">
    <template #default="{item, idx}">
      <div>idx: {{idx}}</div>
      <div>item: {{item}}</div>
    </template>
  </MySlot>
</template>

<style scoped>

</style>