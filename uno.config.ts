import presetMini from "@unocss/preset-mini";
import presetUno from "@unocss/preset-uno";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [presetMini(), presetUno()],
  content: {
    pipeline: {
      include: ["./**/*.vue"],
    },
  },
  transformers: [transformerVariantGroup()],
});
