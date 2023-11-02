<template>
    <div class="bg-gray-200 p-3 mx-1 mb-3 rounded-lg overflow-hidden">
      <div class="flex flex-col sm:flex-row items-center">
        <img :src="imageSrc" alt="" class="h-24 w-24 sm:mr-4 mb-2 sm:mb-0 object-cover">
        <div class="flex-grow sm:mr-4">
          <p class="text-sm font-semibold">{{ itemName }}</p>
          <p class="text-sm">{{ price }}</p>
        </div>
      </div>
      <div class="flex justify-between items-center mt-2 sm:mt-0">
        <button class="rounded-full text-black bg-[#F8DE22] px-2 py-1 font-semibold hover:bg-black hover:text-[#F8DE22] focus:outline-none">
          {{ type }}
        </button>
        <button class="bg-[#007400] hover:bg-gray-500 text-white py-2 px-4 rounded-lg mt-2 sm:mt-0">
          Select the meal
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      imageSrc: String,
      itemName: String,
      price: String,
      type: String
    }
  };
  </script>
  
  <style scoped>
  /* Your base styles here */
  
  /* Responsive adjustments */
  @media (max-width: 640px) { /* Adjust the breakpoint as needed */
    .flex-col-sm {
      flex-direction: column;
    }
  }
  </style>
  
      
      <style scoped>
      /* Your styles here */
      </style>
      