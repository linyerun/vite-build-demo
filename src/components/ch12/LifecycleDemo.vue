<script setup lang="ts">
import A from "./A.vue";
import {ref} from "vue";

const hiddenA = ref(false)
</script>

<template>
  <A v-if="!hiddenA"/>
  <button @click="hiddenA = !hiddenA">创建-销毁</button>
</template>

<style scoped>

</style>