<template>
  <div>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
var count = ref(1)

</script>



<style scoped></style>
