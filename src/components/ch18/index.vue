<script setup lang="ts">
import Skeleton from "./Skeleton.vue";

// 使用defineAsyncComponent引入的好处, 打包时自动分包，前端首次渲染耗时慢，因为按需引入js
// import {defineAsyncComponent} from "vue";
// const NewCard = defineAsyncComponent(()=>import("./NewCard.vue"))

import NewCard from "./NewCard.vue";

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