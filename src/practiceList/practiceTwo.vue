<template>
  <div>
    <button @click="count++">{{ count }}</button>
  </div>
  <div>
    <p>使用文本插值{{ rawHtml }}</p>
  </div>
  <div>
    <button :disabled="flag">按钮</button>
    <button @click="changeDisabled">点击改变左侧按钮状态</button>
  </div>
  <div>
    <a href="https://www.example.com" @click.prevent>
      进入网站（使用 .prevent 事件修饰符来阻止 a 元素的默认点击行为导致页面跳转）
    </a>
    <p></p>
    <a href="https://www.example.com"> 进入网站（未使用 .prevent 事件修饰符,可以跳转） </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

var count = ref(1)
var rawHtml = 'Hello Word'
var flag = ref(false)
var changeDisabled = () => {
  flag.value = !flag.value
}
</script>

<style scoped></style>
