<template>
  <HeaderVue />
  <div class="container">
    <ShoppingCart />
    <SelectAuthor />
    <ProductsGridContainer />
  </div>
</template>

<script setup lang="ts">
import HeaderVue from "./components/HeaderVue.vue";
import SelectAuthor from "./components/SelectAuthor.vue";
import ProductsGridContainer from "./components/ProductsGridContainer.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

import { useDashboardStore } from "@/stores/dashboard";

const state = useDashboardStore();
</script>
<style scoped>
.container {
  margin: 25px auto;
  width: min(1300px, 90%);
}
</style>
