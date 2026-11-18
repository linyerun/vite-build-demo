<script setup lang="ts">
import {getData} from "./index.ts";
import {ref} from "vue";

type DataType = {
  title: string,
  description: string,
  url: string,
  image: string,
}
const dataList = ref<DataType[]>([]);

// <script setup> 中可以使用顶层 await。结果代码会被编译成 async setup(), 就变成异步组件了，配合Suspense实现异步加载效果
const data = await getData()
await new Promise(resolve => {setTimeout(resolve, 2000)})
dataList.value = data.data
console.log(dataList.value)

</script>

<template>
  <div v-for="item in dataList" class="new-box">
    <div class="image">
      <img :src="item.image" alt=""/>
    </div>
    <div class="content">
      <div class="title">{{item.title}}</div>
      <div class="desc">{{item.description}}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.new-box{
  display: flex;
  gap: 15px;
  .image{
    width: 200px;
    border-radius: 5px;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .content{
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title{
      font-weight: 700;
      font-size: 16px;
    }
  }
}
</style>