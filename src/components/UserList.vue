<template>
    <a-table :columns="columns" :data-source="dataSource">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
                <span>
                    <smile-outlined />
                    Name
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
                <a>
                    {{ record.name }}
                </a>
            </template>
            <template v-else-if="column.key === 'action'" >
                <span>
                    <a @click="del(record.key)">Delete</a>
                </span>
            </template>
        </template>
    </a-table>
</template>
<script lang="ts" setup>
import service from "@/request";
import { ref } from 'vue'
import { SmileOutlined } from '@ant-design/icons-vue';
const dataSource = ref([])
const columns = ref([])
service({
    url: '/test',
    method: 'get'
}).then(res => {
    dataSource.value = res.data.dataSource
    //console.log(dataSource,'111')
    columns.value = res.data.columns
})
const del = (id:any) => {
    service.post('/removeById', id).then(res => {
        dataSource.value = res.data.dataSource
    })
}

</script>
  
  