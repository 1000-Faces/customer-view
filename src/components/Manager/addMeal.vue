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
          <h1 class="font-sans text-2xl text-gray-600 text-center font-semibold pb-4">Add a Meal</h1>
    <form @submit.prevent="onSubmit">
      <BaseInput 
        v-model="meal.title" 
        label="Meal Name" 
        labelFor="name" 
        type="text" 
        required 
        />
      <BaseSelect 
        v-model="meal.name" 
        label="Category" 
        labelFor="category" 
        :options="categories" 
        required 
        />
      <BaseInput
        v-model="meal.description" 
        label="Description" 
        labelFor="description" 
        type="text" 
        required 
        /> 
      <BaseImageInput 
        v-model="meal.image" 
        label="Image" 
        labelFor="image" 
        required 
        />
      <BaseInput 
        v-model="meal.price" 
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
const redirectToManagerHome = () => {
  router.push('/managerhome');
};
const addMeal = (newMealItem) => {
  mealItems.value.push(newMealItem);
}

const meal = ref({
  title: '',
  name: '',
  description: '',
  image: '',
  price: 0,
});

const categories: string[] = ['Veg', 'Chicken', 'Beaf', 'Vegan', 'Evening Snack'];

const loading = ref(false);

const router = useRouter();

const onSubmit = async () => {
  try {
    loading.value = true;

    // Prepare FormData for image
    let imageFormData = new FormData();
    imageFormData.append('image', meal.value.image);

    // POST request to upload image
    const imageResponse = await axios.post('http://localhost:3000/upload-image', imageFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Update image path with the path returned from server
    meal.value.image = imageResponse.data.path;

    // POST request to add food item
    const response = await axios.post('http://localhost:3000/menu', meal.value);

    console.log('Meal added successfully:', response.data);

    router.push('/menu');
  } catch (error) {
    console.error('Error adding meal:', error);
  } finally {
    loading.value = false;
  }
};



const cancel = () => {
  router.push('/customer/menu');
};
</script>

<style>
/* Your styles here */
</style>
