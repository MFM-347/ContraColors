<template>
  <header class="py-2 px-4 md:py-3 md:px-5 border-b">
    <nav class="flex px-2 items-center">
      <NuxtLink to="/" class="flex gap-1 items-start sm:items-center">
        <span class="h text-xl sm:text-3xl font-extrabold text-primary"
          >Contra</span
        >
        <span class="h text-xl sm:text-3xl font-bold">Colors</span>
      </NuxtLink>
      <ul class="flex gap-3 sm:gap-6 ml-auto text-base sm:text-xl capitalize">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/tools">Tools</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
