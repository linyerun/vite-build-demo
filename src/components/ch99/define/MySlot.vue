<script setup generic="T" lang="ts">
defineProps<{
  data: T[]
}>()

// 给插槽定义类型
defineSlots<{
  default(props: {item: T, idx: number}):void
}>()
</script>

<template>
  <ul>
    <li v-for="(item, index) in data">
      <slot :idx="index" :item="item"/>
    </li>
  </ul>
</template>

<style scoped>

</style>