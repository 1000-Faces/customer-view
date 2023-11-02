import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as Array<{ id: number, title: string, count: number }>,
  }),
  actions: {
    addToCart(food: { id: number, title: string, count: number }) {
      let found = this.cartItems.find(item => item.id === food.id);
      if (found) {
        found.count += food.count;
      } else {
        this.cartItems.push(food);
      }
    },
  },
});

