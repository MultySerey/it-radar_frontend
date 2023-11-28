<template>
    <div class="bg-slate-50 flex justify-evenly">
        <div class="my-container">
            <form @submit.prevent="submitForm">
                <div class="flex-col-gap">
                    <div class="flex flex-col gap-2">
                        <label for="firstName">Имя</label>
                        <input id="firstName" type="firstName" v-model="request.firstName" class="border-2 rounded-lg p-2"
                            placeholder="Иван">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="lastName">Фамилия</label>
                        <input id="lastName" type="text" v-model="request.lastName" class="border-2 rounded-lg p-2"
                            placeholder="Иванов">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="email">Электронная почта</label>
                        <input id="email" type="email" v-model="request.email" class="border-2 rounded-lg p-2"
                            placeholder="Ivan.Ivanov@example.com">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="password">Пароль</label>
                        <input id="password" type="password" v-model="request.password" class="border-2 rounded-lg p-2"
                            placeholder="********">
                    </div>
                </div>
                <div>
                    <button type="submit"
                        class="w-fit bg-transparent hover:bg-blue-500 active:bg-blue-800 font-bold py-2 px-4 rounded-lg text-blue-500 hover:text-white border-2 border-blue-500 hover:border-transparent mt-8">
                        <span>Войти</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const request = ref({
    firstName:'',
    lastName:'',
    email: '',
    password: '',
})

const submitForm = async () => {
    const { data: response } = await useFetch('http://localhost:5000/api/auth/signup', {
        method: 'post',
        body: {
            firstName: request.value.firstName,
            lastName: request.value.lastName,
            email: request.value.email,
            password: request.value.password,
        }
    })
    console.log(response)
}
</script>

<style scoped>
h1 {
    @apply p-4
}

.flex-col-gap {
    @apply flex flex-col gap-4
}

.my-container {
    @apply bg-white container shadow-lg border w-1/3 my-8 px-16 py-8 text-center aspect-auto flex-col-gap justify-around
}
</style>