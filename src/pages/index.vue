<template>
  <div
    flex="~ 1 col"
    items="center"
    justify="center"
    p="4"
  >
    <div
      flex="~"
      items="center"
    >
      <div
        i="noto-v1-rabbit-face"
        mr="2"
      />
      Hello to Vue 3 + WindiCSS!
    </div>
    <div
      flex="~"
      items="center"
    >
      <button
        mr="2"
        @click="inc"
      >
        <div
          i="akar-icons-circle-plus"
          class="block"
        />
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
