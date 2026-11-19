<script setup lang="ts">
import {useRouter,useRoute} from "vue-router";
import {onMounted} from "vue";
const router = useRouter();
const route = useRoute();
onMounted(() => {
  if (route.meta.title) {
    document.title = route.meta.title
  }
})
</script>

<template>
  <div>SuccessPage</div>
  <el-button @click="router.back()">返回</el-button>
</template>

<style scoped>

</style>