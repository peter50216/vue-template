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
import { useNavbarStore } from "/~/store/navbar";

const store = useNavbarStore();

onMounted(() => {
  store.title = "Index";
});

let cnt = $ref(0);
const inc = () => cnt++;
</script>
