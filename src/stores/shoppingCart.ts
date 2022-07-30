import { defineStore } from "pinia";
import type { ShoppingCartRootState } from "./types";
import type { CartItem, Product } from "@/interfaces/interfaces";

export const useShoppingCartStore = defineStore({
  id: "shoppingCart",
  state: (): ShoppingCartRootState => ({
    shoppingCartIsOpen: false,
    shoppingCart: [],
  }),
  getters: {
    shoppingCartIsEmpty(): boolean {
      return this.shoppingCart.length === 0;
    },
    totalPrice(): number {
      return this.shoppingCart.reduce((sum, item) => {
        return sum + item.product.price * item.quantity;
      }, 0);
    },
  },
  actions: {
    addItemToCart(product: Product): void {
      const selectedItemID = this.shoppingCart.findIndex((item) => item.product.id === product.id);

      if (selectedItemID >= 0) {
        this.shoppingCart[selectedItemID].quantity++;
      } else {
        this.shoppingCart.push({
          product: product,
          quantity: 1,
        });
      }
    },
    removeItemFromCart(product: CartItem): void {
      this.shoppingCart = this.shoppingCart.filter((item) => item !== product);
    },
  },
});
