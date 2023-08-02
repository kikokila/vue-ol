<template>
  <Child ref="child"></Child>
  <button @click="child?.setB">修改子组件的b</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Child from '@/components/TempRefer.vue'

const child = ref<InstanceType<typeof Child> | null>(null)
onMounted(() => {
  alert(child.value?.a)
})
</script>

<style scoped></style>
