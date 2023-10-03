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
    <div>
        <slot />
    </div>
</template>

<style scoped>
</style>