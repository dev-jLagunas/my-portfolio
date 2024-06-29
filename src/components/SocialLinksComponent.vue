<script setup>
import githubLogo from "@/assets/svg/github-142-svgrepo-com.svg";
import linkedInLogo from "@/assets/svg/linkedin-svgrepo-com.svg";
import leetcodeLogo from "@/assets/svg/leetcode-svgrepo-com.svg";
import frontendMentorLogo from "@/assets/svg/code-svgrepo-com.svg";
</script>

<template>
  <div
    class="flex-center-col gap-2 bg-orange-400 p-1 rounded-md opacity-50 hover:opacity-100 duration-300"
  >
    <a
      href="https://github.com/dev-jLagunas"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <img :src="githubLogo" alt="" class="h-4" />
    </a>
    <a
      href="https://www.linkedin.com/in/juan-lagunas-a14b0a2a8/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <img :src="linkedInLogo" alt="" class="h-4" />
    </a>
    <a
      href="https://leetcode.com/u/Solidjuan/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LeetCode"
    >
      <img :src="leetcodeLogo" alt="" class="h-4" />
    </a>
    <a
      href="https://www.frontendmentor.io/profile/dev-jLagunas"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Frontend Mentor"
    >
      <img :src="frontendMentorLogo" alt="" class="h-4" />
    </a>
  </div>
</template>
