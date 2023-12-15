<script setup lang="ts">
import { Icon } from "@iconify/vue";
const platforms = [
  {
    name: "Mail",
    alt: "contact@zukrein.me",
    icon: "mdi:email",
    link: "mailto:contact@zukrein.xyz",
  },
  {
    name: "Discord",
    alt: "zukreindev",
    icon: "mdi:discord",
    link: "https://discord.com/users/1109212175291133996",
  },
  {
    name: "Github",
    alt: "zukreindev",
    icon: "mdi:github",
    link: "https://github.com/zukreindev",
  },
  {
    name: "Twitter",
    alt: "@zukreindev",
    icon: "mdi:twitter",
    link: "https://twitter.com/zukreindev",
  },
  {
    name: "Instagram",
    alt: "@zukreindev",
    icon: "mdi:instagram",
    link: "https://instagram.com/zukreindev",
  },
  {
    name: "Twitch",
    alt: "@zukreindev",
    icon: "mdi:twitch",
    link: "https://twitch.tv/zukreindev",
  },
  {
    name: "Youtube",
    alt: "zukrein",
    icon: "mdi:youtube",
    link: "https://www.youtube.com/channel/UCLP8sC76YRWMs-SC7PpXARA",
  },
  {
    name: "Spotify",
    alt: "zukrein",
    icon: "mdi:spotify",
    link: "https://open.spotify.com/user/31uai7ghwmbyqoc4eykgunx2tjoy?si=6a6e0caf5d7348f5",
  },
];

const onClick = (url: string) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 400);
};
</script>

<template>
  <div class="flex flex-col gap-10">
    <h2 class="text-2xl md:text-3xl">Contact Me</h2>
    <h3 class="-mt-5 text-xl md:text-2xl">
      You can contact me on the following
      <span class="text-[#AE3DFF]">platforms</span>
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-5">
      <LayoutsRippleEffect
        v-for="platform in platforms"
        class="bg-gray-100 bg-opacity-5 hover:bg-opacity-10 w-full rounded-md backdrop-blur-md overflow-hidden text-gray-200 shadow-lg hover:-translate-y-1 cursor-pointer transition-all h-full"
      >
        <NuxtLink class="" @click="onClick(platform.link)">
          <div class="flex gap-6 w-full h-full p-5">
            <Icon :icon="platform.icon" class="text-6xl text-gray-300" />
            <div class="flex flex-col gap-3">
              <h4 class="text-[#AE3DFF] cursor-pointer">{{ platform.name }}</h4>
              <p class="line-clamp-2 w-full">{{ platform.alt }}</p>
            </div>
          </div>
        </NuxtLink>
      </LayoutsRippleEffect>
    </div>
  </div>
</template>
