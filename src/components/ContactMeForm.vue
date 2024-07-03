<script setup></script>

<template>
  <div class="primary-font-colors font-poppins">
    <h2 class="text-center text-4xl font-bold">
      {{ $t("contactMeForm.title") }}
    </h2>
    <form class="w-full" action="https://formspree.io/f/xzzpbrnb" method="POST">
      <label for="name">{{ $t("contactMeForm.nameLabel") }}</label>
      <input
        type="text"
        id="name"
        name="name"
        class="w-full border-b"
        required
      />
      <label for="email">{{ $t("contactMeForm.emailLabel") }}</label>
      <input
        type="email"
        id="email"
        name="email"
        class="w-full border-b"
        required
      />
      <label for="message">{{ $t("contactMeForm.messageLabel") }}</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        class="w-full border-b"
        required
      ></textarea>
      <button class="bg-emerald-500 text-white w-full" type="submit">
        {{ $t("contactMeForm.submitButton") }}
      </button>
    </form>
  </div>
</template>

<style scoped></style>
