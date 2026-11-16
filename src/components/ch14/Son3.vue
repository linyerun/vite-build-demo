<script setup lang="ts">
import {reactive} from "vue";

const list = reactive<number[]>([1,2,3,4])
defineExpose({
  name: 'Son3',
  open: () => console.log('open-son3'),
  list,
})
</script>

<template>
<div>Son3</div>
</template>

<style scoped>

</style>