<script setup lang="ts">
import Dialog from "./Dialog.vue";
import {type Directive, type DirectiveBinding, ref} from "vue";

const show = ref(false);
interface Value {
  background: string
  flag: boolean
}
const vMove: Directive = {
  created: () => {
    console.log("created====>");
  },
  beforeMount(...args: Array<any>) {
    // 在元素上做些操作
    console.log("beforeMount=======>");
    console.log(args);
  },
  mounted(el: HTMLElement, dir: DirectiveBinding<Value>) {
    el.style.background = dir.value.background;
    console.log("mounted========>");
  },
  beforeUpdate(el: HTMLElement, dir: DirectiveBinding<Value>) {
    el.style.background = dir.value.background
  },
  updated(...args: Array<any>) {
    console.log("更新结束");
    console.log(args);
  },
  beforeUnmount(...args: Array<any>) {
    console.log(args);
    console.log("======>卸载之前");
  },
  unmounted(...args: Array<any>) {
    console.log(args);
    console.log("======>卸载完成");
  },
}
const bg = ref('red')
</script>

<template>
  <button @click="show = !show">开关{{show}}</button>
  <div>
    <button @click="bg='red'">变红色</button>
    <button @click="bg='blue'">变蓝色</button>
    <button @click="bg='black'">变黑色</button>
  </div>
  <Dialog  v-move:arg1.l.y.r="{background:bg, flag:show}"></Dialog>
</template>

<style scoped>

</style>