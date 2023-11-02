<style>
    @import '@/assets/main.css';
</style>
<template>
    <div class="container items-center mx-auto bg-green-500 pt-12 pb-12 flex justify-center">
      <div class="container xl:w-3/4 lg:w-full md:w-full sm:w-full m-0 max-h-max bg-white content-center py-8 xl:px-8 lg:px-8 md:px-8 sm:px-8 p-8 rounded-3xl flex flex-col md:flex-row justify-center">
        <div class="sign-up-left w-full md:w-2/3 flex flex-col items-center">
          <div class="logo pr-48 md:pr-0 w-20 h-auto shrink:0">
            <img class="xl:w-32 h-auto md:w-20" src="../assets/dine ease logo color.png" alt="">
          </div>
          <div class="sign-up-form w-full md:w-2/3">
            <h1 class="font-sans text-3xl text-center font-semibold pb-4">Register</h1>
            
            <BaseInput
                v-model="formData.name"
                label="Name"
                labelFor="name"
                :class="{'border-red': errors.name}"
            />
            <p v-if="errors.name" class="text-red font-medium text-sm pb-2">
                {{ errors.name }}
            </p>

            <BaseInput
                v-model="formData.email"
                label="Email"
                labelFor="email"
                :class="{'border-red': errors.email}"
            />
            <p v-if="errors.email" class="text-red font-medium text-sm pb-2">
                {{ errors.email }}
            </p>

            <BaseInput
                v-model="formData.mobile"
                label="Mobile"
                labelFor="mobile"
                :class="{'border-red': errors.mobile}"
            />
            <p v-if="errors.mobile" class="text-red font-medium text-sm pb-2">
                {{ errors.mobile }}
            </p>

            <BaseInput
                v-model="formData.password"
                label="Password"
                labelFor="password"
                type="password"
                :class="{'border-red': errors.password}"
            />
            <p v-if="errors.password" class="text-red font-medium text-sm pb-2">
                {{ errors.password }}
            </p>

            <BaseInput
                v-model="formData.confirmPassword"
                label="Confirm Password"
                labelFor="confirm-password"
                type="password"
                :class="{'border-red': errors.confirmPassword}"
            />
            <p v-if="errors.confirmPassword" class="text-red font-medium text-sm pb-2">
                {{ errors.confirmPassword }}
            </p>

            <div class="flex justify-center py-2">
              <BaseActionBtn
              class="px-18"
              :initialText="'Register'"
              :clickedText="'Processing...'"
              :initialClass="'bg-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded'"
              :clickedClass="'bg-white hover:bg-white-600 text-green font-semibold py-2 px-4 rounded border-2 border-green'"
              :onSubmit="signupUser"
              />
            </div>


            <p class="text-black font-light flex justify-center text-sm">Already have an account? <button @click="navigateToLogin" class="text-green"> &nbsp;Login</button></p>
            
            <div class="or flex items-center my-4">
                <hr class="flex-grow border-gray-400">
                <p class="mx-4 text-gray-700 text-sm">OR</p>
                <hr class="flex-grow border-gray-400">
            </div>

            <button class="flex justify-center border-2 border-green p-2 rounded">
              <img class="w-1/12" src="../assets/google.png" alt="" />
              <p class="py-1 ml-2 text-sm">Continue with Google</p>
            </button>
        </div>

        </div>
        <div class="sign-up-right w-full md:w-1/2 hidden xl:block" >
          <!-- Add content for the right side if needed -->
          <div id="carouselExampleIndicators" class="relative" data-te-carousel-init data-te-carousel-slide>
                <!--Carousel indicators-->
                <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
                    <button type="button" data-te-target="#carouselExampleIndicators"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    class="mx-[5px] box-content h-[5px] w-[5px] rounded- flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                    <button
                    type="button"
                    data-te-target="#carouselExampleIndicators"
                    data-te-slide-to="1"
                    class="mx-[5px] box-content h-[5px] w-[5px] rounded flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"></button>
                    <button
                    type="button"
                    data-te-target="#carouselExampleIndicators"
                    data-te-slide-to="2"
                    class="mx-[5px] box-content h-[5px] w-[5px] rounded flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"></button>
                </div>

                <!--Carousel items-->
                <div class="relative w-full after:clear-both after:block after:content-['']">
                    <!--First item-->
                    <div
                    class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    data-te-carousel-active>
                    <img
                        src="../assets/images/1.png"
                        class="block w-full h-max "
                        alt="Wild Landscape" />
                    </div>
                    <!--Second item-->
                    <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src="../assets/images/2.png"
                        class="block w-full"
                        alt="Camera" />
                    </div>
                    <!--Third item-->
                    <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src="../assets/images/3.png"
                        class="block w-full"
                        alt="Exotic Fruits" />
                    </div>
                </div>
            </div>
        </div>
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
  </template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import BaseInput from './utils/baseInput.vue'
import BaseActionBtn from './utils/baseActionBtn.vue'
import SecActionBtn from './utils/secActionBtn.vue'

export default defineComponent({
    name: 'SignUp',
    data() {
        return {
            title: 'Sign Up Page',
            formData: {
            name: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
            },
            errors: {
            name: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
            } as Record<string, string>,
            loading: false,
        };
    },
    components:{
        BaseInput,
        BaseActionBtn,
        SecActionBtn
    },
    methods: {
    async signupUser() {
      this.resetValidationErrors(); // Reset error messages before validation
      const isValid = this.validateForm(); // Validate the form

      if (!isValid) {
        return; // Don't proceed if validation fails
      }

      console.log(this.formData.email, this.formData.password);
      try {
        // Set loading to true
        this.loading = true;

        
        // Create the user object
        const user = {
          username: 'username',
          name: this.formData.name,
          address: 'address',
          phone: this.formData.mobile,
          email: this.formData.email,
          authentication: {
            password: this.formData.password
          },
          
        };

        // Send the user object to the server
        const response = await axios.post('https://dineaase.azurewebsites.net/api/user', user);

        // Reset loading state
        this.loading = false;

        if (response.status === 201) {
          console.log('Signup successful, handle accordingly');
          this.navigateToLogin();
        } else if (response.status === 400) {
          // Handle 400 status code
          this.errors.email = 'Email already exists';
          this.errors.password = '';
          this.errors.confirmPassword = '';
          this.formData.password = ''; // Clear the password field
          this.formData.confirmPassword = ''; // Clear the confirm password field
          console.log('Signup failed, handle error', response.status);
        } else {
          console.log('Signup failed, handle error', response.status);
        }
      } catch (error) {
        console.log('Handle error (e.g., display error message)', error);
      }
    },
    // Validate the form and update error messages
    validateForm() {
      let isValid = true;

      if (!this.formData.name) {
        this.errors.name = 'Name is required';
        isValid = false;
      }

      if (!this.formData.email) {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Invalid email format';
        isValid = false;
      }

      if (!this.formData.mobile) {
        this.errors.mobile = 'Mobile is required';
        isValid = false;
      } else if (!this.isValidMobile(this.formData.mobile)) {
        this.errors.mobile = 'Invalid mobile format';
        isValid = false;
      }

      if (!this.formData.password) {
        this.errors.password = 'Password is required';
        isValid = false;
      } else if (!this.isValidPassword(this.formData.password)) {
        this.errors.password = 'Password must be at least 8 characters long';
        isValid = false;
      }

      if (!this.formData.confirmPassword) {
        this.errors.confirmPassword = 'Confirm Password is required';
        isValid = false;
      } else if (this.formData.password !== this.formData.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }

      return isValid;
    },

    // Check if the email is in a valid format
    isValidEmail(email: string): boolean {
      // Implement your email validation logic here
      // For simplicity, a basic check is shown below
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },

    // Check if the mobile number is in a valid format
    isValidMobile(mobile: string): boolean {
      // Implement your mobile validation logic here
      // For simplicity, a basic check is shown below
      const mobilePattern = /^\d{10}$/;
      return mobilePattern.test(mobile);
    },

    // Check if the password is valid
    isValidPassword(password: string): boolean {
      // Implement your password validation logic here
      // For simplicity, a basic check is shown below
      return password.length >= 8;
    },

    // Reset validation errors
    resetValidationErrors() {
      for (const field in this.errors) {
        this.errors[field] = '';
      }
    },

    // ... existing methods ...
    navigateToHome() {
      window.location.href = '/Home'; // Change the URL to match your home.vue route
    },
    navigateToLogin() {
      // Navigate to the sign-up page
      // You can use Vue Router to navigate to the sign-up route
      this.$router.push('/login');
    },
    },
});
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

export { Carousel };
</script>