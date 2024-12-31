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

const featured = [
  {
    name: "Color Converter",
    description: "Convert between different color formats.",
    link: "/tools/color-converter",
    icon: "mdi:swap-horizontal",
  },
  {
    name: "Color Modifier",
    description:
      "Adjust colors to find the perfect hue, saturation, or brightness.",
    link: "/tools/color-modifier",
    icon: "mdi:instant-mix",
  },
  {
    name: "Palette Generator",
    description: "Generate beautiful color palettes for your designs.",
    link: "/tools/palette-generator",
    icon: "ion:color-palette-sharp",
  },
];
</script>

<template>
  <section class="border-b">
    <div
      class="container flex flex-col lg:flex-row items-center py-12 mb-8 gap-10"
    >
      <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
        <h1 class="title mb-4">Welcome to ContraColors</h1>
        <h2 class="text-3xl font-semibold mb-3">Best Color Tools</h2>
        <p>
          ContraColors is a powerful PWA web app built with Vue.js, offering
          essential tools for designers and developers. Easily check color
          contrast for accessibility, convert colors between formats, and
          generate beautiful color schemes. Perfect for improving web design and
          ensuring accessibility.
        </p>
        <div class="flex flex-row gap-4 mt-4">
          <NuxtLink to="/tools">
            <Button class="text-lg">Explore</Button>
          </NuxtLink>
          <Button class="text-base" variant="secondary"
            ><a href="#featured">Featured Tools</a></Button
          >
        </div>
      </div>
      <div class="flex-1 order-1 lg:order-2">
        <NuxtImg
          src="/favicon.svg"
          sizes="xs:100vw sm:660px md:400px"
          densities="x1"
          format="png"
          alt="ContraColors"
        />
      </div>
    </div>
  </section>
  <section id="featured">
    <div class="my-8 py-4 px-8">
      <h2 class="title">Featured Tools</h2>
      <div class="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card
          v-for="tool in featured"
          :key="tool.name"
          class="shadow-md font-normal"
        >
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Icon :name="tool.icon" class="text-3xl" />
              {{ tool.name }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {{
                tool.description ||
                "Explore this tool to enhance your color workflow."
              }}
            </p>
          </CardContent>
          <CardFooter>
            <NuxtLink
              :to="tool.link"
              class="text-primary font-semibold hover:italic hover:underline"
            >
              Check it out
            </NuxtLink>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
