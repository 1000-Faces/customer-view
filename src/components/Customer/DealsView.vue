<template>
    <div>
      <NavBar></NavBar>    
      <pg-title class="py-24 flex justify-center text-xl text-green">
        See the offers available for you!
      </pg-title>
      <div class="offers flex flex-col items-center space-y-4">
        <!-- First offer image -->
        <img src="../../assets/ad-1.png" alt="Offer 1" class="w-1/2 h-72 object-cover rounded-lg">
        <!-- Second offer image -->
        <img src="../../assets/ad-2.png" alt="Offer 2" class="w-1/2 h-72 object-cover rounded-lg">
      </div>
      <container class="container flex flex-row flex-wrap p-2 xs:p-0 justify-center">
        <span class="py-10"></span>
      </container>
    </div>
</template>
  

<script lang="ts">
    import NavBar from '../utils/navBar-user.vue';
    export default {
        name: 'MenuView',
        components: {
            NavBar
        }
    }
</script>
  