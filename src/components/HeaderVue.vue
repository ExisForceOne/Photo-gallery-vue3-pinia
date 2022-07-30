<template>
  <header>
    <a href="/"><h1>Photo Gallery</h1></a>
    <ShoppingCartBtn />
  </header>
</template>

<script setup lang="ts">
import ShoppingCartBtn from "./ShoppingCartBtn.vue";
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 25px;
  border-bottom: 3px solid var(--vt-c-divider-dark-1);
}
</style>
