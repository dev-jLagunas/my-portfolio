<script setup></script>

<template>
  <div class="primary-font-colors font-poppins">
    <h2 class="text-center text-4xl font-bold">Send a message</h2>
    <form class="w-full">
      <label for="name" class="">Name</label>
      <input type="text" class="w-full border-b" />
      <label for="email">Email</label>
      <input type="email" class="w-full border-b" />
      <label for="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        class="w-full border-b"
      ></textarea>
      <button class="bg-emerald-500 text-white w-full">Submit</button>
    </form>
  </div>
</template>

<style scoped></style>
