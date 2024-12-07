<template>
  <div class="fixed bottom-8 right-8">
    <button @click="toggleDarkMode" class="btn">Toggle Theme</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
    },
  },
  mounted() {
    if (localStorage.getItem("dark-mode") === "enabled") {
      document.documentElement.classList.add("dark");
    }
  },
};
</script>
