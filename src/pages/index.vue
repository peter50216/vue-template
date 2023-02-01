<template>
  <div
    container="~"
    m="2"
    p="2"
    flex="~ col"
    items="center"
    text="lg"
    self="center"
  >
    <div
      flex="~ row"
      items="center"
    >
      <div
        i="mdi-rabbit-variant"
        m="r-2"
      />
      Hello to Vue 3 + UnoCSS + Vuetify!
    </div>
    <SimpleCounter />
  </div>
</template>

<script setup lang="ts">
import { useNavStore } from "/~/store/nav";

const store = useNavStore();

onMounted(() => {
  store.title = "Index";
});
</script>
