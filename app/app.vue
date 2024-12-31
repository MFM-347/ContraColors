<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import "./app.css";
import "./type.css";
import seo from "@/commons/seo";

useSeoMeta({
  title: seo.app.title,
  description: seo.app.description,
  ogTitle: seo.app.title,
  ogDescription: seo.app.description,
  ogImage: seo.app.img,
  ogUrl: seo.app.url,
  twitterTitle: seo.app.title,
  twitterDescription: seo.app.description,
  twitterImage: seo.app.img,
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <div>
    <NuxtPwaAssets />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Analytics/>
  </div>
</template>
