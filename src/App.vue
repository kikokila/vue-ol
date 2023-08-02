<template>
  <div id="global-loading"></div>
  <div class="container">
    <div class="nav-bar">
      <button v-for="item in buttonList" :key="item.id" class="btn" @click="clickBtn(item)">
        {{ item.id }}. {{ item.title }}
      </button>
    </div>
    <div class="right-title">{{ title }}</div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface buttonAttr {
  id: number
  title: string
  path: string
}
//列表
const buttonList: Array<buttonAttr> = [
  {
    id: 1,
    title: '创建一个应用',
    path: '/'
  },
  {
    id: 2,
    title: '模板语法',
    path: '/2'
  },
  {
    id: 3,
    title: '响应式基础',
    path: '/3'
  },
  {
    id: 4,
    title: '计算属性',
    path: '/4'
  },
  {
    id: 5,
    title: '类与样式绑定',
    path: '/5'
  },
  {
    id: 6,
    title: '条件渲染',
    path: '/6'
  },
  {
    id: 7,
    title: '列表渲染',
    path: '/7'
  },
  {
    id: 8,
    title: '事件处理',
    path: '/8'
  },
  {
    id: 9,
    title: '表单输入绑定',
    path: '/9'
  },
  {
    id: 10,
    title: '生命周期',
    path: '/10'
  },
  {
    id: 11,
    title: '侦听器',
    path: '/11'
  },
  {
    id: 12,
    title: '模板引用',
    path: '/12'
  },
  {
    id: 13,
    title: '组件基础',
    path: '/13'
  }
]

//标题
const title = ref('vue-practice')
const router = useRouter()
const clickBtn = (item: buttonAttr) => {
  title.value = item.title
  router.push({
    path: item.path
  })
}
</script>

<style scoped>
#global-loading {
  background: linear-gradient(to right, rgb(13, 90, 141), rgb(181, 218, 235), rgb(86, 140, 223));
  height: 3px;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 0;
  animation: grow 0.2s infinite forwards;
}

@keyframes grow {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
}
.container {
  width: 100vw;
  height: 100vh;
  background-color: #edf6f9;
}

.nav-bar {
  float: left;
  height: 100%;
  width: 15%;
  border-right-style: solid;
  border-right-color: #54ccf5;
  border-width: 2px;
  display: flex;
  flex-direction: column;
}

.btn {
  height: 50px;
}

.right-title {
  float: left;
  height: 10%;
  width: 85%;
  text-align: center;
  font-size: 50px;
  border-bottom-style: solid;
  border-bottom-color: #54ccf5;
  border-width: 2px;
}

.content {
  float: left;
  height: 90%;
  width: 85%;
}
</style>
