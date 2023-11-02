<script setup lang="ts">

import { defineComponent} from 'vue';
import navbar from '../components/utils/navBar-user.vue';
import axios from 'axios';
import box from './utils/landing_page_components/landing_page_box.vue';
import title_image from "./utils/landing_page_components/page_title_image.vue";
import page_footer from "./utils/landing_page_components/footer.vue";
import dish_card from "./utils/landing_page_components/foodcards.vue";
import title_2 from "./utils/landing_page_components/second_main_title.vue";
import reservation_button from "./Customer/ReservationInput.vue";

// Initialization for ES Users
import {
  Carousel,
  initTE,
} from "tw-elements";

initTE({ Carousel });
// Register all components
const components = {
  box,
  title_image,
  page_footer,
  reservation_button,
  navbar
};
    const token = localStorage.getItem('token');
    console.log('Token:', token);

initTE({ Carousel });



</script>

<template>

<navbar v-if=token></navbar>


  <div class="relative h-screen"> 
    <title_image image="src\assets\images\main-bg.jpg" class="w-full h-full object-cover"/>
    <div class="md:flex md:justify-center absolute top-72 left-12"> <!-- Add flex layout for centering on medium screens and larger -->
    <!-- <box /> -->
    <reservation_button/>
    </div>
  </div>

  <!-- <div class="flex flex-row justify-center">
    <a
    class="text-white bg-primary rounded-xl mt-4 py-3 px-8 transition duration-200 hover:text-neutral-800 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
        href="/customer/menuview"
        data-te-nav-link-ref
        >Let's Get Started!</a
    >
  </div> -->
  <!-- Using utilities: -->
<div class="bg-gray-100 py-8">
  <div class="container mx-auto">
    <title_2 title_2="Our popular meals"/>


  <div class="flex flex-wrap justify-center mt-8 gap-4">
  <dish_card class="w-48" food_image="https://th.bing.com/th/id/R.686eea5b785d964e9c6f5aa622ec8db6?rik=I2e8p9gFjfaHeg&riu=http%3a%2f%2frecipedose.com%2fwp-content%2fuploads%2f2013%2f03%2fChicken-momos.jpg&ehk=P8WqN4eTADZLNRHw%2f58ok2K00IOoMqab1qmn9DrSLIw%3d&risl=1&pid=ImgRaw&r=0" type="Non veg" price="LKR1850.00" dish_name="Chicken momo" description="Savory parcels, tender filling; an irresistible Asian delight." />
  <dish_card class="w-48" food_image="https://img.delicious.com.au/uCIIsWC_/del/2021/06/aglio-e-olio-spaghetti-154257-2.jpg" type="veg" price="LKR2999.00" dish_name="Spaghetti aglio e olio" description="Spaghetti tossed in garlic-infused olive oil, simplicity elevated."/>
  <dish_card class="w-48" food_image="https://www.italymagazine.com/sites/default/files/styles/800xauto/public/recipe/pizza-margherita-cottura_0.jpg?itok=2Jj0BXDI" type="veg" price="LKR5000.00" dish_name="Pizza margherita" description="Tomato, mozzarella, basil; wood-fired Italian essence embraced."/>
  <dish_card class="w-48" food_image="https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2009/11/ricetta-panna-cotta/panna%20cotta-1.jpg" type="veg" price="LKR1700.00" dish_name="Panna cotta" description="Velvety dessert masterpiece with luscious creamy elegance."/>
  <!-- <dish_card food_image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCCuXEGygYqTsGUhbQJszevL4-6frKxYWpA&usqp=CAU" type="Non veg" price="$15.99" dish_name="Tortellini" description="Elegant pasta pockets filled with rich, savory delights. Simply irresistible."/> -->
</div>

</div>
</div>

<title_2 title_2="Gallery"/>

  <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/images/jason-leung-poI7DelFiVA-unsplash (1).jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/images/OIP_edited.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg" />
      </div>
    </div>
  </div>
</div>


<div class="flex justify-center items-center text-black">
  <h1 class="title_home font-bold pt-4 text-[30px]">Get Touch With Us</h1>
</div>


<section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4 flex flex-col md:flex-row">
      <div class="md:w-1/2 p-4">
        <form class="space-y-4">
          <div>
            <label for="name" class="block text-gray-700 font-medium">Name</label>
            <input type="text" id="name" name="name" class="w-full rounded-md border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200">
          </div>
          <div>
            <label for="email" class="block text-gray-700 font-medium">Email</label>
            <input type="email" id="email" name="email" class="w-full rounded-md border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200">
          </div>
          <div>
            <label for="subject" class="block text-gray-700 font-medium">Subject</label>
            <input type="text" id="subject" name="subject" class="w-full rounded-md border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200">
          </div>
          <div>
            <label for="message" class="block text-gray-700 font-medium">Message</label>
            <textarea id="message" name="message" rows="4" class="w-full rounded-md border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"></textarea>
          </div>
          <div>
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Send</button>
          </div>
        </form>

      </div>
      <div class="md:w-1/2 p-4">
        <p class="text-gray-700">123 Main Street<br>City, State ZIP<br>Phone: (123) 456-7890<br>Email: info@example.com</p>
        <div class="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.738157788741!2d79.95857201427667!3d6.902526120217229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25983ff3c96a3%3A0xc36dcb3e85b8d95f!2sUniversity%20of%20Colombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1628843807716!5m2!1sen!2sus"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>

  <page_footer/>

</template>

<style>


.title_home, *{
  font-family: 'Inter', sans-serif;
}
</style>



