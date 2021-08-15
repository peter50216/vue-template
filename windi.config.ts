import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";

export default defineConfig({
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./index.html", "./src/**/*.vue", "./src/**/*.ts"],
  },
  plugins: [typography()],
  darkMode: "class",
});
