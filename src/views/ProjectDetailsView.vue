<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { projectsData } from "@/data/projectsData.js";
import NavButtons from "@/components/LinksBtnsContainer.vue";

// Variables & Refs
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
    class="primary-font-colors font-poppins pb-6 mt-4 w-90vw lg:grid lg:grid-cols-8 lg:mx-auto lg:h-screen lg:w-90vw"
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
        <section class="my-4 lg:px-2">
          <p class="project-details-titles pb-1">
            {{ $t("projects.details.descriptionTitle") }}
          </p>
          <p class="lg:text-sm">
            {{ t(`projects.details.${project.projectKey}.description`) }}
          </p>
        </section>
        <div class="md:grid md:grid-cols-2 lg:text-sm lg:px-2">
          <section>
            <p class="project-details-titles">
              {{ $t("projects.details.madeWithTitle") }}
            </p>
            <ul class="">
              <li
                v-for="(technology, index) in technologies"
                :key="index"
                class=""
              >
                <i class="fa-solid fa-caret-right pr-1 text-orange-400"></i
                >{{ technology }}
              </li>
            </ul>
          </section>
          <section class="my-4 md:my-0">
            <p class="project-details-titles">
              {{ $t("projects.details.featuresTitle") }}
            </p>
            <ul>
              <li v-for="(feature, index) in features" :key="index">
                <i class="fa-solid fa-caret-right pr-1 text-orange-400"></i
                >{{ feature }}
              </li>
            </ul>
          </section>
        </div>
        <NavButtons class="hidden lg:block" />
      </div>
    </div>
    <div class="lg:col-span-5 lg:overflow-y-auto lg:pr-2 md:mt-4">
      <figure class="flex-center-col gap-4">
        <figcaption class="project-details-titles md:text-4xl">
          {{ $t("projects.details.desktopTitle") }}
          <span class="hidden lg:block text-xs primary-font-colors"
            >scroll down to see more images</span
          >
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

.lg\:overflow-y-auto {
  scrollbar-width: none;
}

.lg\:overflow-y-auto::-webkit-scrollbar {
  display: none;
}
</style>
