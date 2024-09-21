<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { projectsData } from "@/data/projectsData.js";

const { t } = useI18n();
const projects = ref(projectsData);

const resolvedImages = ref({});

// Dynamically import all images
const images = import.meta.glob("@/assets/screenshots/*.{png,jpg,jpeg}", {
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
    class="font-poppins dark:text-slate-200 text-slate-700 w-90vw mx-auto mt-8 lg:mt-0 lg:grid lg:grid-cols-1 lg:pr-8 lg:w-full xl:grid-cols-2 relative"
  >
    <div v-for="project in projects" :key="project.id" class="mb-16 xl:w-5/6">
      <h2
        class="font-bold text-4xl text-center md:text-5xl lg:text-5xl duration-500 hover:cursor-pointer hover:text-emerald-500"
      >
        <router-link
          :to="{ name: 'project-details', params: { id: project.id } }"
        >
          {{ project.name }}
        </router-link>
      </h2>
      <p class="text-center py-4 text-sm md:text-lg lg:text-lg">
        {{ t(`projects.${project.taglineKey}`) }}
      </p>
      <figure>
        <ul class="flex justify-evenly text-3xl pb-4">
          <li class="hover:scale-110 duration-500">
            <a :href="project.github"><i class="fa-brands fa-github"></i></a>
          </li>
          <li class="hover:scale-110 duration-500">
            <a :href="project.liveDemo"><i class="fa-solid fa-display"></i></a>
          </li>
        </ul>
        <router-link
          :to="{ name: 'project-details', params: { id: project.id } }"
        >
          <img
            :src="resolvedImages[project.mainScreenshot]"
            alt="main screenshot"
            class="custom-shadow"
        /></router-link>
        <figcaption>
          <ul
            class="bg-emerald-500 text-white flex flex-wrap gap-1 justify-evenly py-2 px-8 text-xs md:text-base custom-shadow font-semibold"
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
    </div>
  </section>
  <div class="lg:col-span-2 text-center md:py-4">
    <h3 class="text-4xl font-pacifico text-emerald-500 text-center lg:text-6xl">
      More to Come<span class="text-orange-400">!</span>
    </h3>
  </div>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>
