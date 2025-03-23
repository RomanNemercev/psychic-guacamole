<template>
  <div class="w-full shadow-header-shadow">
    <div class="w-full mx-auto px-[50px] max-w-desktop">
      <div class="flex items-center justify-between py-2.5">
        <NuxtLink to="/">
          <img src="/assets/img/logo-black.svg" alt="pro/code" />
        </NuxtLink>
        <div class="flex items-baseline">
          <div>
            <NuxtLink
              to="/"
              class="font-proxima text-midnight font-semibold mr-25px"
              >Услуги</NuxtLink
            >
            <NuxtLink
              to="/"
              class="font-proxima text-midnight font-semibold mr-25px"
              >Проекты</NuxtLink
            >
            <NuxtLink
              to="/"
              class="font-proxima text-midnight font-semibold mr-25px"
              >Этапы</NuxtLink
            >
            <NuxtLink to="/" class="font-proxima text-midnight font-semibold"
              >Журнал</NuxtLink
            >
          </div>
          <MyButton class="ml-50px">Контакты </MyButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
