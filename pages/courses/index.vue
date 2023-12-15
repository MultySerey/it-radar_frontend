<template>
    <div class="m-auto my-4 p-4 flex flex-wrap gap-4 w-fit">
        <div>
        </div>
    </div>
</template>

<script setup>
const auth = useAuthStore()

const accessCookie = useCookie('accessToken')
accessCookie.value = auth.token.accessToken

const { data } = await useFetch('http://localhost:5000/api/courses', {
    credentials: 'include',
    headers: {
        Authorization: auth.token.accessToken
    },
});

console.log(auth.token.accessToken)
</script>

<style scoped></style>