<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">IT-радар</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/test">Курсы</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Поиск</NuxtLink>
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

<style scoped>.router-link-exact-active {
    color: #12b488;
}</style>