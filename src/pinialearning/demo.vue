<script setup lang="ts">
/*
* 需求: 编写插件持久化pinia的数据，避免刷新之后数据丢失
* */
import { useBaseStore, useTestStore } from "./store";

const baseStore = useBaseStore();
const testStore = useTestStore();
const changeBaseStore = () => {
  baseStore.name += '1'
  baseStore.age += 1
}

const changeTestStore = () => {
  testStore.name += '1'
  testStore.current += 1
}

</script>

<template>
  <el-button @click="changeBaseStore">change-base</el-button>
  <div>
    <div>
      base-name: {{baseStore.name}}
    </div>
    <div>
      base-age: {{baseStore.age}}
    </div>
    <hr>
    <el-button @click="changeTestStore">change-test</el-button>
    <div>
      test-name: {{testStore.name}}
    </div>
    <div>
      test-current: {{testStore.current}}
    </div>
  </div>
</template>

<style scoped>

</style>