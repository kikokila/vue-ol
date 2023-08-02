<template>
  <div>
    点击数字加一
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(1)
</script>

<style scoped></style>
