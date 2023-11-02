import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

const useCartStore = defineStore('cart', {
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
