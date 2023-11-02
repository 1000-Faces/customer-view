<script setup lang="ts">
const { food_image,type,price,dish_name,description } = defineProps<{
  food_image: string,
  type: string,
  price: string,
  dish_name: string,
  description:string
}>();
</script>

<template>
    <!-- Card -->
    <div class="bg-gray-100 shadow-md rounded-lg w-20 h-80 overflow-hidden transform hover:scale-105 transition-transform text-black m-4">
      <div class="relative">
        <div class="w-full h-40 md:h-40 flex items-center justify-center overflow-hidden">
          <img :src="food_image" alt="Dish" class="w-auto h-full object-cover">
        </div>
        <div
          :class="['absolute', 'top-0', 'left-0', 'm-2', {'bg-green': type === 'veg', 'bg-red': type === 'Non veg'}, 'text-white', 'px-2', 'py-1', 'text-xs', 'font-semibold']"
        >
          {{ type }}
        </div>
        <div class="absolute top-0 right-0 m-2 bg-white text-green-600 px-2 py-1 text-xs font-semibold">
          {{ price }}
        </div>
      </div>
      <div class="p-4 flex flex-col flex-grow justify-center text-center">
        <h2 class="text-lg md:text-xl font-semibold">{{ dish_name }}</h2>
        <p class="text-gray-600 mt-2">{{ description }}</p>
      </div>
    </div>
  </template>
  