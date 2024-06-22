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
  <aside
    class="dark:bg-slate-900 flex justify-center items-center flex-col bg-white"
  >
    <nav class="font-poppins">
      <ul
        class="flex flex-col justify-center items-start text-slate-600 dark:text-slate-200 text-2xl gap-4 hover:cursor-pointer"
      >
        <li class="text-6xl mb-8 text-emerald-500 font-pacifico mx-auto">
          Howdy<span class="text-orange-400">!</span>
        </li>
        <li
          class="bg-orange-400 text-white py-2 px-6 rounded-br-full rounded-tl-full hover:scale-125 duration-150"
        >
          <button @click="navigateTo('/')">My main projects</button>
        </li>
        <li
          class="bg-emerald-500 text-white py-2 px-6 rounded-tr-full rounded-bl-full hover:scale-125 duration-150"
        >
          <button @click="navigateTo('/about')">More about me</button>
        </li>

        <li
          class="bg-orange-400 text-white py-2 px-6 rounded-br-full rounded-tl-full hover:scale-125 duration-150"
        >
          <button @click="navigateTo('/contact')">Get in touch</button>
        </li>
        <li
          class="bg-emerald-500 text-white py-2 px-6 rounded-tr-full rounded-bl-full hover:scale-125 duration-150"
        >
          <button @click="toggleDarkMode">Dark Mode</button>
        </li>
        <li
          class="bg-orange-400 text-white py-2 px-6 rounded-br-full rounded-tl-full hover:scale-125 duration-150"
        >
          Language
        </li>
      </ul>
    </nav>
    <button class="mt-8 hover:scale-110 duration-300" @click="closeSidebar">
      <i class="fa-solid fa-times text-red-400 text-6xl"></i>
    </button>
  </aside>
</template>

<style scoped></style>
