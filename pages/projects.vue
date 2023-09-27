<script setup lang="ts">
import { Icon } from "@iconify/vue";

const { data: repos } = await useFetch("/api/repositories");

const onClick = (url: string) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 400);
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
    >
      <NuxtLink
        class="bg-gray-100 bg-opacity-5 hover:bg-opacity-10 w-full rounded-md backdrop-blur-md overflow-hidden text-gray-200 shadow-lg hover:-translate-y-1 cursor-pointer transition-all h-full"
        v-for="repo in repos"
        @click="onClick(repo.html_url)"
        target="_blank"
      >
        <LayoutsRippleEffect
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
          </div></LayoutsRippleEffect
        >
      </NuxtLink>
    </div>
  </div>
</template>

<style></style>
