<template>
  <div>
    <!-- 第一种：放置字符串 -->
    <div class="active">hello</div>

    <!-- 第二种：放置对象 -->
    <!-- 语法结构为： <p :class="{类名：boolean}">hello1</p> -->
    <!--写法一：用true和false来决定是否使用这个属性-->
    <p :class="{ active: true }">hello1</p>

    <!-- 写法二：给“isActive赋值” -->
    <p :class="{ active: isActive }">hello2</p>
    <!-- 当有多个类名时，用逗号隔开 -->
    <p :class="{ active: isActive, helloWorld: isActive }">hello3</p>
    <!-- 下面写一个按钮，取反，可以直观地观察数据前后变化 -->
    <button @click="isActive = !isActive">改变active</button>
    <!-- 当有多个class时，不会被覆盖掉(和普通的类同时存在，不会起冲突) -->
    <p :class="{ active: isActive }" class="helloWorld">hello4</p>

    <!-- 写法三：绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象 -->
    <p :class="classObj">hello5</p>

    <!-- 写法四：使用computed -->
    <p :class="classObjCom">hello-computed</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

var isActive = ref(true)
var error = ref(null)
var classObj = ref({
  active: true,
  helloWorld: true
})
var classObjCom = computed(() => {
  return {
    // 只有当这两个条件同时成立的时候，才会显示active
    active: isActive && !error.value,
    helloWorld: error
    // 这里只会显示active的样式，
    //当data中error返回值不为null的时候，才会显示helloWorld的样式，而不显示active的样式
  }
})
</script>

<style scoped>
.active {
  font-size: 30px;
}

.helloWorld {
  background-color: pink;
}
</style>
