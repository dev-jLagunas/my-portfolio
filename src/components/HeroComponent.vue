<script setup>
import digitalPortrait from "@/assets/home/digital-portrait.png";
import LinkButtons from "@/components/LinksBtnsContainer.vue";
</script>

<template>
  <section class="relative md:w-4/5 md:mx-auto lg:mt-8 font-poppins">
    <h3
      class="hidden pacifico-title w-max py-1 ml-auto mt-4 text-3xl lg:block mb-8 xl:text-4xl"
    >
      Projects<span
        ><i class="fa-solid fa-arrow-right text-orange-400 pl-4"></i>
      </span>
    </h3>
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
        class="w-60 mx-auto my-4 sm:w-72 lg:w-52 xl:w-72"
      />
      <figcaption
        class="text-slate-700 text-center px-4 dark:text-slate-200 md:text-xl md:px-0 lg:text-base"
      >
        I'm a
        <span
          class="text-orange-400 font-semibold text-lg md:text-2xl lg:text-lg"
          >Frontend Developer</span
        >
        and
        <span
          class="text-orange-400 font-semibold text-lg md:text-2xl lg:text-lg"
          >Designer</span
        >. I enjoy creating simple, user friendly, efficient and vibrant
        websites.
      </figcaption>
    </figure>
    <LinkButtons class="hidden md:block" />
    <h3
      class="text-center pacifico-title w-max px-4 py-1 mx-auto my-16 text-4xl lg:hidden"
    >
      Projects<span
        ><i class="fa-solid fa-arrow-turn-down text-orange-400 pl-4"></i>
      </span>
    </h3>
  </section>
</template>

<style scoped></style>
