<template>
    <div class="m-auto my-4 p-4 flex flex-wrap gap-4 w-fit">
        <div v-for="company in test_json">
            <CompanyCard :company="company" />
        </div>
    </div>
</template>

<script setup>
const test_json = [
    {
        id: 0,
        name: "GeekBox",
        img_link: ""
    },
    {
        id: 1,
        name: "SkillBrains",
        img_link: ""
    },
]
</script>

<style scoped></style>