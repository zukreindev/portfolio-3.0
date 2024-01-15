export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-particles", "@nuxt/content"],
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: "~/public/css/tailwind.css",
    configPath: "tailwind.config.js",
  },
  app: {
    head: {
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
