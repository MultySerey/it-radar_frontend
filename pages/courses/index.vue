<template>
    <div class="m-auto my-4 p-4 flex flex-wrap gap-4 w-fit">
        <div v-for="course in data"
        class="shadow-lg p-8">
            {{ course }}
            <NuxtLink :to="`/courses/${course.id}`">
                <p>{{ course.name }}</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const auth = useAuthStore()

const { data } = await useFetch('http://localhost:5000/api/courses', {
    credentials: 'include',
    headers: {
        Authorization: `Bearer ${auth.token.accessToken}`
    },
});
</script>

<style scoped></style>