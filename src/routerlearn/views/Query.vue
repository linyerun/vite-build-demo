<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute()

</script>

<template>
  <div>Query Page</div>
  <div>
    ID: {{route.query?.id}}
  </div>
  <div>
    名称: {{route.query?.name}}
  </div>
  <div>
    价格: {{route.query?.price}}
  </div>
</template>

<style scoped>

</style>