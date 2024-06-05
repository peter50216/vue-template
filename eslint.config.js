import js from "@eslint/js";
import prettierVue from "eslint-plugin-prettier-vue";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";
import INLINE_ELEMENTS from "eslint-plugin-vue/lib/utils/inline-non-void-elements.json" assert { type: "json" };
import * as espreeParser from "espree";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  {
    ignores: [
      "node_modules/",
      "dist/",
      "dev-dist",
      "auto-imports.d.ts",
      "components.d.ts",
    ],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
  ...tseslint.configs.recommended.map(({ files, ...config }) => config),
  {
    files: ["**/*.ts", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"],
      },
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
  {
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: {
          "<template>": espreeParser,
          js: tseslint.parser,
          ts: tseslint.parser,
        },
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
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
      "vue/singleline-html-element-content-newline": [
        "error",
        {
          ignores: ["pre", "textarea", "template", ...INLINE_ELEMENTS],
        },
      ],
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
