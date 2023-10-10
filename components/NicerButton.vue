<template>
    <div>
        <button
            :class="`w-fit bg-transparent hover:bg-${props.color}-500 active:bg-${props.color}-800 font-bold py-2 px-4 rounded-lg text-${props.color}-500 hover:text-white border-2 border-${props.color}-500 hover:border-transparent mt-8`">
            <span>{{ props.text }}</span>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
    color: String,
});
</script>

<style scoped></style>