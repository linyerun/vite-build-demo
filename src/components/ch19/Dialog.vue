<template>
  <div class="zx-dialog">
    <slot></slot>
    <div class="zx-dialog__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.zx-dialog {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
  border: 1px solid #ccc;
  background-color: #c6e2ff;
  &__footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    text-align: right;
  }
}
</style>