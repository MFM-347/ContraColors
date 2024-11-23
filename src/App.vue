<script setup>
import { ref, computed } from "vue";
import vApp from "./components/vApp.vue";
import PWABadge from "./components/PWABadge.vue";

const isDark = ref(false);
const theme = computed(() => (isDark.value ? "dark" : "light"));

const toggle = () => {
  isDark.value = !isDark.value;
};
</script>

<template>
  <div class="bgc ac" :class="theme">
    <vApp />
    <button class="btn fixed bottom-4 right-4" @click="toggle">
      Toggle Theme
    </button>
    <PWABadge />
  </div>
</template>
