<template>
  <v-app-bar
    density="compact"
    color="primary"
    :elevation="2"
  >
    <template #prepend>
      <router-link to="/">
        <v-btn
          variant="text"
          :icon="mdiHome"
        />
      </router-link>
    </template>
    <v-app-bar-title>
      {{ store.title }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
import { mdiHome } from "@mdi/js";

import { useNavbarStore } from "/~/store/navbar";

const store = useNavbarStore();
</script>
