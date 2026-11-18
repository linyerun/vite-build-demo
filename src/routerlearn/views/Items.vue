<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const data = [
  {
    id: 1,
    name: '111',
    price: 111,
    toDetail(){
      router.push({
        name: 'Query',
        query: {id: this.id, name: this.name, price: this.price},
      })
    }
  },
  {
    id: 2,
    name: '222',
    price: 222,
    toDetail(){
      // 这种方式传值的缺点就是一刷新数据就没有了，因为是基于内存来做的
      router.push({
        name: 'Param',
        state: {id: this.id, name: this.name, price: this.price},
      })
    }
  },
  {
    id: 3,
    name: '333',
    price: 333,
    toDetail(){
      router.push({
        name: 'Path',
        params: {id: this.id},
      })
    }
  }
]
</script>

<template>
  <table class="data-table">
    <thead>
    <tr>
      <th>ID</th>
      <th>品牌</th>
      <th>价格</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in data" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>
        <el-button @click="item.toDetail()">详情</el-button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 8px 12px;
  text-align: center;
}

.data-table thead th {
  background-color: #f5f5f5;
  font-weight: 600;
}

.data-table tbody tr:hover {
  background-color: #f9f9f9;
}

.data-table button {
  cursor: pointer;
  padding: 4px 12px;
}
</style>