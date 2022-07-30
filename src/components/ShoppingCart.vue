<template>
  <div v-if="store.shoppingCartIsOpen" class="shopping-cart">
    <h3>CART</h3>
    <button @click="store.shoppingCartIsOpen = false" class="close-btn">X</button>
    <div v-if="!store.shoppingCartIsEmpty">
      <ShoppingCartItem v-for="item in store.shoppingCart" :key="item.product.id" :item="item" />
      <div class="summary">
        <button class="checkout-btn">Checkout</button>
        <p>Total: {{ store.totalPrice }}$</p>
      </div>
    </div>
    <div class="cart-empty" v-else>Shopping cart is empty</div>
  </div>
</template>

<script setup lang="ts">
import ShoppingCartItem from "./ShoppingCartItem.vue";
import { useShoppingCartStore } from "@/stores/shoppingCart";
const store = useShoppingCartStore();
</script>

<style scoped>
.shopping-cart {
  position: fixed;
  /* min-width: 350px; */
  right: 20px;
  padding: 20px;
  border: 2px #ccc solid;
  background-color: var(--vt-c-black-mute);
  z-index: 99;
}

.close-btn {
  position: absolute;
  display: flex;
  top: 20px;
  right: 15px;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  background-color: #801e27;
  border-radius: 50%;
  z-index: 99;
}

.summary {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.cart-empty {
  padding: 25px 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
}
.checkout-btn {
  padding: 5px 10px;
  background-color: #135296;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
