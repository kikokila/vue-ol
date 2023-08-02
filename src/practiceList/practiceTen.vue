<template>
  <h1>我是父组件(在控制台输出生命周期钩子信息)</h1>
  <br />
  <A v-if="flag"></A>
  <button @click="flag = !flag">创建/销毁</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import A from '@/components/ChildPage.vue'

console.log('父组件setup')
const flag = ref(false)
</script>

<style scoped></style>
