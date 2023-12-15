<template>
    <div class="m-auto my-4 p-4 flex flex-wrap gap-4 w-fit">
        <div>
        </div>
    </div>
</template>

<script setup>
const auth = useAuthStore()

const { data } = await useFetch('http://localhost:5000/api/courses', {
    credentials: 'include'
});

console.log(data)
</script>

<style scoped></style>