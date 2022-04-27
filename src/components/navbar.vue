<template>
  <div 
    flex="~ row"
    p="x-4 b-2"
  >
    <router-link
      to="/"
      class="text-2xl font-bold"
    >
      TODO
    </router-link>
    <div
      flex="1"
      text="2xl center"
    >
      {{ store.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavbarStore } from "/~/store/navbar";

const store = useNavbarStore();
</script>
