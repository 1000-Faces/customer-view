<template>
    <NavBar></NavBar>    
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
        <div class="mb-4">
          <label class="text-gray-600">Name</label>
          <input v-model="name" type="text" class="w-full mt-1 p-2 border rounded">
        </div>
        <div class="mb-4">
          <label class="text-gray-600">Email</label>
          <input v-model="email" type="email" class="w-full mt-1 p-2 border rounded">
        </div>
        <div class="mb-4">
          <label class="text-gray-600">Message</label>
          <textarea v-model="message" class="w-full mt-1 p-2 border rounded"></textarea>
        </div>
        <button @click="sendMessage" class="w-full bg-green text-white py-2 rounded hover:bg-white hover:border-green border hover:text-green  transition duration-300">
          Send
        </button>
        <div class="mt-4 text-gray-600">
          <p>Contact Us at:</p>
          <p>Email: {{ contactEmail }}</p>
          <p>Phone: {{ contactPhone }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import NavBar from './utils/navBar-user.vue';
  import { ref } from 'vue';
  
  interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  
  const contactEmail = 'contact@dineease.com';
  const contactPhone = '+94 77 1234 567';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  
  const sendMessage = (): void => {
    const formData: ContactFormData = { name: name.value, email: email.value, message: message.value };
    window.alert('Sending message:\nName: ' + formData.name + '\nEmail: ' + formData.email + '\nMessage: ' + formData.message);
  };
  </script>
  