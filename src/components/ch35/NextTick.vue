<script setup lang="ts">
import {nextTick, ref, reactive} from 'vue'
let msgList = reactive([
  {
    msg: "Hello world"
  }
])
let msg = ref("")
let box = ref<HTMLDivElement>()

/*const send = () => {
  msgList.push({msg: msg.value})
  // 因为vue更新dom是异步的, 所以我们使用nextTick等更新完dom再调整滚动条到最底下
  nextTick(() => {
    box.value!.scrollTop = box.value!.scrollHeight  // 发送完消息后自动滚动到底部
  })
}*/
const send = async () => {
  msgList.push({msg: msg.value})
  // 因为vue更新dom是异步的, 所以我们使用nextTick等更新完dom再调整滚动条到最底下
  // await后面的逻辑就变成异步的了
  await nextTick()
  box.value!.scrollTop = box.value!.scrollHeight  // 发送完消息后自动滚动到底部
}

/*
const send = () => {
  msgList.push({msg: msg.value})
  // 因为vue更新dom是异步的, 所以我们使用Promise等更新完dom再调整滚动条到最底下
  Promise.resolve().then(()=>{
    box.value!.scrollTop = box.value!.scrollHeight  // 发送完消息后自动滚动到底部
  })
}
*/

</script>

<template>
  <div class="box" ref="box">
    <div class="item" v-for="(item,index) in msgList" :key="index">
      {{ item.msg }}
    </div>
  </div>
  <el-input v-model="msg" style="width: 200px"/>
  <el-button type="primary" @click="send">发送</el-button>
</template>

<style scoped lang="scss">
.box {
  width: 300px;
  border: 2px solid #ddd;
  height: 400px;
  overflow: auto;

  .item {
    height: 30px;
    line-height: 30px;
    padding-left: 1em;
    background-color: #dddddd;
    margin: 2px;
  }
}
</style>