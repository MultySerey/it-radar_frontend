<template>
    <div class="bg-slate-50 flex justify-evenly">
        <div class="my-container">
            <div class="flex-col-gap">
                <NicerInput text="Электронная почта" placeholder="Ivan.Ivanov@example.com" />
                <NicerInput text="Пароль" placeholder="********" />
            </div>
            <NicerButton text="Зарегистрироваться" color="blue" />
        </div>
    </div>
</template>

<script></script>

<style scoped>
h1{
    @apply p-4
}
.flex-col-gap{
    @apply flex flex-col gap-4
}
.my-container {
    @apply bg-white container shadow-lg border w-1/3 my-8 px-16 py-8 text-center aspect-auto flex-col-gap justify-around
}
</style>