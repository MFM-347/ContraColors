<script setup lang="ts">
import seo from "@/commons/seo";

useSeoMeta({
  title: `${seo.app.title} | ${seo.tools.title}`,
  description: seo.app.description,
  ogTitle: seo.about.title,
  ogDescription: seo.app.description,
  ogImage: seo.app.img,
  ogUrl: `${seo.app.url}${seo.tools.url}`,
  twitterTitle: seo.tools.title,
  twitterDescription: seo.app.description,
  twitterImage: seo.app.img,
  twitterCard: "summary",
});

const tools = [
  {
    name: "Color Info",
    description: "View detailed information about colors.",
    link: "/tools/color-info",
    icon: "mdi:information",
  },
  {
    name: "Color Blender",
    description: "Blend colors to create new shades and gradients.",
    link: "/tools/color-blender",
    icon: "ion:color-filter",
  },
  {
    name: "Color Converter",
    description: "Convert between different color formats.",
    link: "/tools/color-converter",
    icon: "mdi:swap-horizontal",
  },
  {
    name: "Contrast Checker",
    description: "Ensure your color combinations are accessible.",
    link: "/tools/contrast-checker",
    icon: "mdi:check-bold",
  },
  {
    name: "Palette Generator",
    description: "Generate beautiful color palettes for your designs.",
    link: "/tools/palette-generator",
    icon: "ion:color-palette-sharp",
  },
  {
    name: "Color Modifier",
    description:
      "Adjust colors to find the perfect hue, saturation, or brightness.",
    link: "/tools/color-modifier",
    icon: "mdi:instant-mix",
  },
  {
    name: "Color Mixer",
    description: "Experiment with mixing colors to find unique colors.",
    link: "/tools/color-mixer",
    icon: "material-symbols:shuffle",
  },
];
</script>

<template>
  <div class="container flex flex-col items-center py-20">
    <div>
      <NuxtImg
        src="/favicon.svg"
        sizes="xs:80vw sm:460px md:300px"
        densities="x1"
        format="webp"
        alt="Hero Image"
      />
    </div>
    <div>
      <h1 class="title">Tools</h1>
    </div>
    <div
      class="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10"
    >
      <Card v-for="tool in tools" :key="tool.name" class="shadow-lg">
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
          <NuxtLink :to="tool.link" class="text-blue-500 hover:underline">
            Go to {{ tool.name }}
          </NuxtLink>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
