
import { mergeProps } from 'vue';
<template>
    <div class="flex flex-col gap-2">
        <p>{{ props.text }}</p>
        <input type="text" class="border-2 rounded-lg p-2" :placeholder="props.placeholder">
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
    placeholder: String,
});
</script>

<style scoped></style>