<template>
  <button
    class="bg-ribbon text-white py-2 px-[22px] rounded-ten text-base hover:bg-ribbon/80 font-proxima h-fit transition-colors"
    :type="type"
    :class="[customClass]"
    :style="{ fontWeight: fontWeight, minHeight: minHeight }"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    customClass?: string;
    fontWeight?: number | string;
    minHeight?: string;
  }>(),
  {
    fontWeight: 600,
    minHeight: "50px",
  }
);
</script>
