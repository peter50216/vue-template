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
    <SimpleCounter />
  </div>
</template>

<script setup lang="ts">
import { useNavbarStore } from "/~/store/navbar";

const store = useNavbarStore();

onMounted(() => {
  store.title = "Index";
});
</script>
