<script setup lang="ts">
import {inject} from "vue"
import type {Ref} from "vue"
let color = inject<Ref<string>>("color")

const setColor = () => {
  color!.value = "pink" // 如果父组件设置了readonly, 那么这里就会设置失败
}
</script>

<template>
  <div>
    <h1>孙子组件</h1>
    <div class="box"></div>
    <button @click="setColor">设置粉色</button>
  </div>
</template>

<style scoped>
.box{
  width: 100px;
  height: 100px;
  background-color: v-bind(color);
}
</style>