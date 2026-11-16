<script setup lang="ts">
const flag = false
</script>

<template>
  <!--
   flag ? 'active' : 'other' 是一个整体
   'hhh' 是一个整体
   -->
  <div :class="[flag ? 'active' : 'other', 'hhh']">12321</div>
</template>

<style scoped>
.active {
  color: red;
}
.other {
  color: green;
}
</style>