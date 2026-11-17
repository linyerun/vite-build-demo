<script setup lang="ts">
import { h, ref, defineComponent } from 'vue'

/**
 * h 函数 = hyperscript，用来创建 VNode（虚拟 DOM 节点）
 *
 * 三种参数形态：
 *   h('div')                          只有标签
 *   h('div', { id: 'box' })           标签 + props
 *   h('div', { id: 'box' }, '文本')    标签 + props + children
 *   h('div', [h('span')])             props 可省略，直接传 children
 *
 * template 最终也会被编译成 h（render 函数），h 是模板的"手写版"
 */

// ============================================================
// 1. 基础用法：一个"返回 h 结果的函数"就是一个函数式组件
//    在 h 里读取 ref 会被收集依赖，count 变化时组件自动重新渲染
// ============================================================
const count = ref(0)

const BasicDemo = () =>
  h('div', { class: 'demo-box' }, [
    h('p', `count = ${count.value}`),
    // 事件用 onXxx 形式：@click -> onClick
    h('button', { onClick: () => count.value++ }, 'count++'),
  ])

// ============================================================
// 2. props 详解：class / style / 普通 attribute / 事件
// ============================================================
const PropsDemo = () =>
  h('div', { class: 'demo-box' }, [
    h('p', {
      class: 'red', // class 支持字符串 / 数组 / 对象
      style: { fontSize: '16px', fontWeight: 'bold' }, // style 支持对象 / 字符串
      id: 'my-p', // 普通 HTML attribute 直接写
      title: '鼠标悬停看提示',
    }, '我有 class、style、id、title'),
    h('input', {
      placeholder: '输入会触发 onInput',
      onInput: (e: Event) => console.log('输入了:', (e.target as HTMLInputElement).value),
    }),
  ])

// ============================================================
// 3. children 的三种形式：字符串 / VNode 数组 / 插槽对象（见第 5 节）
// ============================================================
const ChildrenDemo = () =>
  h('div', { class: 'demo-box' }, [
    h('p', '我是字符串 children'),
    h('ul', [
      h('li', '数组 child 1'),
      h('li', '数组 child 2'),
      h('li', [h('b', 'children 可以继续嵌套 VNode')]),
    ]),
  ])

// ============================================================
// 4. 用 h 渲染组件：type 传组件定义，props 传值，onXxx 监听 emit
// ============================================================
const Child = defineComponent({
  props: { msg: { type: String, required: true } },
  emits: ['send'],
  setup(props, { emit }) {
    // setup 返回一个函数 => 这个函数就是组件的 render 函数
    return () =>
      h('div', [
        h('p', `父组件传来的 msg: ${props.msg}`),
        h('button', { onClick: () => emit('send', '我是子组件 emit 的数据') }, '向父组件传值'),
      ])
  },
})

const received = ref('（还没收到）')

const ComponentDemo = () =>
  h('div', { class: 'demo-box' }, [
    // 等价于 <Child msg="hello" @send="received = $event" />
    h(Child, {
      msg: 'hello h 函数',
      onSend: (val: string) => (received.value = val),
    }),
    h('p', `父组件收到: ${received.value}`),
  ])

// ============================================================
// 5. 插槽：children 传一个对象 { 插槽名: () => VNode }
//    作用域插槽：插槽函数能收到子组件传来的参数
// ============================================================
const Card = defineComponent({
  setup(_, { slots }) {
    return () =>
      h('div', { class: 'card' }, [
        h('header', slots.header?.()),
        h('main', slots.default?.()),
        // 调用插槽函数时传参 => 作用域插槽
        h('footer', slots.footer?.({ time: new Date().toLocaleTimeString() })),
      ])
  },
})

const SlotDemo = () =>
  h('div', { class: 'demo-box' }, [
    h(Card, null, {
      header: () => h('h4', '我是 header 插槽'),
      default: () => h('p', '我是默认插槽内容'),
      footer: (scope: { time: string }) => h('small', `渲染时间: ${scope.time}`),
    }),
  ])

// ============================================================
// 6. v-if / v-for 没有指令，直接用 JS 表达式和数组 map
// ============================================================
const show = ref(true)
const fruits = ref(['苹果', '香蕉', '橘子'])

const LogicDemo = () =>
  h('div', { class: 'demo-box' }, [
    h('button', { onClick: () => (show.value = !show.value) }, '切换 v-if'),
    // v-if / v-else => 三元表达式
    show.value ? h('p', 'show 为 true 时看到我') : h('p', 'else 分支'),
    // v-for => map，记得给 key
    h('ul', fruits.value.map((item) => h('li', { key: item }, item))),
    h('button', { onClick: () => fruits.value.push(`水果${fruits.value.length + 1}`) }, '追加一项'),
  ])

// ============================================================
// 7. v-model 的本质：value + onInput 手动绑定
// ============================================================
const text = ref('')

const ModelDemo = () =>
  h('div', { class: 'demo-box' }, [
    h('input', {
      value: text.value,
      onInput: (e: Event) => (text.value = (e.target as HTMLInputElement).value),
    }),
    h('p', `输入的内容: ${text.value}`),
  ])
</script>

<template>
  <div class="page">
    <h2>h 函数（render 函数）学习示例</h2>
    <p class="tip">下面每个区块都是一个"用 h 手写渲染"的组件，对照源码看注释即可</p>

    <h3>1. 基础用法 + 响应式</h3>
    <BasicDemo />

    <h3>2. props：class / style / attribute / 事件</h3>
    <PropsDemo />

    <h3>3. children：字符串 / 数组 / 嵌套</h3>
    <ChildrenDemo />

    <h3>4. h 渲染组件：传 props、监听 emit</h3>
    <ComponentDemo />

    <h3>5. 插槽：默认 / 具名 / 作用域插槽</h3>
    <SlotDemo />

    <h3>6. v-if / v-for 的 JS 写法</h3>
    <LogicDemo />

    <h3>7. v-model 的 JS 写法</h3>
    <ModelDemo />
  </div>
</template>

<style scoped>
.page {
  padding: 20px;
  text-align: left;
}
.tip {
  color: #888;
}
.demo-box {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
}
.demo-box :deep(.red) {
  color: red;
}
.demo-box :deep(.card) {
  border: 1px dashed #42b883;
  border-radius: 6px;
  padding: 8px;
}
button {
  margin-right: 8px;
}
</style>