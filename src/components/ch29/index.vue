<script setup lang="ts">
import {getCurrentInstance} from "vue";

const app = getCurrentInstance()
console.log(app?.proxy?.$env)
console.log(app?.proxy?.$filters.format(26))

</script>

<template>
  <div>
    <div>
      env: {{$env}}
    </div>
    <div>
      {{$filters.format('你好!')}}
    </div>
  </div>
</template>

<style scoped>

</style>