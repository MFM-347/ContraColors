// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  modules: [
    "@vite-pwa/nuxt",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],

  googleFonts: {
    families: {
      "Roboto+Condensed": [700, 800],
      Raleway: "300..600",
    },
  },

  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },

  pwa: {
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
        "Transform your design workflow with ContraColors. Blend, convert, and generate accessible color palettes using our comprehensive color tools.",
      theme_color: "#244bf9",
    },

    workbox: {
      globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: "/",
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },

    registerWebManifestInRouteRules: true,

    client: {
      installPrompt: true,
    },
  },

  compatibilityDate: "2024-12-22",
});
