<template>
  <div
    flex="~"
    items="center"
  >
    <button
      mr="2"
      @click="cnt++"
    >
      <div
        i="akar-icons-circle-plus"
        class="block"
      />
    </button>
    Here's a counter: {{ cnt }}
  </div>
</template>

<script setup lang="ts">
let cnt = $ref(0);
</script>
