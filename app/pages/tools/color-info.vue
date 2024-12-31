<script setup lang="ts">
import { ref, computed } from "vue";
import tinycolor from "tinycolor2";
import { isDark, copyToClipboard, prClr } from "@/commons/common";
import seo from "@/commons/seo";

useSeoMeta({
  title: `${seo.app.title} | ${seo.colorInfo.title}`,
  description: seo.colorInfo.description,
  ogTitle: seo.colorInfo.title,
  ogDescription: seo.app.description,
  ogImage: seo.app.img,
  ogUrl: `${seo.app.url}${seo.colorInfo.url}`,
  twitterTitle: seo.colorInfo.title,
  twitterDescription: seo.colorInfo.description,
  twitterImage: seo.app.img,
  twitterCard: "summary",
});

const color = ref(prClr);

const colorInfo = computed(() => {
  const clr = tinycolor(color.value);
  const mRClr = (c: string) =>
    tinycolor.mostReadable(c, ["#ffffff", "#000000"]).toHexString();
  return {
    format: clr.getFormat(),
    isDark: clr.isDark(),
    isLight: clr.isLight(),
    isValid: clr.isValid(),
    luminance: clr.getLuminance().toFixed(2),
    brightness: clr.getBrightness(),
    mostReadable: mRClr(clr.toHexString()),
    c: clr.toHexString(),
  };
});
</script>

<template>
  <div>
    <h1 class="title">Color Info</h1>
    <div class="mb-4">
      <Label for="input-color">Input Color</Label>
      <Input
        v-model="color"
        id="input-color"
        type="text"
        placeholder="Enter color (e.g., #FF0000, rgb(255,0,0), red)"
      />
    </div>
    <Card>
      <CardHeader>
        <CardTitle>Color Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 class="text-xl font-semibold mb-2">Color Properties</h2>
            <ul>
              <li>Format: {{ colorInfo.format }}</li>
              <li>Is Dark: {{ colorInfo.isDark }}</li>
              <li>Is Light: {{ colorInfo.isLight }}</li>
              <li>Is Valid: {{ colorInfo.isValid }}</li>
              <li>Luminance: {{ colorInfo.luminance }}</li>
              <li>Brightness: {{ colorInfo.brightness }}</li>
              <li>Most Readable: {{ colorInfo.mostReadable }}</li>
            </ul>
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-2">Color Preview</h2>
            <div
              class="sc"
              :style="{ backgroundColor: colorInfo.c }"
              @click="copyToClipboard(colorInfo.c)"
            >
              <p :class="isDark(color) ? 'text-gray-200' : 'text-gray-800'">
                <Icon class="px-3" name="material-symbols:file-copy-outline" />
                {{ colorInfo.c }}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
