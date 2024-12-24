<script setup lang="ts">
import seo from "@/commons/seo";

useSeoMeta({
  title: `${seo.app.title} | ${seo.home.title}`,
  description: seo.app.description,
  ogTitle: seo.home.title,
  ogDescription: seo.app.description,
  ogImage: seo.app.img,
  ogUrl: `${seo.app.url}${seo.home.url}`,
  twitterTitle: seo.home.title,
  twitterDescription: seo.app.description,
  twitterImage: seo.app.img,
  twitterCard: "summary",
});
</script>

<template>
  <div class="container flex flex-col lg:flex-row items-center py-16 gap-10">
    <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
      <h1 class="title mb-4">Welcome to ContraColors</h1>
      <h2 class="text-3xl font-semibold mb-3">Best Color Tools</h2>
      <p class="text-lg">
        ContraColors is a powerful PWA web app built with Vue.js, offering
        essential tools for designers and developers. Easily check color
        contrast for accessibility, convert colors between formats, and generate
        beautiful color schemes. Perfect for improving web design and ensuring
        accessibility.
      </p>
      <NuxtLink to="/tools"
        ><Button variant="secondary">Explore Tools</Button></NuxtLink
      >
    </div>
    <div class="flex-1 order-1 lg:order-2">
      <NuxtImg
        src="/favicon.svg"
        sizes="xs:100vw sm:660px md:400px"
        densities="x1"
        format="png"
        alt="Hero Image"
      />
    </div>
  </div>
</template>
