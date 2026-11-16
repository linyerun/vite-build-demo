<script setup lang="ts">
import type { Tree } from "./types.ts";

const props = withDefaults(defineProps<{data?: Tree[]}>(),{})
</script>

<template>
  <div class="tree" v-for="item in data">
    <input type="checkbox" v-model="item.checked"> <span>{{item.name}}</span>
    <Tree v-if="item.children?.length" :data="item.children"></Tree>
  </div>
</template>

<style scoped>
.tree {
  margin-left: 10px;
}
</style>