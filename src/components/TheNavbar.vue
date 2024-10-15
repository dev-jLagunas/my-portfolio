<script setup>
import { ref } from "vue";

// State
const isLanguageModalVisible = ref(false);

// Emits
const emit = defineEmits(["darkModeToggled"]);

const toggleDarkMode = () => {
  emit("darkModeToggled");
};

// Props
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    required: true,
  },
});

// Methods
const toggleLanguageModal = () => {
  isLanguageModalVisible.value = !isLanguageModalVisible.value;
};

const setLanguage = (lang) => {
  emit("change-language", lang);
  isLanguageModalVisible.value = false;
};
</script>

<template>
  <nav
    class="my-6 w-90vw mx-auto font-poppins"
    role="navigation"
    aria-label="Main navigation"
  >
    <ul class="flex justify-center text-white text-xs gap-2 lg:text-base">
      <li class="nav-link-emerald">
        <router-link to="/" aria-label="Main Projects">{{
          $t("nav.mainProjects")
        }}</router-link>
      </li>
      <li class="nav-link-orange">
        <router-link to="/about" aria-label="About Me">{{
          $t("nav.aboutMe")
        }}</router-link>
      </li>
      <li class="nav-link-emerald">
        <router-link to="/contact" aria-label="Contact">{{
          $t("nav.contact")
        }}</router-link>
      </li>
      <li class="nav-link-orange">
        <router-link to="/early-projects" aria-label="Early Projects">{{
          $t("nav.earlyWork")
        }}</router-link>
      </li>
      <li class="nav-link-emerald">
        <button @click="toggleDarkMode" aria-label="Toggle Dark Mode">
          {{ isDarkMode ? $t("nav.lightMode") : $t("nav.darkMode") }}
        </button>
      </li>
      <li class="nav-link-orange relative">
        <button @click="toggleLanguageModal" aria-label="Change Language">
          {{ $t("nav.language") }}
        </button>
        <div
          v-if="isLanguageModalVisible"
          class="absolute top-full right-0 mt-2 bg-emerald-500 px-6 py-2 rounded-tl-full rounded-br-full z-50 flex gap-2 text-sm divide-x-2 text-white"
        >
          <button
            @click="setLanguage('en')"
            class=""
            aria-label="Set language to English"
          >
            {{ $t("nav.english") }}
          </button>
          <button
            @click="setLanguage('es')"
            class="pl-2"
            aria-label="Set language to Spanish"
          >
            {{ $t("nav.spanish") }}
          </button>
          <button
            @click="setLanguage('jp')"
            class="pl-2"
            aria-label="Set language to Japanese"
          >
            {{ $t("nav.japanese") }}
          </button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
