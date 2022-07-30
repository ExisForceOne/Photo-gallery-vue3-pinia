type Authors = "jack_sparrow" | "james_bond" | "job_blant" | "robert_deniro";

export interface Product {
  id: number;
  name: string;
  price: number;
  author: Authors;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
