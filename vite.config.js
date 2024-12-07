import { fileURLToPath, URL } from "node:url";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "ContraColors",
        short_name: "Contra",
        description:
          "ContraColors is a powerful PWA web app built with Vue.js, offering essential tools for designers and developers. Easily check color contrast for accessibility, convert colors between formats, and generate beautiful color schemes. Perfect for improving web design and ensuring accessibility.",
        theme_color: "#3e7bfc",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,jpg,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
