<script setup>
// Emits
const emit = defineEmits(["darkModeToggled"]);

const toggleDarkMode = () => {
  emit("darkModeToggled");
};
</script>

<template>
  <nav class="my-4 w-90vw mx-auto py-2 font-poppins">
    <ul
      class="flex justify-around text-slate-600 dark:text-slate-200 lg:justify-center gap-2 text-xs lg:text-base"
    >
      <li
        class="bg-emerald-500 text-white py-1 px-6 rounded-tr-full rounded-bl-full"
      >
        <router-link to="/">My Main Projects</router-link>
      </li>
      <li
        class="bg-orange-400 text-white py-1 px-6 rounded-tl-full rounded-br-full"
      >
        <router-link to="/about">More About Me</router-link>
      </li>

      <li
        class="bg-emerald-500 text-white py-1 px-6 rounded-tr-full rounded-bl-full"
      >
        <router-link to="/contact">Get In Touch</router-link>
      </li>
      <li
        class="bg-orange-400 text-white py-1 px-6 rounded-tl-full rounded-br-full"
      >
        <button @click="toggleDarkMode">Dark Mode</button>
      </li>
      <li
        class="bg-emerald-500 text-white py-1 px-6 rounded-tr-full rounded-bl-full"
      >
        Language
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
