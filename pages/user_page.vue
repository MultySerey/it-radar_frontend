<template>
    <h1 class="text-center">Ваш профиль</h1>
    <div class="shadow-lg flex mx-auto items-center justify-center gap-4 px-8 py-4 w-fit">
        <img src="" alt="Картинка профиля" class="border-2 w-60 h-60 rounded-full overflow-hidden">
        <div class="w-120 p-2 flex flex-col gap-2">
            <NicerInput text="Имя" placeholder="Иван Иванов" />
            <NicerInput text="Электронная почта" placeholder="Ivan.Ivanov@example.com" />
            <NicerInput text="Пароль" placeholder="********" />
            <div class="flex gap-4">
                <NicerButton text="Обновить данные" color="blue" />
                <NicerButton text="Удалить аккаунт" color="red" />
            </div>
        </div>
    </div>
    <h2 class="text-center">Мои отзывы</h2>
    <div>тут делаем запрос в БД по всем отзывам пользователя</div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['user']
})
</script>

<style scoped></style>