import type { Product, CartItem } from "@/interfaces/interfaces";

export interface DashboardRootState {
  selectedAuthor: string;
  products: Array<Product>;
}

export interface ShoppingCartRootState {
  shoppingCart: Array<CartItem>;
  shoppingCartIsOpen: boolean;
}
