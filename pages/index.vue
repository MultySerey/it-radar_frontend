<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <ul class="flex gap-4">
                <NuxtLink to="/">IT-радар</NuxtLink>
                <li><span>Курсы</span></li>
                <li><span>Поиск</span></li>
            </ul>
            <span>Личный кабинет</span>
        </nav>
    </header>
    <p>home page</p>
    <div class="mx-auto p-4 grid grid-cols-3 gap-4">
        <div v-for="c in 10">
            c
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>