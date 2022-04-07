<template>
  <div 
    w="full"
    h="full"
    flex="~ col"
    text="white xl"
    p="2"
  >
    <Navbar :title="title" />
    <router-view @set-title="setTitle" />
  </div>
</template>

<script setup lang="ts">
let title = $ref("");
const setTitle = (s: string) => (title = s);
</script>
