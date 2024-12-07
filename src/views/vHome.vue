<template>
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
        Welcome to <span class="text-primary-500">ContraColors</span>
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        Your all-in-one solution for advanced color tools
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(tool, index) in colorTools"
        :key="index"
        class="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105"
      >
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          {{ tool.name }}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {{ tool.description }}
        </p>
        <router-link
          :to="tool.link"
          class="inline-block bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Try it now
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const colorTools = [
  {
    name: "Contrast Checker",
    description:
      "Ensure your color combinations meet accessibility standards for readability.",
    link: "/checker",
  },
  {
    name: "Color Converter",
    description:
      "Easily convert colors between different formats like HEX, RGB, HSL, and more.",
    link: "/converter",
  },
  {
    name: "Palette Generator",
    description:
      "Create harmonious color palettes for your design projects with various color schemes.",
    link: "/generator",
  },
];
</script>
