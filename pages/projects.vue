<script setup lang="ts">
useSeoMeta({
  title: "Zukrein | Projects",
  author: "Zukrein",
  ogDescription: "My Projects",
  ogImage: "/images/ogimage.jpg",
  ogUrl: "https://zukrein.me",
  ogTitle: "Zukrein | Projects",
  ogType: "website",
  ogLocale: "tr_TR",
  ogSiteName: "zukrein.com",
  twitterCard: "summary_large_image",
  description: `I'm a 17-year-old UI designer and full-stack developer who's been immersed in the industry for 3 years. I blend user-friendly design with cutting-edge technology to create seamless and engaging experiences. Join me in exploring my portfolio where design meets innovation.`,
  twitterTitle: "Zukrein | Projects",
  twitterDescription:
    "I'm a 17-year-old UI designer and full-stack developer who's been immersed in the industry for 3 years. I blend user-friendly design with cutting-edge technology to create seamless and engaging experiences. ",
  twitterImage: "/images/ogimage.jpg",
});

import { Icon } from "@iconify/vue";

const { data: repos } = await useFetch<any>("/api/repositories");

const onClick = (url: string) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 200);
};
</script>

<template>
  <div class="flex flex-col gap-6 md:gap-10">
    <h2 class="text-2xl md:text-3xl">
      Where are <span class="text-[#AE3DFF]">my projects</span>? Oh, it's right
      here.
    </h2>
    <h3 class="text-xl md:text-2xl">
      On this page you can see the projects I have shared on my
      <NuxtLink class="text-[#AE3DFF]" to="https://github.com/zukreindev"
        >github</NuxtLink
      >
      account.
    </h3>

    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-7 mt-4"
      v-if="repos?.length"
    >
      <LayoutsRippleEffect
        class="bg-gray-100 bg-opacity-5 hover:bg-opacity-10 w-full rounded-md backdrop-blur-md overflow-hidden text-gray-200 shadow-lg hover:-translate-y-1 cursor-pointer transition-all h-full"
        v-for="repo in repos"
      >
        <NuxtLink @click="onClick(repo.html_url)"
          ><div class="flex flex-col gap-6 justify-between w-full h-full p-5">
            <div class="flex flex-col gap-3">
              <h4 class="text-[#AE3DFF] cursor-pointer">{{ repo.name }}</h4>
              <p class="line-clamp-2 w-full">
                {{ repo.description ?? "No description." }}
              </p>
            </div>
            <div class="flex gap-5 justify-end w-full">
              <div class="flex items-center gap-1">
                <Icon icon="tabler:language" class="text-xl text-gray-300" />
                <span class="text-gray-300">{{ repo.language }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Icon icon="ic:round-star" class="text-xl text-gray-300" />
                <span class="text-gray-300">{{ repo.stargazers_count }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Icon icon="ic:round-code" class="text-xl text-gray-300" />
                <span class="text-gray-300">{{ repo.forks_count }}</span>
              </div>
            </div>
          </div></NuxtLink
        >
      </LayoutsRippleEffect>
    </div>
    <div v-else>
      <div class="w-full h-[50vh] flex justify-center items-center">
        <p>
          <Icon
            icon="mdi:loading"
            class="text-4xl text-gray-300 animate-spin"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
