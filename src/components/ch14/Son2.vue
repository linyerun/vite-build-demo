<script setup lang="ts">

// 写法1
// const emit = defineEmits(['on-click', 'on-a', 'on-b'])

// 写法2
/*const emit = defineEmits<{
  (e: 'on-click', name: string): void;
  (e: 'on-a', age: number): void;
  (e: 'on-b', year: number): void;
}>();*/

// 写法3（写法2和写法3不能混在一起写）命名元组写法（vue3.3+）
const emit = defineEmits<{
  'on-click': [name: string]
  'on-a': [age: number]
  'on-b': [year: number]
}>();

const send = () => {
  emit('on-click', 'linyerun')
  emit('on-a', 111)
  emit('on-b', 2026)
}
</script>

<template>
  <div>子集</div>
  <button @click="send">给父组件传值</button>
</template>

<style scoped>

</style>