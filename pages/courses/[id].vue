<template>
    <div class="m-auto ms-16 my-8 p-8 flex flex-wrap gap-8 place-content-evenly">
        <div v-for="review in data" class="w-96 p-4 border-4 rounded-lg flex flex-col gap-4">
            <p>{{ review.author.firstName }}</p>
            <p class="text-lg font-semibold">{{ review.text.replace('\\n','\n') }}</p>
            <p>{{ review.createdAt.slice(0, 10) }}</p>
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const { data } = await useApi(`http://localhost:5000/api/reviews?courseId=${id}`)
console.log(data)
</script>

<style scoped>
</style>