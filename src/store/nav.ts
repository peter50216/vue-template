import { defineStore } from "pinia";

export const useNavStore = defineStore("layout", {
  state: () => ({
    title: "",
  }),
});
