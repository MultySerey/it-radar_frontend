<template>
    <header class="shadow-sm bg-blue-200">
        <nav class="container mx-auto p-8 flex justify-between">
            <ul class="flex gap-8">
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
                <li>
                    <NuxtLink to="/about">О проекте</NuxtLink>
                </li>
            </ul>
            <NuxtLink to="/profile">Личный кабинет</NuxtLink>
        </nav>
    </header>
    <div>
        <slot />
    </div>
    <footer class="bg-blue-200 flex justify-around p-8">
        <div>
            <p>© 2023 MultySerey,</p>
            <p>ООО "Моя оборона". Все права защищены.</p>
        </div>
        <div>
            <p>Политика кон­фи­ден­ци­аль­но­сти</p>
            <p>Оценить работу сервиса</p>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    @apply text-blue-700 font-bold;
}
</style>