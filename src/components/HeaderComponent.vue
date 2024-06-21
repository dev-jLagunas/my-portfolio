<script setup>
import { defineEmits } from "vue";

// Emits
const emit = defineEmits(["darkModeToggled"]);

const toggleDarkMode = () => {
  emit("darkModeToggled");
};

//Props
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <header class="flex justify-evenly items-center">
    <button @click="toggleDarkMode">
      <i
        :class="isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
        class="text-2xl text-slate-600 dark:text-slate-200"
      ></i>
    </button>
    <p class="font-pacifico text-emerald-500 text-5xl">
      Hello<span class="text-5xl text-orange-400">!</span>
    </p>
    <div
      class="flex flex-col gap-1 text-xs text-slate-600 dark:text-slate-200 divide-y-2 divide-slate-200"
    >
      <button>EN</button>
      <button class="md:pl-1 pt-1 md:pt-0">JP</button>
      <button class="md:pl-1 pt-1 md:pt-0">ES</button>
    </div>
  </header>
</template>

<style scoped></style>
