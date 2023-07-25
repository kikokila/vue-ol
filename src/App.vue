<template>
  <div>
    <input type="text" v-model.trim="uname">
    过滤输入的首空格字符：{{ uname }}
  </div>
  <br>
  <div class="father" @click="fatherClick">
    <a herf="http:www.baidu.com" @click.stop>百度(加了.stop)</a>
    <br>
    <a herf="http:www.baidu.com">百度2(未加.stop)</a>
  </div>
  <br>
  <div @click.capture="one">
    obj1(加了.capture)
    <div @click.capture="two">
      obj2(加了.capture)
      <div @click="three">
        obj3(未加.capture)
        <div @click="four">
          obj4(未加.capture)
        </div>
      </div>
    </div>
  </div>
  <br>
  <div>
    <button @click.left="getClick">点左键触发</button>
    <button @click.middle="getClick">点中键触发</button>
    <button @click.right="getClick">点右键触发</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
const uname = ref('')
const fatherClick = () => {
  alert('.stop阻止冒泡')
}
const one = () => {
  alert('one')
}
const two = () => {
  alert('two')
}
const three = () => {
  alert('three')
}
const four = () => {
  alert('four')
}
const getClick = () => {
  alert('触发成功')
}

</script>



<style scoped></style>
