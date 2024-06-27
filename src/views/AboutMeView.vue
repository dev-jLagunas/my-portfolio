<script setup>
import selfPhoto from "@/assets/about/self-img.png";
import LinksButtons from "@/components/LinksBtnsContainer.vue";

const specialization = `I specialize in front-end development with Angular and Vue, and have strong skills in vanilla JavaScript and CSS, TypeScript, and frameworks like Tailwind CSS. 
I've built several dynamic projects and bring a diverse background, including business ownership and fluency in English, Spanish, and Japanese. `;
</script>

<template>
  <section
    class="mt-4 md:w-2/3 md:mx-auto lg:w-1/2 md:grid md:place-content-center 2xl:mt-16 dark:bg-slate-900"
  >
    <div class="mt-4 font-poppins">
      <article class="w-90vw mx-auto md:w-full">
        <h3
          class="text-center text-orange-400 font-bold text-xl mb-2 2xl:text-2xl"
        >
          Specialization
        </h3>
        <p
          class="text-sm text-slate-600 dark:text-slate-200 text-center xl:mx-auto xl:text-base 2xl:w-4/5"
        >
          {{ specialization }}
        </p>
      </article>
      <div class="md:grid md:grid-cols-2 md:mt-8">
        <article class="font-poppins mt-4">
          <h3
            class="text-center font-bold text-orange-400 text-xl 2xl:text-2xl"
          >
            Technologies
          </h3>
          <ul
            class="grid grid-cols-2 place-items-center text-sm mt-2 xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-2 text-slate-600 dark:text-slate-200 lg:text-base"
          >
            <li>Angular</li>
            <li>Vue</li>
            <li>JavaScript</li>
            <li>SCSS</li>
            <li>TypeScript</li>
            <li>Bootstrap</li>
          </ul>
        </article>
        <article class="font-poppins">
          <h3
            class="text-center font-bold text-xl mt-4 text-orange-400 2xl:text-2xl"
          >
            Passions:
          </h3>
          <ul class="grid grid-cols-4 place-items-center text-2xl mt-2">
            <li class="relative group">
              <i
                class="fa-solid fa-camera text-slate-600 dark:text-slate-200"
              ></i>
              <span
                class="hidden group-hover:block absolute bottom-full mb-2 bg-emerald-500 text-white font-bold px-2 py-1 rounded text-xs"
                >Photography</span
              >
            </li>
            <li class="relative group">
              <i
                class="fa-solid fa-dumbbell text-slate-600 dark:text-slate-200"
              ></i>
              <span
                class="hidden group-hover:block absolute bottom-full mb-2 bg-emerald-500 text-white font-bold px-2 py-1 rounded text-xs"
                >Weightlifting</span
              >
            </li>
            <li class="relative group">
              <i
                class="fa-solid fa-person-hiking text-slate-600 dark:text-slate-200"
              ></i>
              <span
                class="hidden group-hover:block absolute bottom-full mb-2 bg-emerald-500 text-white font-bold px-2 py-1 rounded text-xs"
                >Hiking</span
              >
            </li>
            <li class="relative group">
              <i
                class="fa-solid fa-person-snowboarding text-slate-600 dark:text-slate-200"
              ></i>
              <span
                class="hidden group-hover:block absolute bottom-full mb-2 bg-emerald-500 text-white font-bold px-2 py-1 rounded text-xs"
                >Skateboarding</span
              >
            </li>
          </ul>
        </article>
      </div>
      <img
        :src="selfPhoto"
        alt="self photo"
        class="w-90vw mx-auto mt-4 sm:w-96"
      />
    </div>
    <LinksButtons class="my-4" />
  </section>
</template>

<style scoped></style>
