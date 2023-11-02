<template>
  <div
    :class="['bg-white', 'rounded-lg', 'shadow-sm', isClicked ? 'shadow-2xl' : 'hover:shadow-md', 'm-2', 'pb-2', 'lg:w-60', 'xs:w-48', 'lg:h-60', 'xs:h-48']"
  >
    <div class="flex flex-col">
      <div class="lg:w-56 lg:h-32 xs:w-42 xs:h-24 overflow-hidden rounded-md m-2">
        <div class="relative">
          <img :src="image" alt="Food" class="w-full h-full object-cover">
          <div class="absolute top-2 left-0 bg-white text-sm font-bold shadow-lg rounded-tr-lg rounded-br-lg backdrop-blur-md bg-opacity-80 text-green px-2 py-1">{{ type }}</div>
        </div>
      </div>

      <div class="flex flex-col justify-start mx-4">
        <div class="flex flex-row justify-between">
          <h3 class="text-xl font-semibold lg:text-lg xs:text-base">{{ title }}</h3>
          <p class="text-gray-500 lg:text-lg xs:text-base">{{ price }}</p>
        </div>
        <!-- <h3 class="lg:text-sm xs:text-xs border font-light border-green rounded-md px-2 align-center w-20 flex justify-center">{{ type }}</h3> -->
      </div>
    </div>
    <div class="flex justify-between mt-4 px-4">
      <h5 class="text-green text-sm">{{ count }} on my plate</h5>
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
    <div class="mt-4">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
//import eventBus from '../../eventBus';
import BaseActionBtn from './baseActionBtn.vue';
import axios from 'axios';
import { defineComponent, ref } from 'vue';
const token = localStorage.getItem('token');

export default defineComponent({
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
    userId: {
      type: String,
      required: true,
    },
    foodId: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  components: {
    BaseActionBtn,
  },
  setup(props) {
    const count = ref(0);

    const incrementCount = () => {
      count.value++;
      const orderDetails = {
        userId: token,
        foodId: props.foodId,
        count: count.value,
        title: props.title,
        type: props.type,
        price: props.price,
        image: props.image,
      };

      axios.post('http://localhost:3000/itemCount', orderDetails)
      .then((response) => {
        // Handle the response if needed
        // window.alert('One item added to the table.');
      })
      .catch((error) => {
        // Handle the error if needed
        window.alert(error);
      });


      // Emit the updated count to the parent component
      //eventBus.$emit('update-count', this.count);
    };

    const decrementCount = () => {
      if (count.value > 0) {
        count.value--;
        const orderDetails = {
          userId: props.userId,
          foodId: props.foodId,
          count: count.value,
        };

        axios.put('http://localhost:3000/itemCount', orderDetails, {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        })
          .then((response) => {
            // Handle the response if needed
            // window.alert('One item removed from the table.');
          })
          .catch((error) => {
            // Handle the error if needed
            // window.alert(error);
          });

        // Emit the updated count to the parent component
        emit('update-count', count.value);
      }
    };

    return {
      count,
      incrementCount,
      decrementCount,
    };
  },
});
</script>


<style>
/* Add any custom styles here */
</style>
