<style>
@import '../../assets/main.css';
</style>

<template>
    <div class="container items-center mx-auto bg-green-500 pt-12 pb-12 flex justify-center">
    <div
      class="container xl:w-3/4 lg:w-full md:w-full sm:w-full m-0 max-h-max bg-white content-center py-8 xl:px-8 lg:px-8 md:px-8 sm:px-8 p-8 rounded-3xl flex flex-col md:flex-row gap-10 justify-center"
    >
      <div class="sign-up-left w-full md:w-2/3 flex flex-col items-center">
        <div class="logo pr-48 md:pr-0 w-20 h-auto shrink:0">
          <img class="xl:w-32 h-auto md:w-20" src="../assets/dine ease logo color.png" alt=""  shrink:0/>
        </div>
        <div class="sign-up-form w-full md:w-2/3">
          <h1 class="font-sans text-2xl text-gray-600 text-center font-semibold pb-4">Add a food item</h1>
    <form @submit.prevent="onSubmit">
      <BaseInput 
        v-model="food.foodName" 
        label="Food Name" 
        labelFor="name" 
        type="text" 
        required 
        />
      <BaseSelect 
        v-model="food.category" 
        label="Category" 
        labelFor="category" 
        :options="categories" 
        required 
        />
      <!-- <BaseInput 
        v-model="food.description" 
        label="Description" 
        labelFor="description" 
        type="text" 
        required 
        /> -->
      <BaseImageInput 
        v-model="food.foodImg" 
        label="Image" 
        labelFor="image" 
        required 
        />
      <BaseInput 
        v-model="food.price" 
        label="Price" 
        labelFor="price" 
        type="number" 
        required 
        />
        <div class="flex justify-evenly mt-4">
          <div class="flex justify-center items-center">
            <BaseActionBtn 
                @click="redirectToManagerHome"
                initialText="Back to menu"
                clickedText="Food item adding"
                initialClass="bg-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                clickedClass="bg-white hover:bg-white-600 text-green font-semibold py-2 px-4 rounded border-2 border-green"
              >
            </BaseActionBtn>
          </div>
          <div class="flex justify-center items-center">
            <BaseActionBtn 
                initialText="Add to menu"
                clickedText="Food item adding"
                initialClass="bg-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                clickedClass="bg-white hover:bg-white-600 text-green font-semibold py-2 px-4 rounded border-2 border-green"
              >
            </BaseActionBtn>

          </div>
          <div class="flex justify-center items-center">
            <BaseActionBtn 
                initialText="Cancel"
                clickedText="Ridirecting to the menu"
                initialClass="bg-red hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                clickedClass="bg-white hover:bg-white-600 text-red font-semibold py-2 px-4 rounded border-2 border-red"
              >
            </BaseActionBtn>
          </div>
                  
        </div>
          
          
          <!-- <BaseActionBtn type="submit" style="width: 100%" :loading="loading" @click="cancel()">
          {{ loading ? "Cancel" : "Cancel" }}
          </BaseActionBtn> -->
      
    </form>
</div>
        </div>
      </div>
    </div>
 
  </template>


<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Import your input components
import BaseInput from '../utils/baseInput.vue';
import BaseSelect from '../utils/baseSelect.vue';
import BaseImageInput from '../utils/baseImageInput.vue';
import BaseActionBtn from '../utils/baseActionBtn.vue';
import axios from 'axios';

const foodItems = ref([]);

const addFood = (newFoodItem) => {
  foodItems.value.push(newFoodItem);
}

const food = ref({
  foodName: '',
  category: '',
  description: '',
  imageFile	: '',
  price: 0,
});

const categories: string[] = ['Mains', 'Starters', 'Desserts', 'Side dishes', 'Bakery'];

const loading = ref(false);

const router = useRouter();
const redirectToMenu = () => {
  router.push('/customer/MenuView');
};
const onSubmit = async () => {
  try {
    loading.value = true;

    // // Prepare FormData for image
    // let imageFormData = new FormData();
    // imageFormData.append('image', food.value.image);

    // // POST request to upload image
    // const imageResponse = await axios.post('http://localhost:3000/upload-image', imageFormData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });

    // // Update image path with the path returned from server
    // food.value.image = imageResponse.data.path;

    // POST request to add food item
    const response = await axios.post('http://localhost:3000/menu', food.value);

    console.log('Food item added successfully:', response.data);

    router.push('/customer/menuview');
  } catch (error) {
    console.error('Error adding food item:', error);
  } finally {
    loading.value = false;
  }
};

const redirectToManagerHome = () => {
  router.push('/managerhome');
};

const cancel = () => {
  router.push('/menu-staff');
};
</script>

<style>
/* Your styles here */
</style>
