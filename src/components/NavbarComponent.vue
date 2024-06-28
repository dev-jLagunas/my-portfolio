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
</script>

<template>
  <nav class="my-6 w-90vw mx-auto font-poppins">
    <ul class="flex justify-center text-white text-xs gap-2 lg:text-lg">
      <li class="nav-link-emerald">
        <router-link to="/">{{ $t("nav.mainProjects") }}</router-link>
      </li>
      <li class="nav-link-orange">
        <router-link to="/about">About Me</router-link>
      </li>
      <li class="nav-link-emerald">
        <router-link to="/contact">Get In Touch</router-link>
      </li>
      <li class="nav-link-orange">
        <button @click="toggleDarkMode">
          {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
        </button>
      </li>
      <li class="nav-link-emerald relative">
        <button @click="toggleLanguageModal">Language</button>
        <div
          v-if="isLanguageModalVisible"
          class="absolute top-full right-0 mt-2 bg-emerald-500 px-6 py-2 rounded-tl-full rounded-br-full z-50 flex gap-2 text-sm divide-x-2"
        >
          <button @click="$emit('change-language', 'en')">English</button>
          <button @click="$emit('change-language', 'es')" class="pl-2">
            Spanish
          </button>
          <button @click="$emit('change-language', 'jp')" class="pl-2">
            Japanese
          </button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
