<script setup>
import emailSvg from "@/assets/svg/email-1-svgrepo-com.svg";
import phoneSvg from "@/assets/svg/phone-calling-rounded-svgrepo-com.svg";
import resumeSvg from "@/assets/svg/resume-business-cv-work-job-curriculum-2-svgrepo-com.svg";
</script>

<template>
  <div
    class="flex-center-col gap-2 bg-orange-400 p-1 rounded-md opacity-50 hover:opacity-100 duration-300 z-10"
  >
    <a class="hover:cursor-pointer">
      <img :src="emailSvg" alt="" class="h-4" />
    </a>
    <a class="hover:cursor-pointer">
      <img :src="phoneSvg" alt="" class="h-4" />
    </a>
    <a class="hover:cursor-pointer">
      <img :src="resumeSvg" alt="" class="h-4" />
    </a>
  </div>
</template>

<style></style>
