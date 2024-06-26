<script setup>
import { ref } from "vue";
import Navbar from "@/components/NavbarComponent.vue";
import Sidebar from "@/components/SidebarComponent.vue";
import Header from "@/components/HeaderComponent.vue";

// State
const toggleSidebar = ref(false);
const isDarkMode = ref(false);

// Methods
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};
</script>

<template>
  <div class="py-6 dark:bg-slate-900">
    <Header />
    <div class="text-center">
      <button
        @click="toggleSidebar = !toggleSidebar"
        class="text-3xl my-2 text-slate-600 dark:text-slate-400 md:hidden"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <transition name="fade">
        <Sidebar
          class="block fixed inset-0 z-10 md:hidden"
          v-if="toggleSidebar"
          @darkModeToggled="toggleDarkMode"
          @closeSidebar="toggleSidebar = false"
        />
      </transition>
    </div>
    <Navbar @darkModeToggled="toggleDarkMode" class="hidden md:block" />
    <main class="grid place-content-center">
      <router-view v-slot="{ Component }">
        <transition name="page">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: transform 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-100%);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 1s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
