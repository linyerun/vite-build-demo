<script setup lang="ts">
import {ref} from "vue";
import MySlot from "./MySlot.vue";
const name = ref('')
</script>

<template>
  <div>姓名: {{name}}</div>
  <div>
    <el-input placeholder="请输入姓名" v-model="name"/>
  </div>
  <hr>
  <MySlot>
    <template #default>
      <div class="msg">
        私人订制DIV
      </div>
    </template>
  </MySlot>
</template>

<style scoped lang="scss">
.el-input {
  :deep(.el-input__inner) {
    background-color: red;
  }
}
</style>