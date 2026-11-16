<script setup lang="ts">
import bus from './bus.ts'
</script>

<template>
  <button @click="bus.emit('BA', false)">给组件BB传false</button>
  <button @click="bus.emit('BA', true)">给组件BB传true</button>
</template>

<style scoped>

</style>