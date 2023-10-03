<template>
    <div class="my-7 p-3 max-w-sm mx-auto text-center shadow-md">
        <p class="my-7 text-5xl font-bold">{{ error.statusCode }}</p>
        <p class="my-7 text-3xl">{{ error.message }}</p>
    </div>
</template>

<script setup>
defineProps(['error'])
</script>

<style scoped></style>