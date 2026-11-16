<script setup lang="ts">
import { ref } from 'vue'
import { useImageLoad } from './useImageLoad'

const imgRef = ref<HTMLImageElement | null>(null)
const { isLoaded } = useImageLoad(imgRef)
console.log(isLoaded)

</script>

<template>

</template>

<style scoped>

</style>