<script setup lang="ts">
import Son from './Son.vue'
import {ref} from "vue";
const slotName = ref<string>('content')
</script>

<template>
  <Son>
    <template #header>
      <div>1</div>
    </template>
    <template #default="{data}">
      <div>{{data}}</div>
    </template>
    <template #footer>
      <div>3</div>
    </template>
    <template #[slotName]>
      <div>content</div>
    </template>
  </Son>
</template>

<style scoped>

</style>