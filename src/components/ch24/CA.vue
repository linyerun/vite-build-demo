<script setup lang="ts">
import {getCurrentInstance} from "vue";

const instance = getCurrentInstance()

</script>

<template>
  <button @click="instance?.proxy?.$Bus.emit('CA', false)">给组件CB传false</button>
  <button @click="instance?.proxy?.$Bus.emit('CA', true)">给组件CB传true</button>
</template>

<style scoped>

</style>