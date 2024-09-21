<script setup></script>

<template>
  <div class="w-max mx-auto lg:text-lg lg:mt-8">
    <router-link to="/" class="nav-link-emerald mr-1">{{
      $t("linksBtnsContainer.home")
    }}</router-link>
    <router-link to="/contact" class="nav-link-orange">{{
      $t("linksBtnsContainer.contact")
    }}</router-link>
  </div>
</template>

<style></style>
