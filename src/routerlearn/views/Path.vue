<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute()

</script>

<template>
  <div>Path Page</div>
  <div>
    ID: {{route.params?.id}}
  </div>
</template>

<style scoped>

</style>