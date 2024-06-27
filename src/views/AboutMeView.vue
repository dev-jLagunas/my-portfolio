<script setup>
import selfPhoto from "@/assets/about/self-img.png";
import LinksButtons from "@/components/LinksBtnsContainer.vue";
import Specialization from "@/components/AboutMeSpecialization.vue";
import Passions from "@/components/AboutMePassions.vue";
import Skills from "@/components/AboutMeSkills.vue";
</script>

<template>
  <div
    class="font-poppins w-90vw text-slate-700 dark:text-slate-200 flex-center-col"
  >
    <section>
      <Specialization />
    </section>
    <section>
      <Skills />
      <Passions />
    </section>
    <img :src="selfPhoto" alt="image of myself" class="" />
    <LinksButtons />
  </div>
</template>

<style scoped></style>
