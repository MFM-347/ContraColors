<template>
  <header
    class="flex items-center gap-x-1 p-1 rounded-md border bg-zinc-50 dark:bg-zinc-950"
  >
    <div class="flex justify-between w-full">
      <div class="flex gap-2 overflow-x-auto scrollbar-hide">
        <NuxtLink
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          class="lnk"
        >
          {{ route.name }}
        </NuxtLink>
      </div>
      <button @click="toggleDarkMode" class="lnk ml-2">Dark Mode</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const routes = [
  { name: "Home", path: "/" },
  { name: "Tools", path: "/tools" },
  { name: "About", path: "/about" },
];

const toggleDarkMode = () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
};

onMounted(() => {
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.documentElement.classList.add("dark");
  }
});
</script>

<style scoped>
header {
  max-width: 100%;
  overflow-x: hidden;
  white-space: nowrap;
}
.lnk {
  @apply inline-flex items-center justify-center gap-2 rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-zinc-200 hover:dark:bg-zinc-800 whitespace-nowrap;
}
.scrollbar-hide {
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}
@media (max-width: 768px) {
  header {
    padding: 0.5rem;
  }
  .lnk {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }
}
</style>
