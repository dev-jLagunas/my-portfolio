<script setup>
import emailSvg from "@/assets/svg/email-1-svgrepo-com.svg";
import phoneSvg from "@/assets/svg/phone-calling-rounded-svgrepo-com.svg";
import resumeSvg from "@/assets/svg/resume-business-cv-work-job-curriculum-2-svgrepo-com.svg";
</script>

<template>
  <div
    class="flex-center-col gap-2 bg-orange-400 p-1 rounded-md opacity-50 hover:opacity-100 duration-300 z-10"
  >
    <a href="mailto:dev.jlagunas@gmail.com" class="hover:cursor-pointer">
      <button aria-label="Send Email">
        <img :src="emailSvg" alt="email icon" class="h-4" />
      </button>
    </a>
    <a href="tel:+8108095334142" class="hover:cursor-pointer">
      <button aria-label="Call Phone">
        <img :src="phoneSvg" alt="phone icon" class="h-4" />
      </button>
    </a>
    <router-link to="/my-resume" class="hover:cursor-pointer">
      <button aria-label="View Resume">
        <img :src="resumeSvg" alt="document icon" class="h-4" />
      </button>
    </router-link>
  </div>
</template>

<style></style>
