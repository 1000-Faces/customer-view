<script setup lang="ts">
const { image } = defineProps<{
  image: string
}>()
</script>

<template>
    <img :src="image" alt="background" class="w-full h-auto">
</template>

<style>
/* Responsive styles */
@media (max-width: 640px) {
  .relative img {
    max-width: 100%;
    height: auto;
  }

  /* Adjust box layout */
   .md:flex {
    justify-content: flex-start;
  } 

  .mt-8 {
    margin-top: 4rem; 
  }
} 
</style>