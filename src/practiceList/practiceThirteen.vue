<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <A
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    ></A>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import A from '@/components/ChildComp.vue'

const posts = ref([
  { id: 1, title: '第一段' },
  { id: 2, title: '第二段' },
  { id: 3, title: '第三段' }
])
const postFontSize = ref(1)
</script>

<style scoped></style>
