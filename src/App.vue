<template>
  <h1>我是父组件</h1>
  <br>
  <A v-if="flag"></A>
  <button @click="flag=!flag">创建/销毁</button>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import A from './components/TodoItem.vue'
console.log('父组件setup')
const flag=ref(false)
</script>



<style scoped></style>
