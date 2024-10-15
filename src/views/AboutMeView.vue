<script setup>
import selfPhoto from "@/assets/about/self-img.webp";
import LinksButtons from "@/components/LinksBtnsContainer.vue";
import Specialization from "@/components/AboutMeSpecialization.vue";
import Passions from "@/components/AboutMePassions.vue";
import Skills from "@/components/AboutMeSkills.vue";
</script>

<template>
  <div
    class="font-poppins w-90vw text-slate-700 dark:text-slate-200 flex-center-col mt-10 md:pb-8"
  >
    <section class="mb-4 md:w-5/6 lg:w-3/4 xl:w-2/5">
      <Specialization />
    </section>
    <section class="mb-4 md:grid md:grid-cols-2">
      <Skills />
      <Passions class="" />
    </section>
    <img :src="selfPhoto" alt="image of myself" class="md:w-1/2 lg:w-1/3" />
    <LinksButtons class="mt-8" />
  </div>
</template>

<style scoped></style>
