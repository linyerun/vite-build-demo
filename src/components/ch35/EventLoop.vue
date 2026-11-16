<script setup lang="ts">
async function Prom() {
  console.log('Y')
  await Promise.resolve()
  console.log('X')
}

setTimeout(() => {
  console.log(1)
  Promise.resolve().then(() => {
    console.log(2)
  })
}, 0)
setTimeout(() => {
  console.log(3)
  Promise.resolve().then(() => {
    console.log(4)
  })
}, 0)

Promise.resolve().then(() => {
  console.log(5)
})
Promise.resolve().then(() => {
  console.log(6)
})
Promise.resolve().then(() => {
  console.log(7)
})
Promise.resolve().then(() => {
  console.log(8)
})

Prom()
console.log(0)
// 宏任务队列: setTimeout1、setTimeout2
// 微任务队列: 5、6、7、8、await Promise.resolve()

// 宏任务队列: setTimeout2
// 微任务队列: 2
// Y=>0=>5=>6=>7=>8=>X=>1=>2=>3=>4

</script>

<template>

</template>

<style scoped>

</style>