<template>
  <v-row
    justify="center"
    items="center"
  >
    <v-btn
      variant="text"
      :icon="mdiPlusCircleOutline"
      @click="cnt++"
    />
    Here's a counter: {{ cnt }}
  </v-row>
</template>

<script setup lang="ts">
import { mdiPlusCircleOutline } from "@mdi/js";

let cnt = $ref(0);
</script>
