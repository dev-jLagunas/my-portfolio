<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

// State
const isLanguageModalVisible = ref(false);

// Emits
const emit = defineEmits(["closeSidebar", "darkModeToggled"]);

const closeSidebar = () => {
  emit("closeSidebar");
};

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

// Router
const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
  closeSidebar();
};

// Methods
const toggleLanguageModal = () => {
  isLanguageModalVisible.value = !isLanguageModalVisible.value;
};

const setLanguage = (lang) => {
  console.log(`Language changed to: ${lang}`);
  isLanguageModalVisible.value = false;
};
</script>

<template>
  <aside class="flex-center-col bg-white font-poppins dark:bg-slate-900">
    <nav>
      <ul
        class="flex-start-col gap-4 text-2xl text-slate-600 dark:text-slate-200 hover:cursor-pointer"
      >
        <li class="text-6xl mb-4 text-emerald-500 font-pacifico pl-8">
          Howdy<span class="text-orange-400">!</span>
        </li>
        <li class="nav-link-orange hover:scale-125 duration-150">
          <button @click="navigateTo('/')">My main projects</button>
        </li>
        <li class="nav-link-emerald hover:scale-125 duration-150">
          <button @click="navigateTo('/about')">More about me</button>
        </li>

        <li class="nav-link-orange hover:scale-125 duration-150">
          <button @click="navigateTo('/contact')">Get in touch</button>
        </li>
        <li class="nav-link-emerald hover:scale-125 duration-150">
          <button @click="toggleDarkMode">
            {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
          </button>
        </li>
        <li class="nav-link-orange relative">
          <button @click="toggleLanguageModal">Language</button>
          <div
            v-if="isLanguageModalVisible"
            class="absolute top-full left-0 flex gap-2 mt-2 bg-orange-400 px-6 py-2 rounded-tr-full rounded-bl-full z-50 text-sm divide-x-2"
          >
            <button @click="setLanguage('en')">English</button>
            <button @click="setLanguage('es')" class="pl-2">Spanish</button>
            <button @click="setLanguage('jp')" class="pl-2">Japanese</button>
          </div>
        </li>
      </ul>
    </nav>
    <button class="mt-12 hover:scale-110 duration-300" @click="closeSidebar">
      <i class="fa-solid fa-times text-red-400 text-6xl"></i>
    </button>
  </aside>
</template>

<style scoped></style>
