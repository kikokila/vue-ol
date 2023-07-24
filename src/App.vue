<template>
  <div>
    <p>{{ count }}</p>
    <button @click="count++">+1（ref示例）</button>
  </div>
  <div>
    <p>{{ person }}</p>
    <button @click="changeAge">修改深层属性年龄（shallowRef深层响应示例,修改失败）</button>
    <br>
    <button @click="changePerson">修改浅层ref-Person（shallowRef浅层响应示例）</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, shallowRef } from 'vue'
const count = ref(0)
const person = shallowRef({ age: 18, name: '小李' })
const changeAge = () => {
  person.value.age = 19
}
const changePerson = () => {
  person.value = { name: '浅层修改', age: 20 }
}

</script>



<style scoped></style>
