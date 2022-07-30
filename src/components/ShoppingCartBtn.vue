<template>
  <div>
    <button @click="store.shoppingCartIsOpen = !store.shoppingCartIsOpen" class="shopping-cart-btn">
      Shopping Cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { useShoppingCartStore } from "@/stores/shoppingCart";
const store = useShoppingCartStore();
</script>

<style scoped>
.shopping-cart-btn {
  margin-left: auto;
  padding: 0 10px;
  border: 1px solid white;
  height: 100%;
}
</style>
