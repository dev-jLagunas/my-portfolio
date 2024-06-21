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
  <div>
    <button
      @click="toggleSidebar = !toggleSidebar"
      class="text-slate-600 md:hidden duration-500 hover:scale-125 dark:text-slate-300 text-4xl"
    >
      <i class="fa-solid fa-bars"></i>
    </button>
    <transition name="fade">
      <Sidebar
        @closeSidebar="toggleSidebar = false"
        v-if="toggleSidebar"
        class="block fixed inset-0 bg-white md:hidden z-10"
      />
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: transform 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-100%);
}
</style>
