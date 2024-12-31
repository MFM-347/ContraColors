<script setup lang="ts">
import { ref, computed } from "vue";
import tinycolor from "tinycolor2";
import { isDark, copyToClipboard, prClr } from "@/commons/common";
import seo from "@/commons/seo";

useSeoMeta({
  title: `${seo.app.title} | ${seo.paletteGenerator.title}`,
  description: seo.paletteGenerator.description,
  ogTitle: seo.paletteGenerator.title,
  ogDescription: seo.app.description,
  ogImage: seo.app.img,
  ogUrl: `${seo.app.url}${seo.paletteGenerator.url}`,
  twitterTitle: seo.paletteGenerator.title,
  twitterDescription: seo.paletteGenerator.description,
  twitterImage: seo.app.img,
  twitterCard: "summary",
});

const color = ref(prClr);
const selected = ref("complementary");
const palette = computed(() => {
  const clr = tinycolor(color.value);
  switch (selected.value) {
    case "complementary":
      return [clr.toHexString(), clr.complement().toHexString()];
    case "analogous":
      return clr.analogous().map((c) => c.toHexString());
    case "monochromatic":
      return clr.monochromatic().map((c) => c.toHexString());
    case "triadic":
      return clr.triad().map((c) => c.toHexString());
    case "tetradic":
      return clr.tetrad().map((c) => c.toHexString());
    case "splitcomplement":
      return clr.splitcomplement().map((c) => c.toHexString());
    default:
      return [];
  }
});
</script>

<template>
  <div>
    <h1 class="title">Palette Generator</h1>
    <div class="mb-4">
      <Label for="base-color">Base Color</Label>
      <Input v-model="color" id="base-color" type="text" class="w-full h-10" />
    </div>
    <div class="mb-4">
      <Label for="palette-type">Palette Type</Label>
      <RadioGroup
        v-model="selected"
        id="palette-type"
        class="flex flex-row flex-wrap space-x-4"
      >
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="complementary" value="complementary" />
          <Label for="complementary">Complementary</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="analogous" value="analogous" />
          <Label for="analogous">Analogous</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="monochromatic" value="monochromatic" />
          <Label for="monochromatic">Monochromatic</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="triadic" value="triadic" />
          <Label for="triadic">Triadic</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="tetradic" value="tetradic" />
          <Label for="tetradic">Tetradic</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="splitcomplement" value="splitcomplement" />
          <Label for="splitcomplement">Split Complement</Label>
        </div>
      </RadioGroup>
    </div>
    <h3 class="text-xl font-semibold mb-4">Selected Palette: {{ selected }}</h3>
    <Card>
      <CardHeader>
        <CardTitle>Generated Palette</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div
            v-for="(color, index) in palette"
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
