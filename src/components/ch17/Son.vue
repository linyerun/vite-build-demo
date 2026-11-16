<script setup lang="ts">
</script>

<template>
  <slot name="header"></slot>
  <div>
    <div v-for="item in 10">
      <slot :data="item+10"></slot>
    </div>
  </div>
  <slot name="footer"></slot>
  <slot name="content"></slot>
</template>

<style scoped>

</style>