<script setup></script>

<template>
  <nav class="my-4 w-90vw mx-auto py-2">
    <ul
      class="flex justify-around text-slate-600 dark:text-slate-200 lg:justify-center"
    >
      <li
        class="bg-emerald-500 text-white py-1 px-6 rounded-br-full rounded-tl-full"
      >
        <router-link to="/about">More About Me</router-link>
      </li>
      <li
        class="bg-emerald-500 text-white py-1 px-6 rounded-br-full rounded-tl-full"
      >
        <router-link to="/">My Main Projects</router-link>
      </li>
      <li
        class="bg-emerald-500 text-white py-1 px-6 rounded-br-full rounded-tl-full"
      >
        <router-link to="/contact">Get In Touch</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
