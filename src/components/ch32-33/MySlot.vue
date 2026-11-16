<script setup lang="ts">

</script>

<template>
  <slot/>
</template>

<style scoped>
:slotted(.msg) {
  font-weight: bold;
  color: red;
}
</style>