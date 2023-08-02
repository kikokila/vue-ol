<template>
  <a-form
    id="aForm"
    ref="aForm"
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item label="账号" name="username" :rules="[{ required: true, message: '请输入账号!' }]">
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'

interface FormState {
  username: string
  password: string
  remember: boolean
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})
const router = useRouter()
const onFinish = () => {
  if (formState.username == 'admin' && formState.password == '123') {
    message.success('登录成功', 0.3, () => {
      router.push({
        name: 'reg',
        path: '/reg'
      })
    })
  } else {
    message.error('账号或密码输入错误')
  }
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
  message.warning('请输入账号和密码')
}
</script>

<style scoped>
#aForm {
  width: 300px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-80%, -50%);
}
</style>
