export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-particles",
    "@nuxt/content",
    "@nuxt/image",
  ],
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
  },

  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "theme-color",
          content: "#AE3DFF",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/zukrein.png",
        },
      ],
    },
  },
  content: {
    highlight: {
      theme: "dracula",
    },
  },
});
