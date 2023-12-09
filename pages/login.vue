<template>
    <div class="bg-slate-50 flex justify-evenly">
        <form @submit.prevent="submitForm" class="my-container">
            <div class="flex-col-gap">
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
</template>

<script setup>
const request = ref({
    email: '',
    password: '',
})

const auth = useAuthStore()

async function submitForm() {
    const { error } = await auth.login(request.value);
    console.log(error);
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