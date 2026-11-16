<script setup lang="ts">
import {getCurrentInstance} from "vue";
import {ref} from "vue";
const flag = ref(false)

const instance = getCurrentInstance()

instance?.proxy?.$Bus.on('CA', (val)=>{
  flag.value = val as boolean
})
</script>

<template>
  <div>获取组件CA的值: {{flag}}</div>
</template>

<style scoped>

</style>