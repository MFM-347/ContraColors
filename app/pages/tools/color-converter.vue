<script setup lang="ts">
import { ref, computed } from "vue";
import tinycolor from "tinycolor2";
import { isDark, copyToClipboard, prClr } from "@/commons/common";
import seo from "@/commons/seo";

useSeoMeta({
  title: `${seo.app.title} | ${seo.colorConverter.title}`,
  description: seo.colorConverter.description,
  ogTitle: seo.colorConverter.title,
  ogDescription: seo.app.description,
  ogImage: seo.app.img,
  ogUrl: `${seo.app.url}${seo.colorConverter.url}`,
  twitterTitle: seo.colorConverter.title,
  twitterDescription: seo.colorConverter.description,
  twitterImage: seo.app.img,
  twitterCard: "summary",
});

const color = ref(prClr);

const conversions = computed(() => {
  const clr = tinycolor(color.value);
  return {
    hex: clr.toHexString(),
    rgb: clr.toRgbString(),
    hsl: clr.toHslString(),
    hsv: clr.toHsvString(),
    name: clr.toName() || "No common name",
  };
});
</script>

<template>
  <div>
    <h1 class="title">Color Converter</h1>
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
            <h2 class="text-xl font-semibold mb-2">Conversions</h2>
            <ul>
              <li class="cnvd">
                HEX: {{ conversions.hex }}
                <Icon
                  class="cursor-pointer px-3"
                  name="material-symbols:file-copy-outline"
                  @click="copyToClipboard(conversions.hex)"
                />
              </li>
              <li class="cnvd">
                RGB: {{ conversions.rgb }}
                <Icon
                  class="cursor-pointer px-3"
                  name="material-symbols:file-copy-outline"
                  @click="copyToClipboard(conversions.rgb)"
                />
              </li>
              <li class="cnvd">
                HSL: {{ conversions.hsl }}
                <Icon
                  class="cursor-pointer px-3"
                  name="material-symbols:file-copy-outline"
                  @click="copyToClipboard(conversions.hsl)"
                />
              </li>
              <li class="cnvd">
                HSV: {{ conversions.hsv }}
                <Icon
                  class="cursor-pointer px-3"
                  name="material-symbols:file-copy-outline"
                  @click="copyToClipboard(conversions.hsv)"
                />
              </li>
              <li class="cnvd">
                Name: {{ conversions.name }}
                <Icon
                  class="cursor-pointer px-3"
                  name="material-symbols:file-copy-outline"
                  @click="copyToClipboard(conversions.name)"
                />
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-2">Color Preview</h2>
            <div class="sc" :style="{ backgroundColor: conversions.hex }">
              <p
                :class="
                  isDark(conversions.hex) ? 'text-gray-200' : 'text-gray-800'
                "
              >
                {{ conversions.hex }}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
.cnvd {
  @apply flex flex-row w-full p-3 bg-background/90 border my-2;
}
</style>
