// eslint-disable-next-line @typescript-eslint/no-var-requires
const INLINE_ELEMENTS = require("eslint-plugin-vue/lib/utils/inline-non-void-elements.json");

module.exports = {
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: {
          "<template>": "espree",
          js: "@typescript-eslint/parser",
          ts: "@typescript-eslint/parser",
        },
      },
    },
    {
      files: ["*.ts", "*.vue"],
      parserOptions: {
        project: "./tsconfig.eslint.json",
        extraFileExtensions: [".vue"],
      },
      rules: {
        "@typescript-eslint/strict-boolean-expressions": [
          "error",
          {
            allowString: false,
            allowNumber: false,
            allowNullableObject: false,
          },
        ],
      },
    },
  ],
  plugins: ["simple-import-sort", "prettier-vue"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "no-undef": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "prettier-vue/prettier": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "vue/multi-word-component-names": "off",
    // ref sugar
    "vue/no-setup-props-destructure": "off",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
      },
    ],
    "vue/custom-event-name-casing": "error",
    "vue/padding-line-between-blocks": "error",
    // Conflict with prettier
    "vue/html-indent": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": [
      "error",
      {
        ignores: ["pre", "textarea", "template", ...INLINE_ELEMENTS],
      },
    ],
  },
};
