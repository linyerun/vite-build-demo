<script setup lang="ts">
import Son2 from "./Son2.vue";

const getVal = (val: string|number) => {
  console.log(val)
}
</script>

<template>
  <Son2 @on-click="getVal" @on-a="getVal" @on-b="getVal"/>
</template>

<style scoped>

</style>