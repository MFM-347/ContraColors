<template>
  <header class="bg-white dark:bg-zinc-800 shadow">
    <nav class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-2xl font-bold text-zinc-800 dark:text-white"
        >
          ContraColors
        </router-link>
        <div class="flex space-x-4">
          <router-link
            to="/"
            class="text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white"
          >
            Home
          </router-link>
          <router-link
            to="/checker"
            class="text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white"
          >
            Contrast Checker
          </router-link>
          <router-link
            to="/converter"
            class="text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white"
          >
            Color Converter
          </router-link>
          <router-link
            to="/generator"
            class="text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white"
          >
            Palette Generator
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
