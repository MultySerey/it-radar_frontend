<template>
    <div class="flex justify-evenly">
        <div class="my-container">
            <h1>Зарегистрироваться</h1>
            <NicerInput text="Электронная почта" placeholder="Ivan.Ivanov@example.com" />
            <NicerInput text="Пароль" placeholder="********" />
        </div>
        <div class="my-container">
            <h1>Войти</h1>
            <NicerInput text="Электронная почта" placeholder="Ivan.Ivanov@example.com" />
            <NicerInput text="Пароль" placeholder="********" />
            <NicerButton text="Войти" color="blue" />
        </div>
    </div>
</template>

<script></script>

<style scoped>
.my-container {
    @apply container shadow-lg border w-1/3 my-8 p-4 text-center
}
</style>