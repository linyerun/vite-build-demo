<script setup lang="ts">
import {computed, ref} from "vue";

// 选项式写法
const firstName = ref("林")
const lastName = ref("叶润")
const fullName = computed({
  get() {
    // 这里面的值发生变更这个函数都会被触发
    console.log('computed get函数被触发了')
    return firstName.value + "-" + lastName.value
  },
  set(value) {
    // computed返回的值变更这个函数会被触发
    [firstName.value, lastName.value] = value.split("-")
    console.log('computed set函数被触发了')
  }
})
const change = () => {
  fullName.value = 'lin-yerun'
}

// 函数式写法, 只支持getter不支持setter
const fn = ref("林")
const ln = ref("叶润")
const fulln = computed(()=>fn.value+"-"+ln.value)
</script>

<template>
  <div>
    姓: <input v-model="firstName"/>
  </div>
  <div>
    名: <input v-model="lastName"/>
  </div>
  <div>
    姓名: <input v-model="fullName"/>
  </div>
  <div>
    <button @click="change">change</button>
  </div>
  <div>
    fn: <input v-model="fn"/>
  </div>
  <div>
    ln: <input v-model="ln"/>
  </div>
  <div>
    fulln: {{fulln}}
  </div>
</template>

<style scoped>

</style>