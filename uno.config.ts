import {} from "@unocss/core";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetMini from "@unocss/preset-mini";
import presetUno from "@unocss/preset-uno";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig } from "unocss";
import presetDaisy from "unocss-preset-daisy";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  presets: [
    presetMini(),
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),

    presetDaisy({ themes: ["light", "dark"] }),

    presetAttributify(),
    presetScrollbar(),
  ],
  include: ["./**/*.vue"],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: {
    "scrollbar-c":
      "scrollbar scrollbar-w-2" +
      " dark:scrollbar-thumb-color-gray-500 dark:scrollbar-track-color-gray-700",
  },
});
