<template>
    <li>
        {{ title }}
        <button @click="$emit('remove')">删除</button>
    </li>
</template>

<script setup lang="ts">
defineProps(['title'])
defineEmits(['remove'])
</script>



<style scoped>

</style>