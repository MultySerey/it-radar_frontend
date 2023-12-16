<template>
    <div class="prose m-4">
        {{ data }}
    </div>
</template>

<script setup>
const { id } = useRoute().params
const { data } = await useApi(`http://localhost:5000/api/courses?companyId=${id}`)
</script>

<style scoped></style>