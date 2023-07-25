<template>
    <div>{{ title }}</div>
    <button @click="$emit('enlarge-text')">放大字体</button>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue';
defineProps(['title'])
defineEmits(['enlarge-text'])
</script>


<style scoped></style>