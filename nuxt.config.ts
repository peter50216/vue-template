// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@nuxt/eslint',
      {
        config: {
          standalone: false,
        },
      },
    ],
    [
      '@nuxtjs/stylelint-module',
      {
        lintOnStart: false,
        include: ['**/*.{css,vue}'],
      },
    ],
  ],
  typescript: {
    includeWorkspace: true,
  },
})
