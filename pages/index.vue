<script setup lang="ts">
import { Icon } from "@iconify/vue";

useSeoMeta({
  title: "Zukrein | Home",
  author: "Zukrein",
  ogDescription:
    "I'm a 17-year-old UI designer and full-stack developer who's been immersed in the industry for 3 years. I blend user-friendly design with cutting-edge technology to create seamless and engaging experiences. ",
  ogImage: "/images/ogimage.jpg",
  ogUrl: "https://zukrein.me",
  ogTitle: "Zukrein",
  ogType: "website",
  ogLocale: "tr_TR",
  ogSiteName: "zukrein.com",
  twitterCard: "summary_large_image",
  description: `I'm a 17-year-old UI designer and full-stack developer who's been immersed in the industry for 3 years. I blend user-friendly design with cutting-edge technology to create seamless and engaging experiences. Join me in exploring my portfolio where design meets innovation.`,
  twitterTitle: "Zukrein",
  twitterDescription:
    "I'm a 17-year-old UI designer and full-stack developer who's been immersed in the industry for 3 years. I blend user-friendly design with cutting-edge technology to create seamless and engaging experiences. ",
  twitterImage: "/images/ogimage.jpg",
});
</script>

<template>
  <div class="flex flex-col gap-8 md:gap-10">
    <h2 class="text-2xl md:text-3xl">Hello There</h2>
    <p class="text-normal md:text-lg">
      I'm a 17-year-old <span class="text-[#AE3DFF]">UI designer</span> and
      <span class="text-[#AE3DFF]">full-stack</span> developer who's been
      immersed in the industry for 3 years. I blend user-friendly design with
      cutting-edge technology to create seamless and engaging experiences. Join
      me in exploring my portfolio where design meets innovation.
    </p>
    <p class="text-normal md:text-lg">
      In addition to my design and development journey, I have had the
      opportunity to work extensively with modern front-end frameworks such as
      <span class="text-[#AE3DFF]">Svelte</span>,
      <span class="text-[#AE3DFF]">Vue.js</span>, and
      <span class="text-[#AE3DFF]">Nuxt</span>. These tools have empowered me to
      build interactive and dynamic user interfaces while optimizing
      performance. Embracing these technologies has allowed me to push the
      boundaries of creativity and functionality, ensuring that each project I
      undertake not only looks great but also functions flawlessly.
    </p>

    <p class="text-normal md:text-lg flex flex-col">
      Best regards, <span class="text-[#AE3DFF]">Zukrein</span>
    </p>
    <div class="w-full flex flex-row-reverse">
      <LayoutsButton to="/projects">
        View My Projects <Icon icon="maki:arrow" />
      </LayoutsButton>
    </div>
  </div>
</template>
