<template>
  <h2>我是子组件</h2>
  <br />
  <p>{{ str }}</p>
  <button @click="change">修改文本</button>
</template>

<script setup lang="ts">
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref
} from 'vue'

const str = ref('文本')
const change = () => {
  str.value = '文本修改后'
}
console.log('子组件setup')
onBeforeMount(() => {
  console.log('子组件创建之前======>')
})
onMounted(() => {
  console.log('子组件创建完成======>')
})
onBeforeUpdate(() => {
  console.log('子组件更新组件之前======>')
})
onUpdated(() => {
  console.log('子组件更新完成======>')
})
onBeforeUnmount(() => {
  console.log('子组件销毁之前======>')
})
onUnmounted(() => {
  console.log('子组件销毁完成======>')
})
</script>

<style scoped></style>
