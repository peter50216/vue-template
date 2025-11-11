import { presetDaisy } from "@ameinhardt/unocss-preset-daisy";
import {} from "@unocss/core";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetMini from "@unocss/preset-mini";
import presetWind3 from "@unocss/preset-wind3";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  presets: [
    presetMini(),
    presetWind3(),
    presetIcons({
      scale: 1.2,
    }),

    presetDaisy({ themes: ["light", "dark"] }),

    presetAttributify(),
    presetScrollbar(),
  ],
  content: {
    pipeline: {
      include: ["./**/*.vue"],
    },
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: {
    "scrollbar-c":
      "scrollbar scrollbar-w-2" +
      " dark:scrollbar-thumb-color-gray-500 dark:scrollbar-track-color-gray-700",
  },
});
