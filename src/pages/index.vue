<template>
  <div class="flex-1 flex flex-col items-center justify-center p-4">
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
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (ev: "setTitle", title: string): void }>();
emit("setTitle", "Index");
const cnt = ref(0);
const inc = () => {
  cnt.value++;
};
</script>
