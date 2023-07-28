<script setup lang="ts">
// Import statements and other setup code go here
</script>

<template>
  <div class="about-container">
    <div class="about-text">
      <p>Welcome to Dine Ease, where we believe that dining is not just about satisfying your hunger, but about creating lasting memories. Our story began with a simple vision: to provide a culinary experience that celebrates the flavors, traditions, and artistry of fine dining. With a team of passionate chefs, dedicated staff, and a commitment to using the freshest and highest quality ingredients, we have created a haven for food enthusiasts. Our menu showcases a harmonious blend of contemporary and classic dishes, thoughtfully crafted to tantalize your taste buds. We invite you to join us on this gastronomic journey, where every bite tells a story and every moment is savored. Step into our world of culinary 
        delights and let us create an unforgettable dining experience for you..</p>
    </div>
    <div class="about-onion">
      <img src="../assets/images/onion&chille.png" alt="about_onion">
    </div>
  </div>
</template>

<style scoped>
  .about-container {
    display: flex;
    flex-direction: column; /* Stack children vertically */
    align-items: flex-end; /* Align children to the right */
    gap: 20px; /* Adjust the gap between the image and text */
  }

  .about-onion img {
    max-width: 100%;
  }
</style>
