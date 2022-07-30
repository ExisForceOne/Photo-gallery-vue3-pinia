<template>
  <div class="card">
    <p class="name">{{ product.name }}</p>
    <img :src="`https://picsum.photos/250?random=${product.id}`" alt="Photo of item" />
    <p>
      Author: <span class="author">{{ formatedAuthor }}</span>
    </p>
    <div class="flex-row">
      <button @click="store.addItemToCart(product)" class="add-to-cart-btn">Add to cart</button>
      <p class="price">{{ product.price }}$</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import type { Product } from "../interfaces/interfaces";
import { useShoppingCartStore } from "@/stores/shoppingCart";

const store = useShoppingCartStore();

const props = defineProps<{
  product: Product;
}>();

const formatedAuthor = computed<string>(() => {
  return props.product.author.replace("_", " ");
});
</script>

<style scoped>
p,
.flex-row {
  padding: 0 8px;
}

img {
  margin-bottom: 10px;
}
.card {
  padding: 8px 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  border: 3px var(--vt-c-divider-dark-2) solid;
  background-color: var(--vt-c-black-mute);
}

.name {
  font-size: 1.4em;
}
.author {
  text-transform: capitalize;
}
.flex-row {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.15em;
}

.add-to-cart-btn {
  padding: 5px 10px;
  background-color: #175c26;
}
</style>
