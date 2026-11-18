<script setup lang="ts">
import {onMounted} from "vue";

onMounted(async ()=>{
  const res = await fetch('/api/v1/data')
  if (res.ok) {
    const data = await res.json()
    console.log(data)
  }
})
</script>

<template>

</template>

<style scoped>

</style>