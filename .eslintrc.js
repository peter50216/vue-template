module.exports = {
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  plugins: ["simple-import-sort", "prettier-vue"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier-vue/prettier": "error",
  },
  settings: {
    "prettier-vue": {
      SFCBlocks: {
        template: false,
      },
    },
  },
};
