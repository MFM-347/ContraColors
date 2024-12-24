<script setup lang="ts">
import { ref, computed } from "vue";
import tinycolor from "tinycolor2";
import seo from "@/commons/seo";

useSeoMeta({
  title: `${seo.app.title} | ${seo.contrastChecker.title}`,
  description: seo.contrastChecker.description,
  ogTitle: seo.contrastChecker.title,
  ogDescription: seo.app.description,
  ogImage: seo.app.img,
  ogUrl: `${seo.app.url}${seo.contrastChecker.url}`,
  twitterTitle: seo.contrastChecker.title,
  twitterDescription: seo.contrastChecker.description,
  twitterImage: seo.app.img,
  twitterCard: "summary",
});

const fgc = ref("#000000");
const bgc = ref("#FFFFFF");

const ratio = computed(() => {
  const fg = tinycolor(fgc.value);
  const bg = tinycolor(bgc.value);
  return tinycolor.readability(fg, bg).toFixed(2);
});

const wcagAA = computed(() => {
  return tinycolor.isReadable(fgc.value, bgc.value, {
    level: "AA",
    size: "small",
  })
    ? "Pass"
    : "Fail";
});

const wcagAAA = computed(() => {
  return tinycolor.isReadable(fgc.value, bgc.value, {
    level: "AAA",
    size: "small",
  })
    ? "Pass"
    : "Fail";
});
</script>

<template>
  <div>
    <h1 class="title">Contrast Checker</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label for="fg-color">Foreground Color</Label>
        <Input v-model="fgc" id="fg-color" type="text" class="w-full h-10" />
      </div>
      <div>
        <Label for="bg-color">Background Color</Label>
        <Input v-model="bgc" id="bg-color" type="text" class="w-full h-10" />
      </div>
    </div>
    <div class="sc mt-4" :style="{ color: fgc, background: bgc }">
      <p>
        "The best way to predict the future is to invent it." -<b>Alan Kay</b>
      </p>
    </div>
    <Card class="mt-4">
      <CardHeader>
        <CardTitle>Contrast Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Contrast Ratio: {{ ratio }}</p>
        <p>WCAG 2.0 Compliance:</p>
        <ul>
          <li>AA: {{ wcagAA }}</li>
          <li>AAA: {{ wcagAAA }}</li>
        </ul>
      </CardContent>
    </Card>
  </div>
</template>
