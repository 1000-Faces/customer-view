<template>
  <div>
    <NavBar></NavBar>
    <div class="pt-16">
    <SearchBar
      :items="pageItems"
      @select="selectedFilter = $event"
      class="m-4"
    ></SearchBar>
    <pg-title class="py-4 flex justify-center text-xl text-green">
      Choose your favorites to have!
    </pg-title>
    
      <container class="container flex flex-row flex-wrap p-2 xs:p-0 justify-center">
        <div class="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2">

          <FoodCard
            v-for="food in computedFilteredFoods"
            :key="food.id"
            :title="food.title"
            :type="food.name"
            :price="food.price"
            :image="food.image"
            :count="count" @update-count="handleUpdatedCount"
          />

        </div>
      </container>
    </div>
  </div>
</template>



<script lang="ts">
import FoodCard from '../utils/food-card.vue';
import SearchBar from '../utils/baseSearchBar.vue';
import NavBar from '../utils/navBar-user.vue';
import { computed, ref } from 'vue';
import axios from 'axios';

export default {
  name: 'MenuView',
  components: {
    FoodCard,
    SearchBar,
    NavBar
  },
  data() {
    return {
      foods: [],
      filter: '',
      selectedFilter: '', // Initially no filter selected
      searchQuery: '',
      pageItems: ['All Categories', 'Main Dishes', 'Desserts', 'Beverages', 'Alchohol'],
      mainDishes: ['Pizza', 'Burger', 'Pasta', 'Sushi'],
      desserts: ['Curry', 'Steak', 'Salad', 'Sandwich'],
      userId: '123', 
      foodId: '456',
    };
  },
  computed: {
    computedFilteredFoods() {
      if (this.selectedFilter === 'Main Dishes') {
        return this.foods.filter(food => this.mainDishes.includes(food.title));
      } else if (this.selectedFilter === 'Desserts') {
        return this.foods.filter(food => this.desserts.includes(food.title));
      }
      return this.foods;
    }
  },
  methods: {
    applyFilter() {
      if (this.selectedFilter === 'Main Dishes') {
        // If "Main Dishes" filter selected, show only specific foods
        this.filter = 'Pizza, Burger, Pasta, Sushi';
      } else if (this.selectedFilter === 'Desserts') {
        // If "Main Dishes" filter selected, show only specific foods
        this.filter = 'Curry, Steak, Salad, Sandwich';
      } else {
        // If no filter selected, show all foods
        this.filter = '';
      }
    },
    applySearch() {
      // Triggered when the search input value changes
      // Update the searchQuery property and recompute the filtered foods
      this.searchQuery = this.searchQuery.trim();
    },
    fetchData() {
      axios
        .get('http://localhost:3000/menu')
        .then(response => {
          this.foods = response.data;
        })
        .catch(error => {
          console.error(error);
        });
      },
      
      handleUpdatedCount(newCount: number) {
      this.count = newCount;
   
  },
    },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    this.filter = urlParams.get('filter') || '';
    this.fetchData();
  }
}
</script>
