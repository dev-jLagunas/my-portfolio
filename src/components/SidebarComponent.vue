<script setup>
import { useRouter } from "vue-router";

// Emits
const emit = defineEmits(["closeSidebar", "darkModeToggled"]);

const closeSidebar = () => {
  emit("closeSidebar");
};

const toggleDarkMode = () => {
  emit("darkModeToggled");
};

// Router
const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
  closeSidebar();
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
          <button @click="toggleDarkMode">Dark Mode</button>
        </li>
        <li class="nav-link-orange hover:scale-125 duration-150">Language</li>
      </ul>
    </nav>
    <button class="mt-4 hover:scale-110 duration-300" @click="closeSidebar">
      <i class="fa-solid fa-times text-red-400 text-6xl"></i>
    </button>
  </aside>
</template>

<style scoped></style>
