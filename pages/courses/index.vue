<template>
    <div class="m-auto ms-16 my-8 p-8 grid grid-cols-3 gap-8 w-fit">
        <div v-for="course in data">
            <NuxtLink :to="`/courses/${course.id}`" class="p-4 border-4 rounded-lg flex flex-col gap-4">
                <p class="text-3xl font-semibold">{{ course.name }}</p>
                <p>{{ course.description }}</p>
                <p>{{ course.price }}</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { data } = await useApi('http://localhost:5000/api/courses')

//{ "id": 1, "name": null, "description": "Test Course Description", "price": 10000, "timeframe": 10, "rating": null }
</script>

<style scoped></style>