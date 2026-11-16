<script setup lang="ts">
  const parent = () => console.log('parent')
  const child = () => console.log('child')
  const submit = () => console.log('submit')
</script>

<template>
  <div @click="parent">
    <div @click="child">child</div>
    <!--    <div @click.stop="child">child</div>-->
  </div>
  <form action="/">
    <button @click.prevent="submit" type="submit">submit</button>
  </form>
</template>

<style scoped>

</style>