<template>
  <div class="app">
    <h1 class="title">ContraColors</h1>
    <h2 class="text-center font-lg font-semibold">
      Check Contrast Ratio between BG and FG with Ease
    </h2>
    <div class="h-[14.5rem] flex flex-row max-[540px]:flex-col">
      <div class="sec flex flex-col gap-y-8 p-8 max-[540px]:p-4">
        <vInput
          label="Background Color"
          placehold="Enter Color"
          v-model:val="bgc"
        />
        <vInput
          label="Foreground Color"
          placehold="Enter Color"
          v-model:val="fgc"
        />
      </div>
      <div class="sec p-4">
        <div class="quote" :style="{ backgroundColor: bgc, color: fgc }">
          <h3 class="text-xl font-semibold">Quote</h3>
          <p>
            If you can get today’s work done today, but you do it in such a way
            that you can’t possibly get tomorrow’s work done tomorrow, then you
            lose.
          </p>
          <span class="font-bold">- Martin Fowler</span>
        </div>
      </div>
    </div>
    <div class="res">
      <p>
        Contrast Ratio: <b>{{ ratio }}:1</b>
      </p>
      <div
        class="font-bold"
        :style="{ color: isPassAA ? 'limegreen' : isPassAAA ? 'gold' : 'red' }"
      >
        {{ passLevel }}
      </div>
      <p class="mt-2">
        WCAG Level: <b>{{ passLevel }}</b>
      </p>
      <p>
        Rating: <b>{{ stars }}</b>
      </p>
      <p class="text-sm mt-1">
        <i
          >WCAG AA requires a contrast ratio of at least 4.5:1 for normal text
          and 3:1 for large text.</i
        ><br />
        <i
          >WCAG AAA requires a contrast ratio of at least 7:1 for normal text
          and 4.5:1 for large text.</i
        >
      </p>
      <button class="btn mt-4 mb-2" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import tinycolor from "tinycolor2";
import vInput from "./vInput.vue";

const bgc = ref("#ffffff");
const fgc = ref("#000000");

const ratio = computed(() => {
  const bg = new tinycolor(bgc.value);
  const fg = new tinycolor(fgc.value);

  if (!bg.isValid() || !fg.isValid()) {
    return 0;
  }
  return parseFloat(tinycolor.readability(bg, fg).toFixed(2));
});

const isPassAA = computed(() => ratio.value >= 4.5);
const isPassAAA = computed(() => ratio.value >= 7.0);

const passLevel = computed(() => {
  if (isPassAAA.value) {
    return "AAA (Excellent)";
  } else if (isPassAA.value) {
    return "AA (Good)";
  } else {
    return "Fail (Insufficient)";
  }
});

const stars = computed(() => {
  const normalizedRatio = Math.min(ratio.value / 7, 1);
  return `${Math.round(normalizedRatio * 5)} / 5`;
});

const reset = () => {
  bgc.value = "#ffffff";
  fgc.value = "#000000";
};
</script>
