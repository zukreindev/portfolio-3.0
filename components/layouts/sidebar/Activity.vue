<script setup lang="ts">
import { Icon } from "@iconify/vue";

let presenceSocket: any;
let heartbeatInterval: NodeJS.Timeout;
let discordId = import.meta.env.VITE_DISCORD_ID;

const selectedTab = ref<number>(1);
const spotify = ref<any>(null);
const vscode = ref<any>(null);

function changeTab(tab: number) {
  if (spotify.value && vscode.value) {
    setTimeout(() => {
      selectedTab.value = tab;
    }, 300);
  }
}

onMounted(() => {
  async function websocket() {
    presenceSocket = new WebSocket("wss://api.lanyard.rest/socket");

    presenceSocket.onopen = () => {
      console.log("Connected to the presence server.");
    };

    presenceSocket.onmessage = (event: any) => {
      const data = JSON.parse(event.data);

      switch (data.op) {
        case 0:
          switch (data.t) {
            case "INIT_STATE":
              spotify.value = data.d[discordId].spotify;

              vscode.value = data.d[discordId].activities.find(
                (x: any) => x.name === "Code" || x.name === "Visual Studio Code"
              );

              break;
            case "PRESENCE_UPDATE":
              // Spotify Activity
              if (
                data.d.spotify &&
                data.d.spotify?.track_id !== spotify.value?.track_id
              )
                spotify.value = data.d.spotify;

              if (!data.d.spotify) spotify.value = null;

              // VSCode Activity
              let vscodeActivity =
                data.d.activities?.find(
                  (x: any) =>
                    x.name === "Code" || x.name === "Visual Studio Code"
                )?.state || null;

              if (vscodeActivity !== vscode.value?.state)
                vscode.value = data.d.activities.find(
                  (x: any) =>
                    x.name === "Code" || x.name === "Visual Studio Code"
                );

              break;
          }
          break;
        case 1:
          // Initial state
          presenceSocket.send(
            JSON.stringify({
              op: 2,
              d: {
                subscribe_to_ids: [discordId],
              },
            })
          );
          // Send a heartbeat every 30 seconds
          heartbeatInterval = setInterval(() => {
            presenceSocket.send(
              JSON.stringify({
                op: 3,
              })
            );
          }, data.d.heartbeat_interval);
          break;

        case 2:
          console.log("Subscribed to the presence server.");
          break;
      }
    };

    presenceSocket.onclose = () => {
      console.log("Disconnected from the presence server.");
      clearInterval(heartbeatInterval);
      websocket();
      console.log("Reconnecting to the presence server.");
    };
  }
  websocket();
});

watch([vscode, spotify], () => {
  if (!vscode.value || !spotify.value) {
    selectedTab.value = 0;
  }
});
</script>

<template>
  <div class="flex flex-col items-center m-2">
    <LayoutsRippleEffect class="rounded-md">
      <div
        class="flex relative items-center gap-3 transition-all rounded-md hover:bg-white p-2 hover:bg-opacity-10 cursor-pointer select-none group"
        v-if="selectedTab == 0 && vscode"
        @click="changeTab(1)"
      >
        <div
          class="group-hover:block hidden absolute p-1 rounded-full right-3 text-xl bg-white bg-opacity-10 text-white z-10"
          v-if="spotify && vscode"
        >
          <Icon icon="tabler:chevron-right" />
        </div>
        <img
          :src="'https://' + vscode.assets.large_image.split('https/')[1]"
          class="w-16 h-16 rounded-md object-cover"
        />
        <div>
          <p class="text-white font-bold w-52">
            {{ vscode.assets.large_text }}
          </p>
          <p class="text-[#AE3DFF] text-xs font-bold line-clamp-1 w-52">
            {{ vscode.details }}
          </p>
        </div>
      </div>
    </LayoutsRippleEffect>
    <LayoutsRippleEffect class="rounded-md">
      <div
        class="flex relative items-center gap-3 transition-all rounded-md hover:bg-white p-2 hover:bg-opacity-10 cursor-pointer select-none group"
        v-if="(spotify && selectedTab == 1) || !vscode"
        @click="changeTab(0)"
      >
        <div
          class="group-hover:block hidden absolute p-1 rounded-full right-3 text-xl bg-white bg-opacity-10 text-white z-10"
          v-if="spotify && vscode"
        >
          <Icon icon="tabler:chevron-left" />
        </div>
        <img
          :src="spotify?.album_art_url"
          class="w-16 h-16 rounded-md object-cover"
        />
        <div class="w-fit relative">
          <p class="text-white font-bold line-clamp-1 w-52">
            {{ spotify?.song }}
          </p>
          <p class="text-[#AE3DFF] text-xs font-bold line-clamp-1 w-52">
            {{ spotify?.artist }}
          </p>
        </div>
      </div>
    </LayoutsRippleEffect>

    <Transition>
      <div
        v-if="spotify && vscode"
        class="flex items-center justify-center m-2 gap-2"
      >
        <div
          :class="`h-1 w-1 transition-all bg-gray-300 rounded-full ${
            selectedTab == 0 && 'w-3'
          }`"
        ></div>
        <div
          :class="`h-1 w-1 transition-all bg-gray-300 rounded-full ${
            selectedTab == 1 && 'w-3'
          }`"
        ></div>
      </div>
    </Transition>
  </div>
</template>

<style>
v-enter-active,
v-leave-active {
  transition: all 0.1s;
}

v-enter-from,
v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
