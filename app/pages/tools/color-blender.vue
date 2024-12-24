<script setup lang="ts">
import { ref, computed } from "vue";
import tinycolor from "tinycolor2";
import { isDark, copyToClipboard } from "@/commons/common";
import seo from "@/commons/seo";

useSeoMeta({
  title: `${seo.app.title} | ${seo.colorBlender.title}`,
  description: seo.colorBlender.description,
  ogTitle: seo.colorBlender.title,
  ogDescription: seo.app.description,
  ogImage: seo.app.img,
  ogUrl: `${seo.app.url}${seo.colorBlender.url}`,
  twitterTitle: seo.colorBlender.title,
  twitterDescription: seo.colorBlender.description,
  twitterImage: seo.app.img,
  twitterCard: "summary",
});

const startColor = ref("#FF0000");
const endColor = ref("#0000FF");
const steps = ref(5);
const blendedColors = computed(() => {
  const start = tinycolor(startColor.value);
  const end = tinycolor(endColor.value);
  return Array.from({ length: steps.value }, (_, i) => {
    const weight = i / (steps.value - 1);
    return tinycolor.mix(start, end, weight * 100).toHexString();
  });
});
</script>

<template>
  <div>
    <h1 class="title">Color Blender</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <Label for="start-color">Start Color</Label>
        <Input
          v-model="startColor"
          id="start-color"
          type="text"
          class="w-full h-10"
        />
      </div>
      <div>
        <Label for="end-color">End Color</Label>
        <Input
          v-model="endColor"
          id="end-color"
          type="text"
          class="w-full h-10"
        />
      </div>
    </div>
    <div class="mb-4">
      <Label for="steps">Number of Steps</Label>
      <Input v-model="steps" id="steps" type="number" :min="2" :max="10" />
    </div>
    <Card>
      <CardHeader>
        <CardTitle>Blended Colors</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div
            v-for="(color, index) in blendedColors"
            :key="index"
            class="sc"
            :style="{ backgroundColor: color }"
            @click="copyToClipboard(color)"
          >
            <p :class="isDark(color) ? 'text-gray-200' : 'text-gray-800'">
              <Icon class="px-3" name="material-symbols:file-copy-outline" />
              {{ color }}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
