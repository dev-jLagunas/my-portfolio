<script setup>
import { useRouter } from "vue-router";
// Emits
const emit = defineEmits(["closeSidebar"]);

const closeSidebar = () => {
  emit("closeSidebar");
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
        <li class="text-4xl text-emerald-500 font-pacifico">
          Howdy<span class="text-orange-400">!</span>
        </li>
        <li><button @click="navigateTo('/about')">More about me</button></li>
        <li>
          <button @click="navigateTo('/')">My main projects</button>
        </li>
        <li><button @click="navigateTo('/contact')">Get in touch</button></li>
      </ul>
    </nav>
    <button class="mt-8 hover:scale-110 duration-300" @click="closeSidebar">
      <i class="fa-solid fa-times text-red-400 text-6xl"></i>
    </button>
  </aside>
</template>

<style scoped></style>
