// Default order copied from https://github.com/typescript-eslint/typescript-eslint/blob/d134b1fa2540dec7094728f3dec1bbb8c644fe58/packages/eslint-plugin/src/rules/member-ordering.ts#L41
const defaultOrder = [
  // Index signature
  "signature",
  "call-signature",

  // Fields
  "public-static-field",
  "protected-static-field",
  "private-static-field",

  "public-decorated-field",
  "protected-decorated-field",
  "private-decorated-field",

  "public-instance-field",
  "protected-instance-field",
  "private-instance-field",

  "public-abstract-field",
  "protected-abstract-field",
  "private-abstract-field",

  "public-field",
  "protected-field",
  "private-field",

  "static-field",
  "instance-field",
  "abstract-field",

  "decorated-field",

  "field",

  // Constructors
  "public-constructor",
  "protected-constructor",
  "private-constructor",

  "constructor",

  // Methods
  "public-static-method",
  "protected-static-method",
  "private-static-method",

  "public-decorated-method",
  "protected-decorated-method",
  "private-decorated-method",

  "public-instance-method",
  "protected-instance-method",
  "private-instance-method",

  "public-abstract-method",
  "protected-abstract-method",
  "private-abstract-method",

  "public-method",
  "protected-method",
  "private-method",

  "static-method",
  "instance-method",
  "abstract-method",

  "decorated-method",

  "method",
];

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
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-ordering": [
      "error",
      { default: { memberTypes: defaultOrder, order: "alphabetically" } },
    ],
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "prettier-vue/prettier": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "vue/multi-word-component-names": "off",
    // ref sugar
    "vue/no-setup-props-destructure": "off",
  },
  settings: {
    "prettier-vue": {
      SFCBlocks: {
        template: false,
      },
    },
  },
};
