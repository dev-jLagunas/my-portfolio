<script setup>
import digitalPortrait from "../assets/home/digital-portrait.png";
</script>

<template>
  <section class="relative md:w-4/5 md:mx-auto lg:mt-8">
    <h1
      class="text-6xl font-bold text-slate-800 dark:text-slate-200 text-center md:absolute md:top-16 md:left-80 lg:static"
    >
      I<span class="text-orange-400">'</span>m
      <span class="text-emerald-500">Juan</span>
    </h1>
    <figure
      class="md:flex md:justify-center md:items-center md:gap-4 lg:flex-col"
    >
      <img
        :src="digitalPortrait"
        alt="digital portrait of myself"
        class="w-52 mx-auto my-4 sm:w-72 lg:w-52"
      />
      <p
        class="text-slate-700 dark:text-slate-300 sm:text-xl lg:w-full px-4 lg:px-0 2xl:w-2/3 font-poppins lg:text-center"
      >
        I'm a
        <span class="text-orange-400 font-bold text-xl sm:text-2xl"
          >frontend developer</span
        >
        and
        <span class="text-orange-400 font-bold text-xl sm:text-2xl"
          >designer</span
        >. I focus on making simple but vibrant user interfaces built with care.
      </p>
    </figure>
  </section>
</template>

<style scoped></style>
