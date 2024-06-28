<script setup></script>

<template>
  <div>
    <h2 class="about-me-titles">{{ $t("aboutMeSpecialization.title") }}</h2>
    <div class="flex-center-col md:text-center lg:text-lg">
      <p class="mt-2">
        <span v-html="$t('aboutMeSpecialization.paragraph1')"></span>
      </p>

      <p class="mt-2">
        {{ $t("aboutMeSpecialization.paragraph2") }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
