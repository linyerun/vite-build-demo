<script setup lang="ts">
import Tree from "./Tree.vue";
import type { Tree as ITree } from "./types.ts";

const trees: ITree[] = [
  {
    name: '1',
    checked: true,
    children: [
      {
        name: '1-1',
        checked: true,
      },
      {
        name: '1-2',
        checked: false,
      }
    ]
  },
  {
    name: '2',
    checked: true,
    children: [
      {
        name: '2-1',
        checked: true,
      },
      {
        name: '2-2',
        checked: false,
      }
    ]
  },
  {
    name: '3',
    checked: true,
    children: [
      {
        name: '3-1',
        checked: true,
        children: [
          {
            name: '3-1-1',
            checked: false,
          },
          {
            name: '3-1-2',
            checked: false,
          }
        ],
      },
      {
        name: '3-2',
        checked: false,
      }
    ]
  }
]
</script>

<template>

  <Tree :data="trees"/>

  <!--
  <Card content="lyr"/>
  <Card content="linyerun"/>
  <Card content="golang"/>
  <Card content="Java"/>
  -->

</template>

<style scoped>

</style>