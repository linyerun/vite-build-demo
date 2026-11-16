<script setup lang="ts">
import {customRef} from "vue"


function myRef<T = any>(value: T) {
  let timer: any;
  return customRef(((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal: T) {
        clearTimeout(timer)
        timer = setTimeout(()=>{
          console.log('触发了set')
          value = newVal
          trigger()
        }, 500)
      }
    }
  }))
}


const name = myRef<string>('小林GoGoGo')

const change = () => {
  name.value += 'Go'
}

</script>

<template>
  <button @click="change">change</button>
  <div>{{name}}</div>
</template>

<style scoped>

</style>