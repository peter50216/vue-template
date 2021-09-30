import "virtual:windi.css";
import "./main.css";

import { registerSW } from "virtual:pwa-register";
import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);

app.mount("#app", true);

registerSW({});
