import Vue from "@vitejs/plugin-vue";
import path from "path";
import { UserConfig } from "vite";
import ViteComponents from "vite-plugin-components";
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons";
import WindiCSS from "vite-plugin-windicss";

const config: UserConfig = {
  alias: {
    "/~/": `${path.resolve(__dirname, "src")}/`,
  },
  plugins: [
    Vue({
      ssr: !!process.env.SSG,
    }),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      directoryAsNamespace: true,
      globalComponentsDeclaration: true,
      // auto import icons
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver(),
      ],
    }),

    // https://github.com/antfu/vite-plugin-icons
    ViteIcons(),

    WindiCSS(),
  ],
  server: {
    fs: {
      strict: true,
    },
  },
};

export default config;
