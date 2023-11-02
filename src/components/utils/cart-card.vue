<template>
  <div>
    <h3></h3>
  </div>
  <div
    :class="['bg-white', 'rounded-lg', 'shadow-sm', isClicked ? 'shadow-2xl' : 'hover:shadow-md', 'm-2', 'pb-2', 'lg:w-200', 'xs:w-100', 'lg:h-30', 'xs:h-20', 'pr-4']"
  >
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-row">
        <div class="lg:w-150 lg:h-20 xs:w-110 xs:h-20 overflow-hidden rounded-md mx-3 grid grid-cols-4 gap-4">
          <div class="flex items-center relative">
            <img :src="image" alt="Food" class="lg:w-16 xs:w-14 lg:h-16 xs:h-14  object-cover rounded-md">
          </div>
          <div class="flex flex-col justify-center mx-4">
            <div class="flex flex-row justify-center align-middle">
              <h3 class="text-xl font-semibold lg:text-lg xs:text-base">{{ title }}</h3>
            </div>
          </div>
          <div class="flex flex-col justify-center px-4">
            <div class="flex flex-row justify-center">
              <div class="flex items-center">
                <button @click="decrementCount" class="px-2 py-1 bg-gray-200 rounded-l-md m-0.5 lg:text-sm xs:text-xs">
                  -
                </button>
                <div class="px-2 py-1 bg-green text-white rounded-md lg:text-sm xs:text-xs">
                  {{ count }}
                </div>
                <button @click="incrementCount" class="px-2 py-1 bg-gray-200 rounded-r-md m-0.5 lg:text-sm xs:text-xs">
                  +
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center px-4">
            <div class="flex flex-row justify-center align-middle">
              <p class="text-gray-500 lg:text-lg xs:text-base">{{ price * count }}</p>
            </div>
          </div>
          
        </div>
      </div>
      <div class="flex items-center ml-4 rounded-full border-2 border-black hover:border-green ">
        <button class="text-red-500 hover:text-red-700" @click="removeFromCart">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="mt-4">
      <slot></slot>
    </div>
  </div>
</template>



<script lang="ts">
import BaseActionBtn from './baseActionBtn.vue'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isClicked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
  incrementCount() {
    this.count++;

    // Only store order details in local storage if the count is more than 0
    if (this.count > 0) {
      this.$store.dispatch('addToCart', {
        id: this.id,
        title: this.title,
        count: this.count
      });

      const orderDetails = { foodId: this.id, count: this.count };
      localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

      this.$emit('update-count', this.count);

      alert(`One ${this.title} added to the table.`);
    }
  },

    removeFromCart() {
      // Implement the logic to remove the item from the cart
    },
  },
  components:{
    BaseActionBtn
  },
  data() {
    return {
      count: 1,
    };
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
