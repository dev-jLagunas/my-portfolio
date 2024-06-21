<script setup></script>

<template>
  <nav class="my-4">
    <ul class="flex justify-center text-slate-600 dark:text-slate-200">
      <li class="border-r-4 border-double border-emerald-500 pr-4">
        <router-link to="/about">More About Me</router-link>
      </li>
      <li class="px-4"><router-link to="/">My Main Projects</router-link></li>
      <li class="border-l-4 border-double border-emerald-500 pl-4">
        <router-link to="/contact">Get In Touch</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
