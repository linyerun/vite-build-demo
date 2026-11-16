<script setup lang="ts">

import Vmodel from "./Vmodel.vue";
import {ref} from "vue";

const input = ref<string>()
const flag = ref(false)

</script>

<template>
  <div>
    input: {{input}}
  </div>
  <div>
    flag: {{flag}}
  </div>
  <Vmodel v-model="input" v-model:flag="flag"/>
</template>

<style scoped>

</style>