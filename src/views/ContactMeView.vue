<script setup>
import selfImg from "@/assets/contact/self-illustration.webp";
import LinksButtons from "@/components/LinksBtnsContainer.vue";
import ContactLinks from "@/components/ContactMeLinks.vue";
import ContactInfo from "@/components/ContactMeInformation.vue";
import ContactForm from "@/components/ContactMeForm.vue";
</script>

<template>
  <div class="md:grid md:grid-cols-2 md:w-90vw lg:max-w-4xl lg:mx-auto">
    <figure class="w-3/4 mx-auto md:w-full">
      <img :src="selfImg" alt="digital portrait of myself" class="md:mt-20" />
      <ContactLinks />
      <LinksButtons class="hidden md:block mt-8" />
    </figure>
    <section class="w-90vw mx-auto md:w-full">
      <ContactInfo />
      <ContactForm />
    </section>
  </div>

  <LinksButtons class="mt-8 md:hidden" />
</template>

<style scoped></style>
