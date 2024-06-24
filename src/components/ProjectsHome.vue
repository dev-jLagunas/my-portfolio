<script setup>
import { ref, onMounted } from "vue";
import { projectsData } from "@/data/projectsData.js";

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
    class="font-poppins dark:text-slate-200 text-slate-700 w-90vw mx-auto mt-8 lg:grid lg:grid-cols-1 lg:pr-8 lg:w-full xl:grid-cols-2 xl:gap-10"
  >
    <div v-for="project in projects" :key="project.id" class="mb-16">
      <h2
        class="font-bold text-4xl text-center border-b-4 border-b-orange-400 pb-2 md:text-5xl lg:text-6xl xl:text-4xl"
      >
        {{ project.name }}
      </h2>
      <p class="text-center py-4 text-sm md:text-lg lg:text-lg">
        {{ project.tagline }}
      </p>
      <figure class="">
        <img
          :src="resolvedImages[project.mainScreenshot]"
          alt="main screenshot"
          class="custom-shadow"
        />
        <figcaption>
          <ul
            class="bg-emerald-500 text-white flex justify-evenly py-2 text-sm custom-shadow font-semibold"
          >
            <li
              v-for="(technologies, index) in project.technologies"
              :key="index"
            >
              {{ technologies }}
            </li>
          </ul>
        </figcaption>
      </figure>
    </div>
  </section>
  <div class="lg:col-span-2">
    <h3 class="text-4xl font-pacifico text-orange-400 text-center lg:text-6xl">
      More to Come!
    </h3>
  </div>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>
