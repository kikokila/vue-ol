<template>
    <a-layout style="min-height: 100vh;width:100%">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item key="1" @click="logInHome">
                    <pie-chart-outlined />
                    <span>首页</span>
                </a-menu-item>

                <a-menu-item key="3" @click="logInUser">
                    <user-outlined />
                    <span>用户列表</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0;width:100%">
                <a-dropdown class="drop-down">
                    <a class="ant-dropdown-link" @click.prevent>
                        admin
                        <DownOutlined />
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item>
                                <a href="javascript:;">
                                    <lock-outlined />修改密码</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;" @click="logOut">
                                    <login-outlined />注销登录</a>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-layout-header>
            <a-layout-content style="margin: 0 16px;width:100%">
                <router-view></router-view>
            </a-layout-content>
            <a-layout-footer style="text-align: center;width:100%">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import {
    PieChartOutlined,
    UserOutlined,
    LoginOutlined,
    LockOutlined
} from '@ant-design/icons-vue';
import { DownOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
const router = useRouter()
const logOut = () => {
    router.push({
        name: 'login'
    })
}
const logInUser = () => {
    router.push({
        name: 'user'
    })
}
const logInHome = () => {
    router.push({
        name: 'work'
    })
}

</script>
<style scoped lang="less">
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}

.drop-down {
    margin-left: 160vh;
}
</style>
  