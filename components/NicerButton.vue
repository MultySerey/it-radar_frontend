<template>
    <div>
        <button
            :class="`w-fit bg-transparent font-bold py-2 px-4 rounded-lg hover:text-white border-2 hover:border-transparent mt-8 hover:bg-${props.color}-500 active:bg-${props.color}-800 text-${props.color}-500 border-${props.color}-500`">
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