<script setup lang="ts">
import {inject, ref, type Ref} from "vue";

const color = inject<Ref<string>>('color', ref<string>('red'))

</script>

<template>
  <div>
    <h1>爸爸组件</h1>
    <div class="box"></div>
  </div>
</template>

<style scoped>
.box{
  width: 100px;
  height: 100px;
  background-color: v-bind(color);
}
</style>