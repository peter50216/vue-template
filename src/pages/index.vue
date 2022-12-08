<template>
  <v-sheet
    class="m-2 p-2"
    rounded
  >
    <v-container>
      <v-row justify="center">
        <v-icon
          :icon="mdiRabbitVariant"
          class="mr-2"
        />
        Hello to Vue 3 + UnoCSS + Vuetify!
      </v-row>
      <SimpleCounter />
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { mdiRabbitVariant } from "@mdi/js";

import { useNavbarStore } from "/~/store/navbar";

const store = useNavbarStore();

onMounted(() => {
  store.title = "Index";
});
</script>
