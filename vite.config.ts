import Vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { UserConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";

const config: UserConfig = {
  alias: {
    "/~/": `${path.resolve(__dirname, "src")}/`,
  },
  plugins: [
    Vue({
      ssr: !!process.env.SSG,
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "@vueuse/head", "@vueuse/core"],
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      directoryAsNamespace: true,
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          componentPrefix: "",
        }),
      ],
    }),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    WindiCSS(),
  ],
  server: {
    fs: {
      strict: true,
    },
  },
};

export default config;
