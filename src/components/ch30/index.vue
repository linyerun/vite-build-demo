<script setup lang="ts">
import {getCurrentInstance} from "vue";

const app = getCurrentInstance()
app?.proxy?.$myloading.show()
setTimeout(()=>app?.proxy?.$myloading.hide(), 10000)

</script>

<template>

</template>

<style scoped>

</style>