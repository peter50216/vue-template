<template>
  <span class="w-full h-full flex flex-col items-center justify-center font-bold text-white text-2xl">
    <div class="flex items-center">
      <noto-v1-rabbit-face class="mr-2" />
      Hello to Vue 3 + WindiCSS!
    </div>
    <div class="flex items-center">
      <button
        class="mr-2"
        @click="inc"
      >
        <akar-icons-circle-plus class="block" />
      </button>
      Here's a counter: {{ cnt }}
    </div>
  </span>
</template>

<script setup lang="ts">
const cnt = ref(0);
const inc = () => {
  cnt.value++;
};
</script>
