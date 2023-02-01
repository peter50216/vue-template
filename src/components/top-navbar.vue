<template>
  <header
    bg="primary"
    text="white xl"
    flex="~ row"
    items="center"
    position="sticky"
    top="0"
    z="100"
    p="2"
  >
    <router-link to="/">
      <div
        i="mdi-home"
        m="2"
      />
    </router-link>
    <div
      flex="1"
      m="x-4"
    >
      {{ store.title }}
    </div>
  </header>
</template>

<script setup lang="ts">
import { useNavStore } from "/~/store/nav";

const store = useNavStore();
</script>
