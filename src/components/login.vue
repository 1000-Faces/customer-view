<style>
@import '@/assets/main.css';


</style>
<template>
  <div class="container items-center mx-auto bg-green-500 pt-12 pb-12 flex flex-row justify-center">
    <div
      class="container xl:w-3/4 lg:w-full md:w-full sm:w-full m-0 max-h-max bg-white content-bottom py-8 xl:px-8 lg:px-8 md:px-8 sm:px-8 p-8 rounded-3xl flex flex-col md:flex-row gap-10 justify-center"
    >
      <div class="sign-up-left w-full md:w-2/3 flex flex-col items-center">
        <div class="logo pr-48 md:pr-0 w-auto h-auto shrink:0">
          <img class="xl:h-10 md:h-10 sm:h-5 w-auto mb-4" src="../assets/Group 39556.png" alt=""  shrink:0/>
        </div>
        <div class="sign-up-form w-full md:w-2/3">
          <h1 class="font-sans text-3xl text-center font-semibold pb-4">Log In</h1>
          <form @submit.prevent="loginUser">
            <BaseInput
              id="email"
              v-model="email"
              type="text"
              label="Email Address"
              label-for="email"
              required
            ></BaseInput>
            <p v-if="showError && !email" class="text-red font-medium text-md pb-2">
              Email is required
            </p>

            <!-- ... Same for the password input -->

            <BaseInput
              id="password"
              v-model="password"
              label="Password"
              label-for="password"
              type="password"
              required
            ></BaseInput>

            <p v-if="showError && !password" class="text-red font-medium text-md pb-2">
              Password is required
            </p>

            <p v-if="showError" class="text-red font-medium text-md">
              {{ errorMessage }}
            </p>

            <div class="flex justify-center py-2">
              <BaseActionBtn class="px-14" initialText="Login" clickedText="Log in"></BaseActionBtn>
            </div>
          </form>

          <p class="text-black font-light flex justify-center text-sm">
            Have not registered yet? <button @click="navigateToSignUp" class="text-green"> &nbsp;Signup</button>
          </p>

          <div class="or flex items-center my-4">
            <hr class="flex-grow border-gray-400" />
            <p class="mx-4 text-gray-700 text-sm">OR</p>
            <hr class="flex-grow border-gray-400" />
          </div>

          <button class="flex justify-center border-2 border-green p-2 rounded">
            <img class="w-1/12" src="../assets/google.png" alt="" />
            <p class="py-1 ml-2 text-sm">Continue with Google</p>
          </button>
        </div>

        <!-- Loding screen start -->
        <div
          v-if="loading"
          class="fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-black bg-opacity-75 text-white"
        >
          <p class="text-lg">Please Wait...</p>
          <div class="mt-4">
            <div class="animate-spin rounded-full h-10 w-10 border-t-4 border-blue"></div> <!-- Loading spinner -->
          </div>
        </div>
        <!-- Loding screen end -->
      </div>
      <div class="sign-up-right w-full md:w-1/2 hidden xl:block">
        <!-- Add content for the right side if needed -->
        <div
          id="carouselExampleIndicators"
          class="relative"
          data-te-carousel-init
          data-te-carousel-slide
        >
          <!--Carousel indicators-->
          <div
            class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators
          >
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="0"
              data-te-carousel-active
              class="mx-[5px] box-content h-[5px] w-[5px] rounded- flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="1"
              class="mx-[5px] box-content h-[5px] w-[5px] rounded flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="2"
              class="mx-[5px] box-content h-[5px] w-[5px] rounded flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 3"
            ></button>
          </div>

          <!--Carousel items-->
          <div class="relative w-full after:clear-both after:block after:content-['']">
            <!--First item-->
            <div
              class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              data-te-carousel-active
            >
              <img
                src="../assets/images/1.png"
                class="block w-full h-max rounded-lg opacity-70"
                alt="Wild Landscape"
              />
            </div>
            <!--Second item-->
            <div
              class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src="../assets/images/2.png"
                class="block w-full rounded-lg opacity-70"
                alt="Camera"
              />
            </div>
            <!--Third item-->
            <div
              class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src="../assets/images/3.png"
                class="block w-full rounded-lg opacity-70"
                alt="Exotic Fruits"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent , ref} from 'vue'
import BaseInput from './utils/baseInput.vue'
import BaseActionBtn from './utils/baseActionBtn.vue'
import axios from 'axios';

// import { useRouter } from 'vue-router'
const isPasswordVisible = ref(false);
const email = ref("");
const password = ref("");
const loading = ref(false);

export default defineComponent({
  name: 'LogIn',
  data() {
    return {
      title: 'Log In Page',
      email: '',
      password: '',
      showError: false, // Track if error should be shown
      errorMessage: '', // Store the error message
      loading: false,
      userID: null, // Initialize userID as null
      //isMobile: false,
      isPasswordVisible
    }
  },
  components:{
      BaseInput,
      BaseActionBtn
  },
  // computed: {
  //   isMobile() {
  //     return this.isMobile;
  //   }
  // },
  methods: {
    async loginUser() {
      console.log(this.email, this.password);
      try {
        if (!this.email || !this.password) {
          // Display error messages for empty fields
          this.showError = true;
          // this.errorMessage = '';
          return; // Stop further execution
        }

        // Reset error state and clear error message
        this.showError = false;
        this.errorMessage = '';

        // Set loading to true
        this.loading = true;

        const response = await axios.post('https://dineaase.azurewebsites.net/api/auth', {
          email: this.email,
          password: this.password
        });

        // Reset loading state
        this.loading = false;

        if (response.status === 200) {
          console.log('Login successful, handle accordingly');
          // Reset error state and clear error message
          this.showError = false;
          this.errorMessage = '';
          const responseData = response.data;
          const token = responseData;

          // Pass the token to the handleLogin method
          this.handleLogin(token);
        } else if (response.status === 401) {
          // Display error message and turn input boxes red
          this.showError = true;
          this.errorMessage = 'Email or password is incorrect';
        } else {
          console.log('Login failed, handle error', response.status);
        }
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 401) {
          // Display error message and turn input boxes red
          this.showError = true;
          this.errorMessage = 'Email or password is incorrect';
        }
      }
    },

    handleLogin(token) {
      // Save the token to the local storage
      localStorage.setItem('token', token);

      // Redirect to the desired page or perform any other actions
      // For example, redirect to the user's dashboard
      this.$router.push('/home');
    },

    navigateToHome() {
      window.location.href = '/Home'; // Change the URL to match your home.vue route
    },
    navigateToSignUp() {
      // Navigate to the sign-up page
      // You can use Vue Router to navigate to the sign-up route
      this.$router.push('/signup');
    },
  },
  created() {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
  },
})
import { Carousel, initTE } from 'tw-elements'

initTE({ Carousel })

export { Carousel }
</script>