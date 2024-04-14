import antfu from '@antfu/eslint-config'
import withNuxt from './.playground/.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    formatters: {
      css: true,
      html: true,
    },
  }),
)
