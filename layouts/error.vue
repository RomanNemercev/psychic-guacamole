<template>
    <div class="text-center mt-20">
        <h1 class="text-4xl font-bold text-red-600">Ошибка {{ error.statusCode }}</h1>
        <p class="text-lg mt-2">{{ error.message }}</p>
        <NuxtLink to="/" class="mt-5 inline-block underline text-blue-500">На главную</NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps(['error'])
</script>