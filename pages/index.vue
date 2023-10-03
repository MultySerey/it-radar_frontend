<template>
    <div class="mx-20 my-5 p-4 grid grid-cols-3 gap-5 border-2">
        <div v-for="c in 10" class="shadow-xl p-2">
            Компания {{ c }}
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>