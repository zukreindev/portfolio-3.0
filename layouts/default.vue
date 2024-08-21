<script setup lang="ts">
let loaded = ref<boolean>(false);

const options = ref<any>({
  particles: {
    number: {
      value: 2,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#aa3cf9",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#0a090b",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 30,
        height: 30,
      },
    },
    opacity: {
      value: 0.01,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.0000001,
        sync: false,
      },
    },
    size: {
      value: 240.69003069784318,
      random: true,
      anim: {
        enable: true,
        speed: 2.3976023976023977,
        size_min: 13.586413586413586,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

const konami = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let konamiCode = 0;
let isPhone = false;

const checkKonami = (e: KeyboardEvent) => {
  if (e.key === konami[konamiCode]) {
    konamiCode++;
  } else {
    konamiCode = 0;
  }

  if (konamiCode === konami.length) {
    options.value.particles.number.value = 100;
    new Audio(
      "https://cdn.discordapp.com/attachments/1089486214832324679/1274330024236945488/mp3indirdur-Alizade-24-7-ft-Bege.mp3?ex=66c1dbd1&is=66c08a51&hm=b8640214b039436a8aaa77e230fbca9c79d06f30b6e50794b6b23471d3c4e919&#t=00:00:20"
    ).play();
  }
};

const content = ref<HTMLElement | null>(null);
onMounted(() => {
  window.addEventListener("keydown", checkKonami);
  isPhone = window.innerWidth < 768;
  fetch(
    "https://raw.githubusercontent.com/adryd325/oneko.js/8fa8a1864aa71cd7a794d58bc139e755e96a236c/oneko.js"
  )
    .then((x) => x.text())
    .then((s) =>
      s
        .replace(
          "./oneko.gif",
          "https://raw.githubusercontent.com/adryd325/oneko.js/14bab15a755d0e35cd4ae19c931d96d306f99f42/oneko.gif"
        )
        .replace("(isReducedMotion)", "(false)")
    )
    .then(eval);
});

onUnmounted(() => {
  window.removeEventListener("keydown", checkKonami);
});
</script>

<template>
  <Transition>
    <div class="relative" v-show="loaded">
      <div class="w-full h-screen flex flex-col md:flex-row">
        <div class="-z-[1]">
          <NuxtParticles
            id="tsparticles"
            :options="options"
            :key="options.particles.number.value"
            @load="loaded = true"
            v-if="!isPhone"
          />
        </div>
        <LayoutsSidebar />
        <div
          class="p-8 px-6 md:p-16 xs:pr-0 md:pr-20 xl:pr-44 w-full overflow-auto transition-opacity duration-150 ease-in-out"
          ref="content"
        >
          <slot />
        </div>
      </div>
    </div>
  </Transition>
  <div
    v-show="!loaded"
    class="w-full h-screen flex justify-center items-center"
  >
    <svg
      aria-hidden="true"
      class="inline w-9 h-9 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.custom-loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 8px solid;
  border-color: #e4e4ed;
  border-right-color: #72379c;
  animation: s2 0.5s infinite linear;
}
@keyframes s2 {
  to {
    transform: rotate(1turn);
  }
}
</style>
