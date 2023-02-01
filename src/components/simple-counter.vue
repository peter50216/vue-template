<template>
  <div
    flex="~ row"
    items="center"
  >
    <a-btn
      icon-only
      icon="i-mdi-plus-circle"
      variant="text"
      @click="cnt++"
    />
    <span>
      Here's a counter: {{ cnt }}
    </span>
  </div>
</template>

<script setup lang="ts">
let cnt = $ref(0);
</script>
