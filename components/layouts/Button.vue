<script setup lang="ts">
defineProps<{ to: string }>();

const router = useRouter();
const onClick = (url: string) => {
  setTimeout(() => {
    router.push(url);
  }, 400);
};
</script>

<template>
  <LayoutsRippleEffect>
    <button
      @click="onClick(to)"
      class="text-white py-3 px-3 md:px-5 rounded-md bg-[#AE3DFF] hover:bg-[#b256f5] text-sm md:text-normal transition-all flex gap-2 items-center"
    >
      <slot />
    </button>
  </LayoutsRippleEffect>
</template>
