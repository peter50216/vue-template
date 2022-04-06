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
      {{ props.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title?: string }>();
</script>
