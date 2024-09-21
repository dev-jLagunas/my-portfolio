<script setup></script>

<template>
  <div class="primary-font-colors font-poppins my-8">
    <h2 class="text-center text-4xl font-bold">
      {{ $t("contactMeInformation.title") }}
    </h2>
    <ul>
      <li>
        <i class="fas fa-map-marker-alt contact-icon-styles"></i>Hakusan City,
        Ishikawa, Japan
      </li>
      <li><i class="fas fa-phone contact-icon-styles"></i>080-9533-4142</li>
      <li>
        <i class="fas fa-envelope contact-icon-styles"></i
        >dev.jlagunas@gmail.com
      </li>
      <li>
        <router-link to="/my-resume" class="flex items-center space-x-2">
          <i class="fa-solid fa-file contact-icon-styles"></i>
          <span>{{ $t("contactMeInformation.fullResume") }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
