<template>
  <div
    flex="~ row"
    items="center"
  >
    <button
      class="btn btn-ghost btn-circle"
      text="xl"
      @click="cnt++"
    >
      <span i="mdi-plus-circle" />
    </button>
    <span>Here's a counter: {{ cnt }}</span>
  </div>
</template>

<script setup lang="ts">
const cnt = ref(0);
</script>
