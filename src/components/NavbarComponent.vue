<script setup>
// Emits
const emit = defineEmits(["darkModeToggled"]);

const toggleDarkMode = () => {
  emit("darkModeToggled");
};
</script>

<template>
  <nav class="my-6 w-90vw mx-auto font-poppins">
    <ul class="flex justify-center text-white text-xs gap-2 lg:text-lg">
      <li class="nav-link-emerald">
        <router-link to="/">Main Projects</router-link>
      </li>
      <li class="nav-link-orange">
        <router-link to="/about">About Me</router-link>
      </li>
      <li class="nav-link-emerald">
        <router-link to="/contact">Get In Touch</router-link>
      </li>
      <li class="nav-link-orange">
        <button @click="toggleDarkMode">Dark Mode</button>
      </li>
      <li class="nav-link-emerald"><button>Language</button></li>
    </ul>
  </nav>
</template>

<style scoped></style>
