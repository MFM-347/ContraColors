<script setup lang="ts">
import seo from "@/commons/seo";

useSeoMeta({
  title: `${seo.app.title} | ${seo.about.title}`,
  description: seo.app.description,
  ogTitle: seo.about.title,
  ogDescription: seo.app.description,
  ogImage: seo.app.img,
  ogUrl: `${seo.app.url}${seo.about.url}`,
  twitterTitle: seo.about.title,
  twitterDescription: seo.app.description,
  twitterImage: seo.app.img,
  twitterCard: "summary",
});
</script>

<template>
  <div class="container py-20">
    <h1 class="title">About ContraColors</h1>
    <Card>
      <CardHeader>
        <CardTitle>Project Information</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="mb-4">
          ContraColors is a powerful PWA web app built with Vue.js, offering
          essential tools for designers and developers. Easily check color
          contrast for accessibility, convert colors between formats, and
          generate beautiful color schemes. Perfect for improving web design and
          ensuring accessibility.
        </p>
        <div class="lnks">
          <Button class="w-auto" variant="outline">
            <a href="https://github.com/MFM-347/ContraColors/" target="_blank">
              <Icon name="heroicons:user-20-solid" />
              Source Code
            </a>
          </Button>
          <Button class="w-auto" variant="outline">
            <a href="https://github.com/MFM-347/" target="_blank">
              <Icon name="heroicons:code-bracket-20-solid" />
              Author
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
.lnks {
  @apply flex flex-row gap-4 relative right-2 bottom-2;
}
</style>
