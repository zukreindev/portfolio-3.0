<script setup lang="ts">
import { Icon } from "@iconify/vue";

const toggleSidebar = ref<boolean>(false);
const isMobile = ref<boolean>(false);

const items = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "My Projects",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

onMounted(() => {
  if (window.innerWidth < 768) isMobile.value = true;
});

const handleClick = () => {
  toggleSidebar.value = toggleSidebar.value ? false : true;
  new Audio("/mouse.mp3").play();
};

const handleResize = () => {
  if (window.innerWidth < 768) isMobile.value = true;
  else isMobile.value = false;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});
</script>

<template>
  <div
    class="flex justify-between w-full px-8 py-3 bg-[#151317] bg-opacity-80 md:hidden"
  >
    <h2>zukrein</h2>
    <Transition>
      <Icon
        icon="mdi:menu"
        class="text-3xl text-[#AE3DFF] cursor-pointer block md:hidden"
        @click="toggleSidebar = !toggleSidebar"
        v-if="!toggleSidebar"
      />
    </Transition>
  </div>
  <div
    :class="`flex flex-col h-full justify-between bg-[#151317] bg-opacity-80 absolute md:static w-full md:w-fit transition-all backdrop-blur-sm duration-500`"
    :style="{
      opacity: isMobile ? (toggleSidebar ? 1 : 0) : 1,
      zIndex: isMobile ? (toggleSidebar ? 100 : -1) : 1,
    }"
  >
    <div class="py-6 px-8 md:py-16 md:px-10 2xl:px-12 relative">
      <h1 class="text-3xl font-bold text-[#AE3DFF]">zukrein</h1>
      <Transition>
        <Icon
          icon="mdi:close"
          class="text-3xl text-[#AE3DFF] cursor-pointer absolute top-6 right-8 block md:hidden z-50"
          @click="toggleSidebar = !toggleSidebar"
          v-if="toggleSidebar"
        />
      </Transition>
      <div class="flex flex-col gap-2 mt-16 md:mt-10">
        <NuxtLink
          v-for="item in items"
          :to="item.link"
          class="text-2xl md:text-xl font-semibold text-[#AE3DFF] hover:text-[#793AA7] transition-all"
          @click="handleClick"
          >{{ item.name }}</NuxtLink
        >
      </div>
    </div>
    <div class="flex flex-col items-center">
      <LayoutsSidebarActivity />
      <div class="bg-[#131115] w-full">
        <p
          class="p-4 text-xs text-[#959494] whitespace-nowrap flex flex-col items-center w-full"
        >
          © 2023 zukrein. Handcrafted, not AI-generated.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  color: #ffffff;
}
</style>
