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
          "ContraColors - Best Color Contrast Checker for Accessibility and UI Design. Easily check color contrast ratios to improve accessibility, readability, and user experience. Works offline as a PWA and adapts to any device.",
        theme_color: "#00abf5",
        screenshots: [
          {
            src: "/screenshot1.png",
            sizes: "1080x1920",
            type: "image/png",
          },
          {
            src: "/screenshot2.png",
            sizes: "1080x1920",
            type: "image/png",
          },
        ],
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
