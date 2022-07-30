import { defineStore } from "pinia";
import type { DashboardRootState } from "./types";
import type { Product } from "@/interfaces/interfaces";

import { getRandomPrice } from "@/helpers/getRandomPrice";

export const useDashboardStore = defineStore({
  id: "dashboard",
  state: (): DashboardRootState => ({
    selectedAuthor: "",
    products: [
      {
        id: Math.random(),
        name: "Jack-1",
        price: getRandomPrice(),
        author: "jack_sparrow",
      },
      {
        id: Math.random(),
        name: "Jack-2",
        price: getRandomPrice(),
        author: "jack_sparrow",
      },
      {
        id: Math.random(),
        name: "Jack-3",
        price: getRandomPrice(),
        author: "jack_sparrow",
      },
      {
        id: Math.random(),
        name: "Bond-1",
        price: getRandomPrice(),
        author: "james_bond",
      },
      {
        id: Math.random(),
        name: "Bond-2",
        price: getRandomPrice(),
        author: "james_bond",
      },
      {
        id: Math.random(),
        name: "Bond-3",
        price: getRandomPrice(),
        author: "james_bond",
      },
      {
        id: Math.random(),
        name: "Job-1",
        price: getRandomPrice(),
        author: "job_blant",
      },
      {
        id: Math.random(),
        name: "Job-2",
        price: getRandomPrice(),
        author: "job_blant",
      },
      {
        id: Math.random(),
        name: "Job-3",
        price: getRandomPrice(),
        author: "job_blant",
      },
      {
        id: Math.random(),
        name: "Robert-1",
        price: getRandomPrice(),
        author: "robert_deniro",
      },
      {
        id: Math.random(),
        name: "Robert-2",
        price: getRandomPrice(),
        author: "robert_deniro",
      },
      {
        id: Math.random(),
        name: "Robert-3",
        price: getRandomPrice(),
        author: "robert_deniro",
      },
    ],
  }),
  actions: {},
  getters: {
    filteredProducts(): Array<Product> {
      return this.products.filter((item: Product) => item.author.includes(this.selectedAuthor));
    },
  },
});
