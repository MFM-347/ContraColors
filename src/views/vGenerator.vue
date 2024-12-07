<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Palette Generator</h1>
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <vInput
          label="Base Color"
          placehold="Enter color (e.g., #FF0000, rgb(255,0,0))"
          v-model:val="baseColor"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <label> Palette Type </label>
        <select
          v-model="paletteType"
          class="bg-zinc-300 dark:bg-zinc-700 text-gray-900 dark:text-gray-100 px-4 py-2 text-lg w-full rounded-lg border-2 border-gray-400 dark:border-gray-600 focus:border-zinc-600 dark:focus:border-zinc-400 focus:outline-none transition-colors duration-100 tracking-wide"
        >
          <option value="analogous">Analogous</option>
          <option value="monochromatic">Monochromatic</option>
          <option value="triad">Triad</option>
          <option value="tetrad">Tetrad</option>
          <option value="complement">Complement</option>
          <option value="splitcomplement">Split Complement</option>
        </select>
      </div>
    </div>
    <div class="bg-zinc-200 dark:bg-zinc-800 rounded-2xl shadow-md p-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Generated Palette
      </h3>
      <div class="grid grid-cols-5 gap-4">
        <div
          v-for="(color, index) in generatedPalette"
          :key="index"
          class="flex flex-col items-center"
        >
          <div
            class="w-20 h-20 rounded-md shadow-md mb-2"
            :style="{ backgroundColor: color }"
          ></div>
          <span class="text-sm text-gray-600 dark:text-gray-400">{{
            color
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import vInput from "@/components/vInput.vue";
import { ref, computed } from "vue";
import tinycolor from "tinycolor2";

const baseColor = ref("#FF0000");
const paletteType = ref("analogous");
const generatedPalette = computed(() => {
  const color = tinycolor(baseColor.value);
  let palette;
  switch (paletteType.value) {
    case "analogous":
      palette = color.analogous();
      break;
    case "monochromatic":
      palette = color.monochromatic();
      break;
    case "triad":
      palette = color.triad();
      break;
    case "tetrad":
      palette = color.tetrad();
      break;
    case "complement":
      palette = [color, color.complement()];
      break;
    case "splitcomplement":
      palette = color.splitcomplement();
      break;
    default:
      palette = color.analogous();
  }
  return palette.map((c) => c.toHexString());
});
</script>
