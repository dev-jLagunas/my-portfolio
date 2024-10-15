<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Navbar from "@/components/TheNavbar.vue";
import Sidebar from "@/components/TheSidebar.vue";
import Header from "@/components/TheHeader.vue";
import SocialLinks from "@/components/SocialLinksComponent.vue";
import QuickLinks from "@/components/QuickAccessComponent.vue";

// State
const toggleSidebar = ref(false);
const isDarkMode = ref(false);

// I18n
const { locale } = useI18n();

const setLanguage = (lang) => {
  locale.value = lang;
};

// Methods
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};
</script>

<template>
  <div class="py-6 dark:bg-slate-900 relative h-max md:h-screen">
    <Header />
    <SocialLinks class="fixed top-1/3 left-2 z-10 lg:left-6" />
    <QuickLinks class="fixed right-2 top-1/3 lg:right-6" />
    <div class="text-center">
      <button
        @click="toggleSidebar = !toggleSidebar"
        class="text-3xl my-2 text-slate-600 dark:text-slate-400 md:hidden"
        aria-label="Toggle sidebar"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <transition name="fade">
        <Sidebar
          class="block fixed inset-0 z-10 md:hidden"
          v-if="toggleSidebar"
          :isDarkMode="isDarkMode"
          @darkModeToggled="toggleDarkMode"
          @change-language="setLanguage"
          @closeSidebar="toggleSidebar = false"
        />
      </transition>
    </div>
    <Navbar
      @change-language="setLanguage"
      @darkModeToggled="toggleDarkMode"
      :isDarkMode="isDarkMode"
      class="hidden md:block"
    />
    <main class="grid place-content-center dark:bg-slate-900">
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
