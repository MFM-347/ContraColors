<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="title">Contrast Checker</h1>
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <vInput
          label="Foreground Color"
          placehold="Enter Color"
          v-model:val="fgc"
        />
      </div>
      <div>
        <vInput
          label="Background Color"
          placehold="Enter Color"
          v-model:val="bgc"
        />
      </div>
    </div>
    <div
      class="p-6 rounded-lg shadow-md mb-6"
      :style="{ color: foregroundColor, backgroundColor: backgroundColor }"
    >
      <h2 class="text-2xl font-bold mb-2">Sample Text</h2>
      <p>This is how your text will look with the selected colors.</p>
    </div>
    <div class="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Contrast Ratio
      </h3>
      <p class="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        {{ contrastRatio }}
      </p>
      <p :class="['text-lg', contrastRating.color]">
        {{ contrastRating.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import vInput from "@/components/vInput.vue";
import { ref, computed } from "vue";
import tinycolor from "tinycolor2";

const foregroundColor = ref("#FFFFFF");
const backgroundColor = ref("#000000");

const contrastRatio = computed(() => {
  const fg = tinycolor(foregroundColor.value);
  const bg = tinycolor(backgroundColor.value);
  return tinycolor.readability(fg, bg).toFixed(2);
});

const contrastRating = computed(() => {
  const ratio = parseFloat(contrastRatio.value);
  if (ratio >= 7) {
    return {
      text: "AAA (Excellent)",
      color: "text-green-600 dark:text-green-400",
    };
  } else if (ratio >= 4.5) {
    return { text: "AA (Good)", color: "text-yellow-600 dark:text-yellow-400" };
  } else {
    return { text: "Fail", color: "text-red-600 dark:text-red-400" };
  }
});
</script>
