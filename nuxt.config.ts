// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-30",
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },

  // https://nuxt.com/modules
  modules: [
    "@nuxthub/core",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "radix-vue/nuxt",
    "@nuxt/icon",
  ],
  hooks: {
    "vite:extendConfig": (config) => {
      const hmr = config.server?.hmr;
      if (hmr == null || typeof hmr !== "object") {
        return;
      }
      config.server = {
        ...config.server,
        hmr: {
          ...hmr,
          protocol: undefined,
        },
      };
    },
  },

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {},

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: "Hello from the Edge 👋",
    },
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {},
  },

  // https://devtools.nuxt.com
  devtools: { enabled: true },
});
