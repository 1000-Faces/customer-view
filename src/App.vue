<template>
  <div class="flex flex-col min-h-screen font-sans">
    <component :is="navbarComponent" />
    <router-view></router-view> 
    <widget-container-modal />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from './components/NavBar/NavBar.vue';
import MgNavBar from './components/NavBar/MgNavBar.vue';
import StatNavBar from './components/NavBar/StaticNavBar.vue';
import logNavBar from './components/NavBar/logNavBar.vue';
import Home from './components/Home.vue';
import UserHome from './components/UserHome.vue';
import LogIn from './components/login.vue'
import ManagerHome from './components/Manager/ManagerHome.vue'
import AcceptOrder1 from './components/Manager/orders/acceptOrder1.vue'
import AcceptOrder2 from './components/Manager/orders/acceptOrder2.vue'
import Login from './components/login.vue'
import Menu from './components/Customer/MenuView.vue'
import Cart from './components/Customer/CartView.vue'
import Checkout from  './components/Customer/CheckoutView.vue'
import Reservation from './components/Manager/reservations/reservation.vue'
//import AcceptOrder from './components/Manager/acceptOrder.vue'
import Reservations from './components/Customer/Reservations.vue'
import ProfileSideNav from './components/Customer/ProfileSideNav.vue'
import UserNavBar from './components/NavBar/UserNavbar.vue'
import UserProfile from './components/Customer/UserProfileDashboard.vue'
import addFood from './components/Manager/addFood.vue'
import addMeal from './components/Manager/addMeal.vue'
import { container } from 'jenesius-vue-modal';
import axios from 'axios';

export default defineComponent({
  components: {
    Home,
    NavBar,
    MgNavBar,
    StatNavBar,
    logNavBar,
    Menu,
    Cart,
    Checkout,
    Reservation,
    Login,
    ManagerHome,
    ProfileSideNav,
    Reservations,
    UserProfile,
    WidgetContainerModal: container,
    UserHome,
    AcceptOrder1,
    AcceptOrder2,
    Menu,
    Cart,
    Checkout,
    addFood,
    addMeal
    //baseInput
  },
  data() {
    return {
      userRole: '', // Replace with actual user role logic
    };
  },
  computed: {
    navbarComponent() {
      switch (this.userRole) {
        case 'guest':
          return 'NavBar';
        case 'manager':
          return 'MgNavBar';
        case 'user':
          return 'StatNavbar';
        default:
          return ''; // Default to user navbar if role is unknown
      }
    },
  },
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  },
});
</script>

<style src="./assets/main.css"/>
