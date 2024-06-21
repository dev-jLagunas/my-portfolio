<script setup>
import { ref } from "vue";
import Navbar from "./components/NavbarComponent.vue";
import Sidebar from "./components/SidebarComponent.vue";
import Header from "./components/HeaderComponent.vue";
//State
const toggleSidebar = ref(false);
const isDarkMode = ref(false);

//Methods
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};
</script>

<template>
  <div class="dark:bg-slate-900">
    <Header @darkModeToggled="toggleDarkMode" :isDarkMode="isDarkMode" />
  </div>
</template>

<style scoped></style>
