<template>
    <div class="w-96 p-2 shadow-md hover:shadow-lg active:shadow-inner rounded-lg">
        <NuxtLink :to="`/courses/${company.id}`">
            <img :src="company.img_link" alt="Логотип компании">
            <p>{{ company.name }}</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    company: {
        id: Number,
        name: String,
        img_link: String
    }
});

console.log(props)
</script>

<style scoped></style>