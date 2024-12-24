<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import tinycolor from "tinycolor2";
import { isDark, copyToClipboard, prClr } from "@/commons/common";
import seo from "@/commons/seo";

useSeoMeta({
  title: `${seo.app.title} | ${seo.colorModifier.title}`,
  description: seo.colorModifier.description,
  ogTitle: seo.colorModifier.title,
  ogDescription: seo.app.description,
  ogImage: seo.app.img,
  ogUrl: `${seo.app.url}${seo.colorModifier.url}`,
  twitterTitle: seo.colorModifier.title,
  twitterDescription: seo.colorModifier.description,
  twitterImage: seo.app.img,
  twitterCard: "summary",
});

const color = ref(prClr);
const modifications = reactive({
  lighten: 0,
  darken: 0,
  saturate: 0,
  desaturate: 0,
  spin: 0,
});
const modifiedColor = computed(() => {
  let clr = tinycolor(color.value);
  clr = clr.lighten(modifications.lighten);
  clr = clr.darken(modifications.darken);
  clr = clr.saturate(modifications.saturate);
  clr = clr.desaturate(modifications.desaturate);
  clr = clr.spin(modifications.spin);
  return clr.toHexString();
});
</script>

<template>
  <div>
    <h1 class="title">Color Modifier</h1>
    <div class="mb-4">
      <Label for="input-color">Input Color</Label>
      <Input v-model="color" id="input-color" type="text" class="w-full h-10" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Modifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div v-for="(value, key) in modifications" :key="key" class="mb-2">
            <Label :for="key">{{ key }}</Label>
            <Input
              v-model.number="modifications[key]"
              :id="key"
              type="number"
              :min="0"
              :max="100"
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Modified Color</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            class="sc"
            :style="{ backgroundColor: modifiedColor }"
            @click="copyToClipboard(modifiedColor)"
          >
            <p
              :class="isDark(modifiedColor) ? 'text-gray-200' : 'text-gray-800'"
            >
              <Icon class="px-3" name="material-symbols:file-copy-outline" />
              {{ modifiedColor }}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
