<template>
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">add a todo</label>
    <input v-model="newTodoText" id="new-todo" placeholder="例如喂猫">
    <button>增加</button>
  </form>
  <br>
  <ul>
    <TodoItem v-for="(todo, index) in todos" :key="todo.id" :title="todo.title" @remove="todos.splice(index, 1)"></TodoItem>
  </ul>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import TodoItem from './components/TodoItem.vue'
const newTodoText = ref('')
const todos = ref([
  {
    id: 1,
    title: '做饭'
  },
  {
    id: 2,
    title: '打扫卫生'
  },
  {
    id: 3,
    title: '遛狗'
  }
])
let nextTodoId = 4
const addNewTodo = () => {
  todos.value.push({
    id: nextTodoId++,
    title: newTodoText.value
  })
  newTodoText.value = ''
}


</script>



<style scoped></style>
