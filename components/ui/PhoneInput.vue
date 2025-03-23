<template>
  <div class="flex flex-col">
    <input
      v-model="inputValue"
      :placeholder="placeholder"
      inputmode="numeric"
      :class="[
        'rounded-ten px-4 py-3.5 border outline-none transition-all bg-whisper',
      ]"
      @input="onInput"
      @blur="validate"
      @keydown="onKeydown"
      :maxlength="18"
    />
    <p v-if="error" class="text-sm font-normal text-monza mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const inputValue = ref("");
const error = ref("");
const placeholder = "+7 (000) 000-00-00";
const emit = defineEmits(["update:modelValue"]);

function onInput(e: Event) {
  const raw = (e.target as HTMLInputElement).value;
  const digits = raw.replace(/\D/g, "");

  let formatted = "+7";
  if (digits.length > 1) formatted += " (" + digits.slice(1, 4);
  if (digits.length >= 4) formatted += ") " + digits.slice(4, 7);
  if (digits.length >= 7) formatted += "-" + digits.slice(7, 9);
  if (digits.length >= 9) formatted += "-" + digits.slice(9, 11);

  inputValue.value = formatted;
  emit("update:modelValue", digits);
  error.value = "";
}

function onKeydown(e: KeyboardEvent) {
  const input = e.target as HTMLInputElement;

  if (
    e.key === "Backspace" &&
    input.selectionStart === input.selectionEnd &&
    input.selectionStart !== null &&
    input.selectionStart > 0
  ) {
    const pos = input.selectionStart;
    const prevChar = input.value[pos - 1];

    // Удаляем, если это не цифра
    if (/\D/.test(prevChar)) {
      e.preventDefault();
      const newPos = pos - 1;
      input.setSelectionRange(newPos, newPos);
    }
  }
}

function validate() {
  const digits = inputValue.value.replace(/\D/g, "");
  if (props.required && digits.length !== 11) {
    error.value = "Это поле обязательно для заполнения";
  }
}
</script>

<style scoped>
input::placeholder {
  font-size: 16px;
  font-weight: 400;
  color: #79869a;
}
</style>
