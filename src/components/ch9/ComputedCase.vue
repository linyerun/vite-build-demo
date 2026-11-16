<script setup lang="ts">
import {reactive, ref, computed} from "vue";
let keyword = ref<string>('');
interface Data {
  name: string,
  price: number,
  num: number
}
const data = reactive<Data[]>([
  {
    name: '商品1',
    price: 100,
    num: 1,
  },
  {
    name: '商品2',
    price: 200,
    num: 2,
  },
  {
    name: '商品3',
    price: 300,
    num: 3,
  }
])

const searchData = computed(()=>data.filter(item => item.name.includes(keyword.value)))
const total = computed(()=>data.reduce((prev: number, cur: Data)=>prev+cur.num*cur.price, 0))
const del = (idx: number) => data.splice(idx, 1)
</script>

<template>
  <div>
    <input placeholder="请输入名称" v-model="keyword" type="text">
    <table style="margin-top:10px;" width="500" cellspacing="0" cellpadding="0" border>
      <thead>
      <tr>
        <th>物品</th>
        <th>单价</th>
        <th>数量</th>
        <th>总价</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in searchData">
        <td align="center">{{ item.name }}</td>
        <td align="center">{{ item.price }}</td>
        <td align="center">
          <button @click="item.num > 1 ? item.num-- : null">-</button>
          <input v-model="item.num" type="number">
          <button @click="item.num < 99 ? item.num++ : null">+</button>
        </td>
        <td align="center">{{ item.price * item.num }}</td>
        <td align="center">
          <button @click="del(index)">删除</button>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="5" align="right">
          <span>总价：{{ total }}</span>
        </td>
      </tr>
      </tfoot>

    </table>
  </div>
</template>

<style scoped>

</style>