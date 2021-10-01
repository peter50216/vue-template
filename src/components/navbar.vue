<template>
  <div class="flex flex-row px-4 pb-2">
    <router-link
      to="/"
      class="text-2xl font-bold"
    >
      TODO
    </router-link>
    <div class="flex-1 text-center text-2xl">
      {{ props.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title?: string }>();
</script>
