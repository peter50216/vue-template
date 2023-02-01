import { presetThemeDefault } from "@anu-vue/preset-theme-default";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetMini from "@unocss/preset-mini";
import presetUno from "@unocss/preset-uno";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { presetAnu, presetIconExtraProperties } from "anu-vue";
import { defineConfig } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  presets: [
    presetMini(),
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: presetIconExtraProperties,
    }),

    // anu-vue preset
    presetAnu(),

    // default theme preset
    presetThemeDefault(),

    presetAttributify(),
    presetScrollbar(),
  ],
  include: [/.*\/anu-vue\.js(.*)?$/, "./**/*.vue"],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: {
    "scrollbar-c":
      "scrollbar scrollbar-w-2" +
      " dark:scrollbar-thumb-color-gray-500 dark:scrollbar-track-color-gray-700",
  },
});
