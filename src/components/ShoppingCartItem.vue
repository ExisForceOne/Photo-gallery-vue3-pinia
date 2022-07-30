<template>
  <div class="card-item flex-row">
    <div class="flex-row">
      <img :src="`https://picsum.photos/250?random=${item.product.id}`" alt="Photo of product" />
      <p>{{ item.product.name }}</p>
    </div>
    <div>
      <p>{{ item.product.price }}$</p>
    </div>
    <div class="flex-row">
      <label for="quantity">Quanity:</label>
      <input @keydown.prevent v-model="item.quantity" type="number" min="1" max="20" />
      <button @click="store.removeItemFromCart(item)" class="remove-btn">Remove</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShoppingCartStore } from "@/stores/shoppingCart";
import type { CartItem } from "@/interfaces/interfaces";
const store = useShoppingCartStore();
const props = defineProps<{
  item: CartItem;
}>();
</script>

<style scoped>
.flex-row {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
}

.card-item {
  justify-content: space-between;
  gap: 15px;
  border-bottom: 1px solid white;
  padding: 15px 0px;
}

img {
  width: 50px;
}
input {
  width: 35px;
}

.remove-btn {
  padding: 5px 10px;
  background-color: #801e27;
}
</style>
