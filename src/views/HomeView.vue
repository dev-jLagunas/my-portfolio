<script setup>
import Hero from "../components/HeroComponent.vue";
import ProjectsHome from "../components/ProjectsHome.vue";
</script>

<template>
  <section
    class="lg:grid lg:grid-cols-6 lg:h-screen dark:bg-slate-900 relative"
  >
    <div class="lg:col-span-2 lg:sticky lg:top-0">
      <Hero />
    </div>

    <div class="lg:col-span-4 lg:overflow-y-auto lg:mt-8">
      <ProjectsHome />
    </div>
  </section>
</template>

<style scoped></style>
