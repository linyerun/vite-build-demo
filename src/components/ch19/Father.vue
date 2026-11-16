<script setup lang="ts">
import {ref} from "vue"
import Dialog from "./Dialog.vue";

let switchDialog = ref(false);
</script>

<template>
  <div class="box">
    <el-button type="primary" @click="switchDialog = !switchDialog">打开Dialog</el-button>

    <!--使用teleport将组件渲染到body标签下面，避免受到父组件的position: absolute;定位影响-->
    <teleport to="body" v-if="switchDialog">
      <Dialog>
        <template #default>
          弹框内容
        </template>
        <template #footer>
          <el-button @click="switchDialog = !switchDialog">关闭</el-button>
        </template>
      </Dialog>
    </teleport>
  </div>
</template>

<style scoped>
.box{
  width: 100%;
  height: 50%;
  background-color: gold;
  position: absolute;

}
</style>