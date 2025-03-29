<template>
  <div class="bg-white min-h-[546px] rounded-b-fifteen py-[32px] px-[34px]">
    <div class="flex gap-x-5 mb-25px">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="text-base font-semibold pb-1"
        :class="{ 'border-b-2 border-ribbon': activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.name }}
      </button>
    </div>
    <div>
      <component :is="tabs[activeTab].component"></component>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Здесь регистрируем компоненты табов
import WhatIsIncluded from "./WhatIncludedStart.vue";
import Stages from "./StagesStart.vue";
import Technologies from "./TechnologiesStart.vue";

const activeTab = ref(0);
const tabs = [
  { name: "Что входит", component: WhatIsIncluded },
  { name: "Этапы", component: Stages },
  { name: "Технологии", component: Technologies },
];
</script>
