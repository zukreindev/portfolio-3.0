<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  src: string;
  alt: string | "undefined";
  class?: string;
}>();
const loaded = ref<"loading" | "error" | "loaded">("loading");

const LoadImage = async () => {
  try {
    const image = new Image();
    image.src = props.src;
    image.onload = () => {
      loaded.value = "loaded";
    };
    image.onerror = () => {
      loaded.value = "error";
    };
  } catch {
    loaded.value = "error";
  }
};

onMounted(() => {
  LoadImage();
});
</script>

<template>
  <NuxtImg
    :quality="80"
    format="webp"
    loading="lazy"
    v-if="loaded === 'loaded'"
    :src="props.src"
    :alt="props.alt"
    :class="props.class"
  />
  <div
    v-if="loaded === 'loading'"
    :class="props.class"
    class="animate-pulse bg-white bg-opacity-10"
  ></div>
  <div
    v-if="loaded === 'error'"
    :class="props.class"
    class="bg-white bg-opacity-10 flex items-center justify-center"
  >
    <Icon icon="lucide:search-x" class="w-10 h-10 text-[#AE3DFF] opacity-50" />
  </div>
</template>
