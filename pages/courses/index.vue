<template>
    <div class="m-auto ms-16 my-8 p-8 flex flex-wrap gap-8 place-content-evenly">
        <div v-for="course in data">
            <NuxtLink :to="`/courses/${course.id}`" class="w-96 p-4 border-4 rounded-lg flex flex-col gap-4 content-between">
                <p>{{ course.company }}</p>
                <p class="text-2xl font-semibold">{{ course.name }}</p>
                <p class="text-xl font-semibold">{{course.rating}}</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { data } = await useApi('http://localhost:5000/api/courses?companyId=${id}')

//{ "id": 1, "name": null, "description": "Test Course Description", "price": 10000, "timeframe": 10, "rating": null }
</script>

<style scoped></style>