<template>
    <nav class="fixed top-0 bg-white border-gray-200 z-50 w-full">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/home" class="flex items-center">
          <img src="../../assets/Group 39556.png" class="h-8 mr-3" alt="DineEase Logo" />
          <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap">DineEase</span> -->
        </a>
        <div class="flex items-center md:order-2">
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
            aria-expanded="false"
            @click="toggleDropdown"
          >
            <span class="sr-only">Open user menu</span>
            <img class="w-10 h-10 rounded-full" src="../../assets/profile-photo.jpg" alt="user photo">
          </button>
          <!-- Dropdown menu -->
          <div
            v-show="isDropdownOpen"
            class="absolute top-full right-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900">{{ user.name }}</span>
              <span class="block text-sm text-gray-500 truncate">{{ user.email }}</span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="/user-profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
              </li>
              <li>
                <button @click="signOut" class="bg-red hover:bg-warning text-white py-2 px-4 mx-4 rounded transition duration-300 ease-in-out">Sign Out</button>              
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-user"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <router-link to="/home" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0" active-class="text-green">Home</router-link>
            </li>
            <li>
              <router-link to="/customer/dealsview" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0" active-class="text-green">Deals</router-link>
            </li>
            <li>
              <router-link to="/customer/menuview" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0" active-class="text-green">Menu</router-link>
            </li>
            <li>
              <router-link to="/customer/cartview" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0" active-class="text-green">Cart</router-link>
            </li>
            <li>
              <router-link to="/contactus" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0" active-class="text-green">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    setup() {
      const user = ref({
        name: '',
        email: ''
      });
      const signOut = () => {
        localStorage.removeItem('token'); // Adjust this based on your authentication setup

        const router = useRouter();
        window.location.reload();
        this.$router.push('/');
      };
      const isDropdownOpen = ref(false);

      const toggleDropdown = () => {
        isDropdownOpen.value = !isDropdownOpen.value;
      };

      const toggleMobileMenu = () => {
        // Implement your logic to toggle the mobile menu
      };
      
      onMounted(() => {
        fetchUsers();
      });

      const fetchUsers = () => {
        const accessToken = localStorage.getItem('token'); // Retrieve the access token from localStorage or any other storage mechanism you are using

        if (!accessToken) {
          console.error('Access token is missing.');
          return;
        }

        axios.get('https://dineaase.azurewebsites.net/api/user', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(response => {
          const userIdToFind = accessToken; // Replace 'YOUR_DESIRED_USER_ID' with the specific user ID you want to select
          const usersData = response.data; // Assuming response.data is an array of user objects

          const selectedUser = usersData.find(user => user.id === userIdToFind);

          if (selectedUser && selectedUser.name && selectedUser.email) {
            user.value.name = selectedUser.name;
            user.value.email = selectedUser.email;
          } else {
            console.error('Invalid user data:', selectedUser);
          }
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
      };

      return {
        user,
        isDropdownOpen,
        toggleDropdown,
        toggleMobileMenu,
        signOut
      };
    }
  });
</script>
  