<script setup lang="ts">
defineProps<{
  data: {
    name: string;
    banner: string;
    owner: {
      avatar_url: string;
      login: string;
      name: string;
    };
  };
}>();
</script>

<template>
  <div>
    <div>
      <h3>{{ data.name }}</h3>
      <div class="flex items-center">
        <img :src="data.owner.avatar_url" class="h-7 w-7 rounded-full" />
        <div>
          <p class="">{{ data.owner.login }}</p>
          <p class="text-[#959494]">{{ data.owner.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
