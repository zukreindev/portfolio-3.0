<script setup lang="ts">
import { Icon } from "@iconify/vue";
const platforms = [
  {
    name: "Mail",
    alt: "contact@zukrein.com",
    icon: "mdi:email",
    link: "mailto:contact@zukrein.com",
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

useSeoMeta({
  title: "Zukrein | Contacts",
  author: "Zukrein",
  ogDescription: "Contact Me",
  ogImage: "/images/ogimage.jpg",
  ogUrl: "https://zukrein.me",
  ogTitle: "Zukrein | Contacts",
  ogType: "website",
  ogLocale: "tr_TR",
  ogSiteName: "zukrein.com",
  twitterCard: "summary_large_image",
  description: `I'm a 17-year-old UI designer and full-stack developer who's been immersed in the industry for 3 years. I blend user-friendly design with cutting-edge technology to create seamless and engaging experiences. Join me in exploring my portfolio where design meets innovation.`,
  twitterTitle: "Zukrein | Contacts",
  twitterDescription:
    "I'm a 17-year-old UI designer and full-stack developer who's been immersed in the industry for 3 years. I blend user-friendly design with cutting-edge technology to create seamless and engaging experiences. ",
  twitterImage: "/images/ogimage.jpg",
});

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
