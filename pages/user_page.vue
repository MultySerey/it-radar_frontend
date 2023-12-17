<template>
    <h2 class="text-center py-8">Ваш профиль</h2>
    <div class="shadow-lg flex mx-auto items-center justify-center gap-4 px-8 py-4 w-fit">
        <img src="/alex-d-J93PXpBPCFI-unsplash.png" alt="Картинка профиля"
            class="border-2 w-60 h-60 rounded-full overflow-hidden">
        <div class="w-120 p-2 flex flex-col gap-2">
            <NicerInput text="Имя" placeholder="Иван Иванов" />
            <NicerInput text="Электронная почта" placeholder="Ivan.Ivanov@example.com" />
            <NicerInput text="Пароль" placeholder="********" />
            <div class="flex gap-4">
                <button
                    class="w-fit bg-transparent hover:bg-blue-500 active:bg-blue-800 font-bold py-2 px-4 rounded-lg text-blue-500 hover:text-white border-2 border-blue-500 hover:border-transparent mt-8">
                    <span>Обновить данные</span>
                </button>
                <button
                    class="w-fit bg-transparent hover:bg-red-500 active:bg-red-800 font-bold py-2 px-4 rounded-lg text-red-500 hover:text-white border-2 border-red-500 hover:border-transparent mt-8">
                    <span>Удалить аккаунт</span>
                </button>
            </div>
        </div>
    </div>
    <h2 class="text-center py-8">Ваши отзывы</h2>
</template>

<script lang="ts" setup>
</script>

<style scoped></style>