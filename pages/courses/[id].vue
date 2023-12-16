<template>
    <div class="prose m-4">
        {{ data }}
    </div>
</template>

<script setup>
const {id} = useRoute().params
const auth = useAuthStore()

const { data } = await useFetch(`http://localhost:5000/api/courses?companyId=${id}`, {
    credentials: 'include',
    headers: {
        Authorization: `Bearer ${auth.token.accessToken}`
    },
});
</script>

<style scoped>

</style>