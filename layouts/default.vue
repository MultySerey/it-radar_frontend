<template>
    <pre>{{ token }}</pre>
    <header class="shadow-sm bg-blue-200">
        <nav class="container mx-auto p-8 flex justify-between">
            <ul>
                <li>
                    <NuxtLink to="/">
                        <i>Логотип</i> <span>IT-радар</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/courses">Курсы</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">О проекте</NuxtLink>
                </li>
            </ul>
            <ul v-if="token">
                <li>
                    <NuxtLink to="/user_page">Личный кабинет</NuxtLink>
                </li>
                <li>
                    <button>Выйти</button>
                </li>
            </ul>
            <ul v-else>
                <li>
                    <NuxtLink to="/signup">Зарегистрироваться</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login">Войти</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <div>
        <slot />
    </div>
    <footer class="bg-blue-200 flex justify-around p-8">
        <div>
            <p>© 2023 IT-радар,</p>
            <p>Все права защищены.</p>
        </div>
        <div>
            <p>Политика кон­фи­ден­ци­аль­но­сти</p>
            <p>Оценить работу сервиса</p>
        </div>
    </footer>
</template>

<script lang="js" setup>
const { useAccessToken } = useAuth();
const token = useAccessToken();
</script>

<style scoped>
.router-link-exact-active {
    @apply text-blue-700 font-bold;
}

ul {
    @apply flex gap-8;
}
</style>