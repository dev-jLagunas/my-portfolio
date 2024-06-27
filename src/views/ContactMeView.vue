<script setup>
import selfImg from "@/assets/contact/self-illustration.png";
import LinksButtons from "@/components/LinksBtnsContainer.vue";
</script>

<template>
  <section
    class="md:grid md:grid-cols-6 md:gap-4 md:place-content-center md:mt-16 md:w-90vw md:mx-auto max-w-4xl"
  >
    <img
      :src="selfImg"
      alt="illustration of author Juan"
      class="w-4/5 max-w-md mx-auto md:col-span-3 md:mt-16 md:w-full"
    />
    <section class="font-poppins md:col-span-3 relative pb-16">
      <div class="">
        <ul
          class="flex justify-around my-4 text-center text-slate-600 text-xl mx-auto dark:text-slate-200 md:w-64 md:text-2xl"
        >
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-code"></i>
            </a>
          </li>
          <li>
            <a
              href="https://frontendmentor.io/profile/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-user-check"></i>
            </a>
          </li>
          <li>
            <a
              href="https://unsplash.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-unsplash"></i>
            </a>
          </li>
        </ul>
      </div>
      <article class="w-max mx-auto md:mt-6">
        <ul
          class="text-slate-600 dark:text-slate-200 md:pb-8 flex flex-col gap-2"
        >
          <li>
            <i class="fas fa-map-marker-alt pr-2 text-orange-400"></i>
            Fake Address, 9999 City
          </li>
          <li><i class="fas fa-phone pr-2 text-orange-400"></i> 123456789</li>
          <li>
            <i class="fas fa-envelope pr-2 text-orange-400"></i>
            email@example.com
          </li>
        </ul>
      </article>

      <form
        class="mx-auto font-poppins w-90vw md:w-full dark:bg-slate-900 text-center"
      >
        <h2
          class="text-4xl text-emerald-500 text-center font-bold mt-8 mb-4 w-2/3 mx-auto md:mt-0"
        >
          Send a Message<span class="font-bold text-orange-400">!</span>
        </h2>
        <label for="name" class="sr-only">name</label>
        <input
          type="text"
          placeholder="name"
          class="w-full dark:bg-slate-900 text-center text-slate-600 dark:text-slate-200"
          id="name"
        />
        <label for="email" class="sr-only">email</label>
        <input
          type="email"
          placeholder="email"
          class="w-full dark:bg-slate-900 text-center text-slate-600 dark:text-slate-200 border-t dark:border-slate-800"
          id="email"
        />
        <label for="message" class="sr-only">message</label>
        <textarea
          name=""
          id="message"
          cols="30"
          rows="10"
          placeholder="message"
          class="focus:outline-none w-full dark:bg-slate-900 text-center border text-slate-600 dark:text-slate-200 dark:border-slate-800"
        ></textarea>
        <button class="w-2/3 bg-emerald-500 text-white">Submit</button>
      </form>
    </section>
    <LinksButtons class="pb-4" />
  </section>
</template>

<style scoped></style>
