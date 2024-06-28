import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";
import jp from "./locales/jp.json";

import App from "./App.vue";
import router from "./router";

const messages = {
  en,
  es,
  jp,
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
