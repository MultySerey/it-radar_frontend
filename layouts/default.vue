<template>
    <header class="shadow-sm bg-blue-50">
        <nav class="container mx-auto p-4 flex justify-between">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">
                        <i>Логотип</i> <span>IT-радар</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/courses">Курсы</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/search">Поиск</NuxtLink>
                </li>
            </ul>
            <NuxtLink to="/profile">Личный кабинет</NuxtLink>
        </nav>
    </header>
    <div>
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    @apply text-blue-700 font-bold;
}
</style>