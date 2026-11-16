<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'

const message: Ref<string | number> = ref('')

const changeMsg = () => {
  message.value += '111'
}

// ref是深层更新, shallowRef是只监听value的浅层更新, 两者二选一，不然ref的更新会影响shallowRef

</script>

<template>
  <div>
    <button @click="changeMsg">change</button>
    <div>{{message}}</div>
  </div>
</template>

<style scoped>

</style>