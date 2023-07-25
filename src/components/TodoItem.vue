<template>
    <div>{{ b }}</div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue';
const a = 1
const b = ref(2)

defineExpose({
    a,
    b,
    setB(){
        b.value++
    }
})
</script>



<style scoped></style>