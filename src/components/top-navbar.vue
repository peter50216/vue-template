<template>
  <header
    bg="primary"
    text="gray-50 xl"
    flex="~ row"
    items="center"
    position="sticky"
    top="0"
    z="100"
    p="2"
  >
    <RouterLink to="/">
      <div
        i="mdi-home"
        m="2"
      />
    </RouterLink>
    <div
      flex="1"
      m="x-4"
    >
      {{ store.title }}
    </div>
    <div
      cursor="pointer"
      i="mdi-theme-light-dark"
      m="2"
      @click="toggleDark()"
    />
  </header>
</template>

<script setup lang="ts">
import { useNavStore } from "/~/store/nav";

import { toggleDark } from "../dark";

const store = useNavStore();
</script>
