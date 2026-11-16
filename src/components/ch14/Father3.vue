<script setup lang="ts">
import Son3 from "./Son3.vue";
import {onMounted, ref} from "vue";
const son3 = ref<InstanceType<typeof Son3>>()

onMounted(()=>{
  console.log(son3.value?.list)
  console.log(son3.value?.name)
  son3.value?.open()
})

</script>

<template>
<Son3 ref="son3"/>
</template>

<style scoped>

</style>