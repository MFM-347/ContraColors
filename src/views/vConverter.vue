<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="title">Color Converter</h1>
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <vInput
          label="Input Color"
          placehold="Enter color (e.g., #FF0000, rgb(255,0,0))"
          v-model:val="inputColor"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <label>Color Preview</label>
        <div
          class="w-full h-12 border-2 border-gray-400 dark:border-gray-600 rounded-md shadow-sm"
          :style="{ backgroundColor: inputColor }"
        ></div>
      </div>
    </div>
    <div class="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Converted Colors
      </h3>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(value, format) in convertedColors" :key="format">
          <vInput
            :label="format"
            :placehold="`Enter color (${value})`"
            :val="value"
            :read="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import vInput from "@/components/vInput.vue";
import { ref, computed } from "vue";
import tinycolor from "tinycolor2";

const inputColor = ref("#FF0000");
const convertedColors = computed(() => {
  const color = tinycolor(inputColor.value);
  return {
    HEX: color.toHexString(),
    RGB: color.toRgbString(),
    HSL: color.toHslString(),
    HSV: color.toHsvString(),
    Name: color.toName() || "N/A",
  };
});
</script>
