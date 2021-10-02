import Vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { UserConfig } from "vite";
import Pages from "vite-plugin-pages";
import { VitePWA } from "vite-plugin-pwa";
import Layouts from "vite-plugin-vue-layouts";
import WindiCSS from "vite-plugin-windicss";

const config: UserConfig = {
  resolve: {
    alias: {
      "/~/": `${path.resolve(__dirname, "src")}/`,
    },
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
      dts: true,
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
    Icons({ iconSource: "legacy" }),

    WindiCSS(),

    Pages(),

    Layouts(),

    VitePWA({
      registerType: "autoUpdate",
      srcDir: "src",
      filename: "sw.ts",
      strategies: "injectManifest",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "TODO",
        short_name: "TODO",
        description: "TODO",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  server: {
    fs: {
      strict: true,
    },
  },
};

export default config;
