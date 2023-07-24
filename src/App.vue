<template>
  <div v-if="flag">v-if渲染</div>
  <br>
  <div v-show="flag">v-show渲染</div>
  <br>
  <button @click="flag = !flag">点击改变状态</button>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
var flag = ref(true)
</script>



<style scoped>
.active {
  font-size: 50px;
}

.helloWorld {
  background-color: pink;
}
</style>
