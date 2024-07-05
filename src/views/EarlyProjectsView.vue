<script setup>
import { ref, onMounted } from "vue";
import { earlyProjectsData } from "@/data/earlyProjectsData.js";

const projects = ref(earlyProjectsData);
const resolvedImages = ref({});

// Dynamically import all images
const images = import.meta.glob("@/assets/early-projects/*.{png,jpg,jpeg}", {
  eager: true,
});

onMounted(() => {
  for (const path in images) {
    const relativePath = path.replace("/src", "@");
    resolvedImages.value[relativePath] = images[path].default;
  }
});
</script>

<template>
  <section
    class="w-90vw mt-8 mx-auto md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div
      v-for="project in projects"
      :key="project.id"
      class="flex-center-col font-poppins text-slate-700 dark:text-slate-200 mb-16"
    >
      <h2 class="font-bold text-4xl text-center">{{ project.name }}</h2>
      <p class="text-center my-2">{{ project.taglineKey }}</p>
      <div class="text-3xl w-full flex justify-center gap-8">
        <a :href="project.github">
          <button><i class="fa-brands fa-github"></i></button>
        </a>
        <a :href="project.liveDemo">
          <button><i class="fa-solid fa-display"></i></button>
        </a>
      </div>

      <figure class="custom-shadow">
        <img
          :src="resolvedImages[project.mainScreenshot]"
          alt="main screenshot"
          class="custom-shadow"
        />
        <figcaption>
          <ul
            class="flex flex-wrap text-sm font-semibold py-1 justify-around text-slate-200 bg-emerald-500"
          >
            <li
              v-for="(technology, index) in project.technologies"
              :key="index"
            >
              {{ technology }}
            </li>
          </ul>
        </figcaption>
      </figure>
      <ul
        class="text-sm mt-4 text-slate-600 w-full text-center dark:text-slate-200"
      >
        <li v-for="(feature, index) in project.features" :key="index">
          <i class="fa-regular fa-hand-point-right pr-2 text-orange-400"></i
          >{{ feature }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>
