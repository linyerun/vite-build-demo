<script setup lang="ts">
// state 传参通过 history.state 读取，URL 中不显示；刷新不丢，但新开标签页/直接访问拿不到
const { id, name, price } = history.state ?? {}
</script>

<template>
  <div>Param Page</div>
  <div>
    ID: {{id}}
  </div>
  <div>
    名称: {{name}}
  </div>
  <div>
    价格: {{price}}
  </div>
</template>

<style scoped>

</style>