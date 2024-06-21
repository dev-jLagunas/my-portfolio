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
    <!-- <button @click="toggleDarkMode">
      <i
        :class="isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
        class="text-2xl text-slate-600 dark:text-slate-200"
      ></i>
    </button> -->

    <p class="font-pacifico text-emerald-500 text-5xl">
      Hello<span class="text-5xl text-orange-400">!</span>
    </p>
  </header>
</template>

<style scoped></style>
