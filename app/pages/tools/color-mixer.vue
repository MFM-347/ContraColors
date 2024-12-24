<script setup lang="ts">
import { ref, computed } from "vue";
import tinycolor from "tinycolor2";
import { isDark, copyToClipboard } from "@/commons/common";
import seo from "@/commons/seo";

useSeoMeta({
  title: `${seo.app.title} | ${seo.colorMixer.title}`,
  description: seo.colorMixer.description,
  ogTitle: seo.colorMixer.title,
  ogDescription: seo.app.description,
  ogImage: seo.app.img,
  ogUrl: `${seo.app.url}${seo.colorMixer.url}`,
  twitterTitle: seo.colorMixer.title,
  twitterDescription: seo.colorMixer.description,
  twitterImage: seo.app.img,
  twitterCard: "summary",
});

const color1 = ref("#FF0000");
const color2 = ref("#0000FF");
const mixRatio = ref(50);

const mixedColor = computed(() => {
  const c1 = tinycolor(color1.value);
  const c2 = tinycolor(color2.value);
  return tinycolor.mix(c1, c2, mixRatio.value).toHexString();
});
</script>

<template>
  <div>
    <h1 class="title">Color Mixer</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div>
        <Label for="color1">Color 1</Label>
        <Input v-model="color1" id="color1" type="text" class="w-full h-10" />
      </div>
      <div>
        <Label for="color2">Color 2</Label>
        <Input v-model="color2" id="color2" type="text" class="w-full h-10" />
      </div>
      <div>
        <Label for="mix-ratio">Mix Ratio</Label>
        <Input
          v-model="mixRatio"
          type="number"
          id="mix-ratio"
          :min="0"
          :max="100"
        />
        <p class="text-center mt-2">
          Color-1 <span class="sup">{{ mixRatio }}%</span> / Color-2
          <span class="sup">{{ 100 - mixRatio }}%</span>
        </p>
      </div>
    </div>
    <Card>
      <CardHeader>
        <CardTitle>Mixed Color</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          class="sc"
          :style="{ backgroundColor: mixedColor }"
          @click="copyToClipboard(mixedColor)"
        >
          <p :class="isDark(mixedColor) ? 'text-gray-200' : 'text-gray-800'">
            <Icon class="px-3" name="material-symbols:file-copy-outline" />
            {{ mixedColor }}
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
.sup {
  @apply text-sm align-super;
}
</style>
