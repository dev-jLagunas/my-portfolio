<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { projectsData } from "@/data/projectsData.js";

const route = useRoute();
const project = ref(null);
const resolvedImages = ref({});

const images = import.meta.glob("@/assets/screenshots/*.{png,jpg,jpeg}", {
  eager: true,
});

onMounted(() => {
  const projectId = route.params.id;
  project.value = projectsData.find((p) => p.id === projectId);

  if (project.value) {
    for (const path in images) {
      const relativePath = path.replace("/src", "@");
      resolvedImages.value[relativePath] = images[path].default;
    }
  }
});
</script>

<template>
  <section
    v-if="project"
    class="font-poppins lg:grid lg:grid-cols-7 lg:w-full lg:dark:bg-slate-900 lg:mx-auto lg:h-screen"
  >
    <div class="flex flex-col lg:col-span-2 lg:mt-5 lg:sticky lg:top-0">
      <h1
        class="text-4xl text-center text-slate-700 font-bold dark:text-slate-200"
      >
        {{ project.name }}
      </h1>
      <div
        class="text-slate-600 text-2xl flex justify-center gap-8 my-2 dark:text-slate-200"
      >
        <button>
          <a :href="project.github"><i class="fa-brands fa-github"></i></a>
        </button>
        <button>
          <a :href="project.liveDemo"><i class="fa-solid fa-display"></i></a>
        </button>
      </div>
      <article
        class="w-90vw text-start text-slate-700 dark:text-slate-200 lg:w-full"
      >
        <p>
          <span class="text-lg text-emerald-500">Description: </span
          >{{ project.description }}
        </p>
      </article>
      <article class="text-slate-600 dark:text-slate-200">
        <h3 class="text-emerald-500 text-lg">Technologies:</h3>
        <ul class="flex gap-8">
          <li
            v-for="(technologies, index) in project.technologies"
            :key="index"
          >
            {{ technologies }}
          </li>
        </ul>
      </article>
      <ul class="text-slate-600 dark:text-slate-200">
        <li class="text-emerald-500 text-lg">Features:</li>
        <li v-for="(features, index) in project.features" :key="index">
          {{ features }}
        </li>
      </ul>
    </div>
    <div class="lg:col-span-5 lg:overflow-y-auto lg:w-full">
      <figure
        class="w-90vw mx-auto flex flex-col gap-4 my-4 md:grid md:grid-cols-2 lg:w-full lg:grid-cols-1"
      >
        <figcaption
          class="text-4xl text-center text-emerald-500 font-bold md:place-content-center"
        >
          Desktop
        </figcaption>
        <img
          v-for="(image, index) in project.images.desktop"
          :key="'desktop-' + index"
          :src="resolvedImages[image]"
          alt="Desktop screenshot"
          class=""
        />
      </figure>
      <figure
        class="w-90vw mx-auto flex flex-col gap-4 my-4 md:grid md:grid-cols-2 lg:w-full lg:grid-cols-4"
      >
        <figcaption
          class="text-4xl text-center text-emerald-500 font-bold md:place-content-center"
        >
          Mobile
        </figcaption>
        <img
          v-for="(image, index) in project.images.mobile"
          :key="'mobile-' + index"
          :src="resolvedImages[image]"
          alt="mobile screenshot"
          class="w-52 mx-auto custom-shadow"
        />
      </figure>
    </div>
  </section>
  <p v-else>Loading...</p>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>
