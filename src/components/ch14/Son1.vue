<script setup lang="ts">
type Props = {
  title?: string,
  data?: number[]
}
const props = withDefaults(defineProps<Props>(), {
  title: '小林',
  data: () => [1, 2, 3],
})

console.log(props.title)
console.log(props.data)
</script>

<template>
  <div>
    标题: {{title}}
  </div>

  <div>
    数据: {{data}}
  </div>
</template>

<style scoped>

</style>