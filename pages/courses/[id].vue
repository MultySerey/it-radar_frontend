<template>
    <div class="m-auto ms-16 my-8 p-8 grid grid-cols-3 gap-8 w-fit">
        <div v-for="review in data" class="p-4 border-4 rounded-lg flex flex-col gap-4">
            {{ review }}
            <p>{{ review.author.firstName }} <span v-if="review.author.lastName">{{ review.author.lastName }}</span></p>
            <p class="text-2xl font-semibold">{{ review.text }}</p>
            <p>{{ review.createdAt.slice(0, 10) }}</p>
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const { data } = await useApi(`http://localhost:5000/api/reviews?courseId=${id}`)
</script>

<style scoped></style>