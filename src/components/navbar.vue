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
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { title = "" } = defineProps<{ title?: string }>();
</script>
