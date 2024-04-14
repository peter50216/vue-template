import prettierVue from "eslint-plugin-prettier-vue";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import withNuxt from "./.playground/.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
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
    settings: {
      "prettier-vue": {
        SFCBlocks: {
          template: false,
        },
      },
    },
  },
);
