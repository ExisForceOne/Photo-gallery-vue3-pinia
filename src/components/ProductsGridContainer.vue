<template>
  <div class="grid">
    <ProductCard v-for="item in store.filteredProducts" :key="item.id" :product="item" />
  </div>
</template>

<script setup lang="ts">
import ProductCard from "./ProductCart.vue";
import { useDashboardStore } from "@/stores/dashboard";
const store = useDashboardStore();
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  grid-gap: 25px;
  padding: 25px 25px;
}
</style>
