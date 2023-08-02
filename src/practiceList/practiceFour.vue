<template>
  <div>
    <input placeholder="请输入名称" v-model="keyword" type="text" />
    <table
      style="margin-top: 10px"
      width="1000"
      height="300"
      cellspacing="0"
      cellpadding="0"
      border
    >
      <thead>
        <tr>
          <th>物品</th>
          <th>单价</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in searchData" :key="index">
          <td align="center">{{ item.name }}</td>
          <td align="center">{{ item.price }}</td>
          <td align="center">
            <button @click="item.num > 1 ? item.num-- : null">-</button>
            <input v-model="item.num" type="number" />
            <button @click="item.num < 99 ? item.num++ : null">+</button>
          </td>
          <td align="center">{{ item.num * item.price }}</td>
          <td align="center">
            <button @click="del(index)">删除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" align="right">
            <span>总价：{{ total }}</span>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

let keyword = ref<string>('')
interface Data {
  name: string
  price: number
  num: number
}
const data = reactive<Data[]>([
  {
    name: '帽子',
    price: 20,
    num: 1
  },
  {
    name: '衣服',
    price: 50,
    num: 1
  },
  {
    name: '鞋子',
    price: 100,
    num: 1
  }
])
let searchData = computed(() => {
  return data.filter((item) => item.name.includes(keyword.value))
})
let total = computed(() => {
  return searchData.value.reduce((prev: number, next: Data) => {
    return prev + next.num * next.price
  }, 0)
})
let del = (index: number) => {
  data.splice(index, 1)
}
</script>

<style scoped></style>
