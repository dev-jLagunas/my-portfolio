<script setup>
import myResume from "@/assets/resume/my-resume-img.jpg";
const pdfResumePath = new URL("@/assets/resume/my-resume.pdf", import.meta.url)
  .href;

// Method to download the PDF version of the resume
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = pdfResumePath;
  link.download = "my-resume.pdf";
  link.click();
};
</script>

<template>
  <div class="text-center">
    <button
      class="primary-font-colors underline text-sm mb-4"
      @click="downloadResume"
    >
      Download Resume
    </button>
    <img :src="myResume" alt="resume photo" class="w-90vw mx-auto" />
    <button
      @click="downloadResume"
      class="primary-font-colors underline text-sm mt-4"
    >
      Download Resume
    </button>
  </div>
</template>
