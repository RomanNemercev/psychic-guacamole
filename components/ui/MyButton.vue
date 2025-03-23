<template>
  <button
    class="bg-ribbon text-white py-2 px-[22px] rounded-ten text-base font-semibold hover:bg-ribbon/80 font-proxima h-fit"
    :type="type"
    :class="[customClass]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: "button" | "submit" | "reset";
  customClass?: string;
}>();
</script>
