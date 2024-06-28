<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { projectsData } from "@/data/projectsData.js";
import NavButtons from "@/components/LinksBtnsContainer.vue";

const { t } = useI18n();
const route = useRoute();
const project = ref(null);
const resolvedImages = ref({});
const technologies = ref([]);
const features = ref([]);

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

    technologies.value = t(
      `projects.details.${project.value.projectKey}.technologies`
    ).split(",");
    features.value = t(
      `projects.details.${project.value.projectKey}.features`
    ).split(",");
  }
});
</script>

<template>
  <section
    v-if="project"
    class="primary-font-colors font-poppins pb-6 mt-4 w-90vw lg:grid lg:grid-cols-8 lg:mx-auto lg:h-screen lg:w-full"
  >
    <div class="lg:col-span-3 lg:sticky lg:top-0 relative">
      <h2 class="font-bold text-4xl text-center md:text-6xl lg:text-5xl">
        {{ project.name }}
      </h2>
      <div class="">
        <div class="flex justify-center gap-4 text-2xl lg:mt-4">
          <button>
            <a :href="project.github"><i class="fa-brands fa-github"></i></a>
          </button>
          <button>
            <a :href="project.liveDemo"><i class="fa-solid fa-display"></i></a>
          </button>
        </div>
        <section class="my-4 lg:w-4/5 lg:mx-auto">
          <p class="project-details-titles md:text-3xl">
            {{ $t("projects.details.descriptionTitle") }}
          </p>
          <p>{{ t(`projects.details.${project.projectKey}.description`) }}</p>
        </section>
        <section>
          <p class="project-details-titles md:text-3xl">
            {{ $t("projects.details.madeWithTitle") }}
          </p>
          <ul
            class="flex-center-col md:flex-row md:divide-x-2 md:divide-orange-400 mt-4"
          >
            <li
              v-for="(technology, index) in technologies"
              :key="index"
              class="pr-2 pl-2"
            >
              {{ technology }}
            </li>
          </ul>
        </section>
        <section class="mb-4">
          <p class="project-details-titles mt-4 md:text-3xl">
            {{ $t("projects.details.featuresTitle") }}
          </p>
          <ul
            class="flex-center-col text-center md:flex-row md:divide-x-2 md:divide-orange-400 md:flex-wrap mt-4"
          >
            <li v-for="(feature, index) in features" :key="index" class="px-2">
              {{ feature }}
            </li>
          </ul>
        </section>
        <NavButtons class="hidden lg:block" />
      </div>
    </div>
    <div class="lg:col-span-5 lg:overflow-y-auto lg:pr-2">
      <figure class="flex-center-col gap-4">
        <figcaption class="project-details-titles md:text-4xl">
          {{ $t("projects.details.desktopTitle") }}
        </figcaption>
        <img
          v-for="(image, index) in project.images.desktop"
          :key="'desktop-' + index"
          :src="resolvedImages[image]"
          alt="Desktop screenshot"
        />
      </figure>
      <div class="mt-4">
        <p class="project-details-titles md:text-4xl mb-4">
          {{ $t("projects.details.mobileTitle") }}
        </p>
        <figure class="flex-center-col gap-4 md:flex-row lg:flex-wrap">
          <img
            v-for="(image, index) in project.images.mobile"
            :key="'mobile-' + index"
            :src="resolvedImages[image]"
            alt="mobile screenshot"
            class="w-52 mx-auto custom-shadow"
          />
        </figure>
      </div>
      <NavButtons class="mt-8 lg:hidden" />
    </div>
  </section>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>
