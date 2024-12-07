<script setup>
import navBar from "@/components/navBar.vue";
import PWABadge from "@/components/PWABadge.vue";
import darkMode from "@/components/darkMode.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <div class="bgc">
    <navBar />
    <main class="container mx-auto px-6 py-8">
      <router-view></router-view>
    </main>
    <PWABadge />
    <darkMode />
    <SpeedInsights />
  </div>
</template>
