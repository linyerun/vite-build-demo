<script setup lang="ts">
import { useTestStore } from './store'
import { storeToRefs} from 'pinia'

const Test = useTestStore()

// 解构store并让它的值保持响应式
const {current, name} = storeToRefs(Test)

const changeStore = async () => {
  // 方式1
  Test.name = 'newName1'
  Test.current++
  await new Promise(resolve => setTimeout(resolve, 2000))

  // 方式2
  Test.$patch({name: 'newName2'})
  await new Promise(resolve => setTimeout(resolve, 2000))
  Test.$patch({name: 'newName2-1', current: 10})
  await new Promise(resolve => setTimeout(resolve, 2000))

  // 方式3
  Test.$patch((state)=>{
    state.current++
    state.name = 'newName3'
  })
  await new Promise(resolve => setTimeout(resolve, 2000))

  // 方式4, 这种是全替换的
  Test.$state = {name: 'newName4', current: 100, user: null}
  await new Promise(resolve => setTimeout(resolve, 2000))

  // 方式5: 调用写好在action中的方法来改
  Test.setCurrent(10)
  Test.setName('newName5')
}

const resetPiniaState = () => {
  // 作用: 把state的内容恢复到初始状态
  Test.$reset()
}

// 作用就是每次state内的值发生变更就调用注册进去的回调函数
Test.$subscribe((args, state)=>{
  console.log('======$subscribe-args==>', args)
  console.log('======$subscribe-state=>', state)
},{
  detached: true, // 持续监听
  immediate: true, // 初始化完立刻调用一次
  flush: 'post',  // 组件更新之后执行
  deep: true,     // 深度监听
})

// store里面的action方法被调用时触发, detached设置为true持续监听
Test.$onAction((args)=>{
  console.log('=====$onAction-args==>', args)
}, true)

</script>

<template>
  <div>
    <el-button @click="changeStore">change</el-button>
  </div>
  <div>
    name: {{Test.name}}
  </div>
  <div>
    current: {{Test.current}}
  </div>
  <hr>
  <div>
    <div>
      解构-name: {{name}}
    </div>
    <div>
      解构-current: {{current}}
    </div>
    <hr>
    <el-button @click="Test.setUser">设置user</el-button>
    <div>
      userName: {{Test.userName}}
    </div>
    <div>
      user: {{Test.user}}
    </div>
    <hr>
    <el-button @click="resetPiniaState">pinia-reset</el-button>
  </div>
</template>

<style scoped>

</style>