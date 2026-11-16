<script setup lang="ts">

import CA from "./CA.vue";
import {ref} from "vue";
import CB from "./CB.vue";

const flag = ref(true);

/*
keep-alive:
  1、默认缓存全部组件
  2、:include="['AliveA']", 在数组中的组件名才缓存
  3、:exclude="['AliveA']", 在数组中的组件名不缓存
  4、:max="10",             根据LRU算法，只缓存最近使用过的10个组件
  5、两个配套的生命周期函数: onActivated、onDeactivated
* */

</script>

<template>
  <button @click="flag = !flag">切换组件</button>
  <keep-alive>
    <CA v-if="flag"/>
    <CB v-else/>
  </keep-alive>
</template>

<style scoped>

</style>