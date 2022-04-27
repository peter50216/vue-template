import { defineStore } from "pinia";

export const useNavbarStore = defineStore("layout", {
  state: () => ({
    title: "",
  }),
});
