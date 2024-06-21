<script setup>
import Hero from "../components/HeroComponent.vue";
import Projects from "../components/ProjectsHome.vue";
</script>

<template>
  <section class="lg:grid lg:grid-cols-6">
    <Hero class="col-span-2" />
    <Projects />
  </section>
</template>

<style scoped></style>
