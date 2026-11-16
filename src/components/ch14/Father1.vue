<script setup lang="ts">
import Son1 from "./Son1.vue";
const title = 'lyr'
const arr = [10,9,8]
</script>

<template>
  <Son1 :title="title" :data="arr"/>
</template>

<style scoped>

</style>