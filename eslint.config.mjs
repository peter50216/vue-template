// @ts-check
import prettierVue from "eslint-plugin-prettier-vue";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "prettier-vue": prettierVue,
    },
  },
  {
    rules: {
      "prettier-vue/prettier": "error",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },
  },
).overrideRules({
  "vue/max-attributes-per-line": ["warn", { singleline: 3 }],
});
