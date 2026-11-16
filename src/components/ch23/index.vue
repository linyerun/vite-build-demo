<script setup lang="ts">
import {ref, provide, readonly} from "vue";
import ProvideA from "./ProvideA.vue";
import ProvideB from "./ProvideB.vue";

const curColor = ref<string>('red')
const setColor = (color: string) => {
  curColor.value = color
}

// 通过provide暴露之后, 子组件就可以通过inject获取了
provide("color", readonly(curColor)) // 设置了readonly之后, 子组件就无法改变这个值了

</script>

<template>
  <h1>爷爷组件</h1>
  <el-button type="primary" @click="setColor('red')">红色</el-button>
  <el-button type="primary" @click="setColor('blue')">蓝色</el-button>
  <el-button type="primary" @click="setColor('pink')">粉色</el-button>
  <div class="box"></div>

  <hr>
  <ProvideA/>

  <hr>
  <ProvideB/>
</template>

<style scoped>
.box{
  width: 100px;
  height: 100px;
  background-color: v-bind(curColor);
}
</style>