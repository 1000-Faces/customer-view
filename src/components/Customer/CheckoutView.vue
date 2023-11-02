<template>
	<div>
	<NavBar></NavBar>
	<div class="px-8">
        <h4 class="bg-white w-full h-20 rounded-lg shadow-sm pt-6 pl-8 flex font-medium text-xl text-green mt-24">
          Confirm the Order
        </h4>
      </div>
	  <div>
		<div
    :class="['bg-white', 'rounded-lg', 'shadow-sm', 'm-8', 'pb-2', 'w-128', 'h-64']"
  >
    <div class="flex flex-col justify-start mx-4">
      <div class="flex flex-row justify-between">
        <h3 class="text-l font-semibold py-8 px-4">Payment Details</h3>
        <!-- <p class="text-gray-500">{{ totalPrice }}</p> -->
      </div>
    </div>
    <div class="flex flex-col justify-between px-8">
      <h5 class="text-green text-sm py-1">Subtotal: {{ totalPrice }}</h5>
      <h5 class="text-green text-sm">Tax & service charge: {{ taxAndServiceCharge }}</h5>
	  <h5 class="text-black text-sm py-1">Net total: {{ netTotal }}</h5>
      <div class="mt-4 justify-evenly p-8 px-16">
        <BaseActionBtn 
          initialText="Proceed to Checkout"
          :class="{ 'clicked-class': isClicked }"
          initialClass="bg-green hover:bg-green-600 text-white text-xs font-semibold py-2 px-4 rounded"
          @click="isClicked = !isClicked">
        </BaseActionBtn>
      </div>
    </div>
  </div>
      </div>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20">  
	  <div class="mt-5">
  
			<div>
			  <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green">
				Place order
			  </button>
			</div>
		  
	  </div>
	</div>
</div>
  </template>
  
  <script lang="ts">
	import NavBar from '../utils/navBar-user.vue';
	import TotalCard from '../utils/total-card.vue';

  	export default {
	data() {
	  return {
		name: '',
		// other form fields...
	  }
	},
	methods: {
	  submit() {
		// Submit the form
	  }
	},
	components: {
		NavBar,
		TotalCard
	},
	computed: {
		taxAndServiceCharge() {
			return this.totalPrice * 0.1;
		},
		netTotal() {
			return this.totalPrice + this.taxAndServiceCharge;
		},
	}
  }
  </script>
  