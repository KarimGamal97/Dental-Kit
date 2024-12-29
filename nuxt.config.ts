// https://nuxt.com/docs/api/configuration/nuxt-config

// import type { NuxtI18nOptions } from "@nuxtjs/i18n";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Dental_Kit",
      htmlAttrs: {
        dir: "ltr",
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/fav.png",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/main.scss";`,
        },
      },
    },
  },
  modules: ["notivue/nuxt"],
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "/public/assets/scss/main.css",
    "notivue/notification.css",
    "notivue/animations.css",
    "notivue/notification-progress.css",
  ],
  devtools: { enabled: false },
  plugins: ["~/plugins/axios.js", "~/plugins/bootstrap.js"],
  notivue: {
    position: "top-right",
    limit: 4,
    enqueue: true,
    avoidDuplicates: true,
    notifications: {
      global: {
        duration: 4000,
      },
    },
  },
});
