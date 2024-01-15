<script setup lang="ts">
import gsap from "gsap";
import { resolveDate } from "@/util/resolveDate";

const { data } = await useAsyncData("docs", () => queryContent().find());

interface Blog {
  title: string;
  description: string;
  thumbnail: string;
  to: string;
  date: string;
}

const blogs = computed(() => {
  if (!Array.isArray(data.value)) {
    return [];
  }

  return data.value.map((blog) => {
    const resolved = {
      title: blog.title,
      description: blog.description,
      thumbnail: blog.thumbnail,
      author: blog.author,
      to: blog._path,
      date: "",
    };

    const rawDate = blog.date;

    if (rawDate.includes("|")) {
      const chunks = rawDate.split("|").map((c: string) => c.trim());
      resolved.date = resolveDate(chunks[0], chunks[1]);
    } else {
      resolved.date = resolveDate(rawDate);
    }

    return resolved as Blog;
  });
});

const router = useRouter();

const onClick = (blogPath: string) => {
  setTimeout(() => {
    router.push(blogPath);
  }, 300);
};

useSeoMeta({
  title: "Zukrein | Blogs",
  author: "Zukrein",
  ogDescription: "My Blogs",
  ogImage: "/images/ogimage.jpg",
  ogUrl: "https://zukrein.me",
  ogTitle: "Zukrein | Blogs",
  ogType: "website",
  ogLocale: "tr_TR",
  ogSiteName: "zukrein.xyz",
  twitterCard: "summary_large_image",
  description: `I'm a 17-year-old UI designer and full-stack developer who's been immersed in the industry for 3 years. I blend user-friendly design with cutting-edge technology to create seamless and engaging experiences. Join me in exploring my portfolio where design meets innovation.`,
  twitterTitle: "Zukrein | Blogs",
  twitterDescription:
    "I'm a 17-year-old UI designer and full-stack developer who's been immersed in the industry for 3 years. I blend user-friendly design with cutting-edge technology to create seamless and engaging experiences. ",
  twitterImage: "/images/ogimage.jpg",
});
</script>
<template>
  <div>
    <h1 class="font-robotomono font-bold text-4xl">Blog</h1>
    <p class="mt-3 text-gray-300">
      I like to share what I know with other people.
    </p>

    <div
      v-if="blogs.length"
      class="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full"
    >
      <LayoutsRippleEffect
        v-for="(blog, index) in blogs"
        class="bg-gray-100 bg-opacity-5 backdrop-blur-md w-full cursor-pointer overflow-hidden rounded-md"
        :key="index"
        :data-blog="blog.title"
      >
        <a
          class="w-full h-full rounded-xl"
          :aria-label="blog.title"
          :href="blog.to"
          @click.prevent="onClick(blog.to)"
        >
          <div
            class="w-full bg-no-repeat bg-cover bg-center select-none h-44"
            :alt="blog.title"
            :style="{
              backgroundImage: `url(${blog.thumbnail})`,
            }"
          />

          <div class="flex flex-col space-y-2 p-4">
            <h3 class="font-semibold text-xl">
              {{ blog.title }}
            </h3>
            <p class="text-gray-300 text-sm">{{ blog.description }}</p>
          </div>
        </a>
      </LayoutsRippleEffect>
    </div>
  </div>
</template>
