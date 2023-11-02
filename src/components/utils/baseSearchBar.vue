<template>
  <form>
    <div class="flex p-6 z-50 w-full">
      <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only">Your Email</label>
      <button id="dropdown-button" @click="toggleDropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">
        All categories
        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div id="dropdown" :class="{ 'hidden': !dropdownVisible }" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
        <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
          <li v-for="item in items" :key="item">
            <button @click="selectItem(item)" type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">{{ item }}</button>
          </li>
        </ul>
      </div>
      <div class="relative w-full">
        <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-green-500 focus:border-green" placeholder="Search your favorite food item..." required>
        <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-green rounded-r-lg border border-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green-200">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
export default {
  props: {
    items: {
      type: Array as () => string[],
      required: true
    }
  },
  data() {
    return {
      dropdownVisible: false
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    selectItem(item) {
      this.$emit('select', item);
    }
  }
}
</script>
