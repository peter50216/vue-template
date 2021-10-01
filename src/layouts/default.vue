<template>
  <div class="w-full h-full flex flex-col text-white p-2 text-xl">
    <Navbar :title="title" />
    <router-view @set-title="setTitle" />
  </div>
</template>

<script setup lang="ts">
const title = ref("");
const setTitle = (s: string) => (title.value = s);
</script>
