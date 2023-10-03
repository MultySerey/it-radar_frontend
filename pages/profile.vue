<template>
    <p>Личный кабинет</p>
    <div class="border-2 flex mx-auto items-center justify-center">
        <img src="" alt="Картинка профиля" class="border-2 w-60 h-80 rounded-lg">
        <div class="w-120 p-2 border-2 flex flex-col gap-2">
            <NiceInput text="Имя" placeholder="Иван Иванов" />
            <NiceInput text="Электронная почта" placeholder="Ivan.Ivanov@company.com" />
            <NiceInput text="Пароль" placeholder="********" />
            <div class="flex gap-4">
                <button
                    class="btn hover:bg-blue-700 text-blue-500 hover:text-white border-2 border-blue-500 hover:border-transparent mt-8">
                    <span>Обновить данные</span>
                </button>
                <button
                    class="btn hover:bg-red-700 text-red-500 hover:text-white border-2 border-red-500 hover:border-transparent mt-8">
                    <span>Удалить аккаунт</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>