<script setup lang="ts">
import {onMounted, ref} from "vue";

const props = defineProps<{
  modelValue?: string
  flag: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update:flag', value: boolean): void
}>()

const input = ref<string>()
const flag = ref<boolean>()
onMounted(()=>{
  input.value = props.modelValue
  flag.value = props.flag
})

const changeVal = (e: string) => {
  emit('update:modelValue', e)
}
const changeFlag = () => {
  flag.value = !flag.value
  emit('update:flag', flag.value)
}

</script>

<template>
  <div>
    <el-input v-model="input" placeholder="输入提示" @input="changeVal" style="width: 200px"/>
    <el-button @click="changeFlag">改变flag的值</el-button>
  </div>
</template>

<style scoped>

</style>