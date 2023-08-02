<template>
  <ul>
    <li>x的值为:{{ x }}</li>
    <li>y的值为:{{ y }}</li>
    <li>x+y的值为:{{ x + y }}</li>
  </ul>
  <p></p>
  <button @click="x++">x值+1</button>
  <button @click="y++">y值+1</button>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'

const x = ref(1)
const y = ref(1)
watch(x, (newVal) => {
  console.log('(watch函数)x值改变为' + newVal)
})
watchEffect(() => {
  if (x.value) {
    console.log('(watchEffect函数)x值改变为' + x.value)
  }
  if (y.value) {
    console.log('(watchEffect函数)y值改变为' + y.value)
  }
})
</script>

<style scoped></style>
