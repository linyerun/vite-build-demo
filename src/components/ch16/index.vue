<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import {reactive, markRaw, ref, shallowRef} from "vue";

/*
* markRaw作用：标记一个对象，使其永远不会被转为响应式代理。Vue 会跳过对这个对象的响应式处理。
* */

const tabData = reactive<{name: string, com: any}[]>([
  {
    name: '组件A',
    com: markRaw(A),
  },
  {
    name: '组件B',
    com: markRaw(B),
  },
  {
    name: '组件C',
    com: markRaw(C),
  },
])
const active = ref<number>(0)
const curCom = shallowRef(tabData[active.value].com)

const switchCom = (item: {name: string, com:any}, index: number) => {
  active.value = index
  curCom.value = item.com
}
</script>

<template>
  <div style="display: flex;gap: 15px">
    <div v-for="(item,index) in tabData" :key="index"
         class="tab-item"
         :class="{active:active === index}"
         @click="switchCom(item,index)">
      <div>
        {{item.name}}
      </div>
    </div>
  </div>
  <component :is="curCom"></component>
</template>

<style scoped lang="less">
.tab-item{
  padding: 5px 15px;
  border: 1px solid black;
}
.active{
  background-color: deepskyblue;
}
</style>