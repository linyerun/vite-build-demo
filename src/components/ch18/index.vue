<script setup lang="ts">
import {defineAsyncComponent} from "vue";
import Skeleton from "./Skeleton.vue";
const NewCard = defineAsyncComponent(()=>import("./NewCard.vue"))
</script>

<template>
  <div style="padding: 20px">
    <Suspense>
      <template #default>
        <NewCard/>
      </template>
      <template #fallback>
        <Skeleton/>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>

</style>