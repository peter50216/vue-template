import "@unocss/reset/tailwind.css";
import "@kidonng/daisyui/base/index.css";
import "@kidonng/daisyui/components/index.css";
import "@kidonng/daisyui/utilities/index.css";
import "uno.css";
import "./main.css";

import { createPinia } from "pinia";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { registerSW } from "virtual:pwa-register";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import { useNavStore } from "/~/store/nav";

import App from "./App.vue";

const routes = setupLayouts(generatedRoutes);

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const navStore = useNavStore();
  navStore.title = "";
});

app.use(createPinia());
app.use(router);

app.mount("#app", true);

registerSW({});
