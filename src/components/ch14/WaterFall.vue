<script setup lang="ts">
import { reactive, onMounted } from 'vue'
const waterList = reactive<any[]>([])
type Props = {
  list: any[]
}
const props = withDefaults(defineProps<Props>(), {
  list: () => []
})

const init = () => {
  const heightList: any[] = []
  const width = 130;
  const x = document.body.clientWidth
  const column = Math.floor(x / width)

  for (let i = 0; i < props.list.length; i++) {
    if (i < column) {
      props.list[i].top = 10;
      props.list[i].left = i * width;
      heightList.push(props.list[i].height + 10)
      waterList.push(props.list[i])
    } else {
      let current = heightList[0]
      let index = 0;
      heightList.forEach((h, inx) => {
        if (current > h) {
          current = h;
          index = inx;
        }
      })
      console.log(current,'c')
      props.list[i].top = (current + 20);
      console.log(props.list[i].top,'top',i)
      props.list[i].left = index * width;
      heightList[index] =  (heightList[index] + props.list[i].height + 20);
      waterList.push(props.list[i])
    }
  }
  console.log(props.list)
}

onMounted(() => {
  window.onresize = () => init() // 窗口尺寸发生变化时触发
  init()
})

</script>

<template>
  <div class="wraps">
    <div :style="{height:item.height+'px',background:item.background,top:item.top+'px',left:item.left + 'px'}"
         v-for="item in waterList" class="items"></div>
  </div>
</template>

<style scoped lang='less'>
.wraps {
  position: relative;
  height: 100%;
  .items {
    position: absolute;
    width: 120px;
  }
}
</style>