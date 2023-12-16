<template>
    <div class="m-auto my-4 p-4 flex flex-wrap gap-4 w-fit">
        <div>
            <div v-for="course in data">
                {{ course }}
            </div>
        </div>
    </div>
</template>

<script setup>
const { data } = await useApi('http://localhost:5000/api/courses')
</script>

<style scoped></style>