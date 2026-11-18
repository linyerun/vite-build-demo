<script setup generic="T extends string|number, U extends boolean" lang="ts">
const prop = defineProps<{
  names: T[],
  flags: U[],
}>()
</script>

<template>
  <div>
    names: {{names}}
  </div>
  <div>
    flags: {{flags}}
  </div>
</template>

<style scoped>

</style>