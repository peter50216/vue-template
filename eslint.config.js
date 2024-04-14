import antfu from '@antfu/eslint-config';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  antfu({
    stylistic: {
      semi: true,
    },
    formatters: {
      css: true,
      html: true,
    },
  }),
);
