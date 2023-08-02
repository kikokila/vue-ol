<template>
  <div>{{ title }}</div>
  <button @click="$emit('enlarge-text')">放大字体</button>
</template>

<script setup lang="ts">
defineProps(['title'])
defineEmits(['enlarge-text'])
</script>

<style scoped></style>
