import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
// import HomeView_content from '../views/HomeView_content.vue'
import AboutusView_title from '../views/AboutusView_title.vue';
import AboutusView_content from '../views/AboutusView_content.vue';
import ContactUsView_title from '../views/ContactusView_title.vue';
import ContactUSView_content from '../views/ContactusView_content.vue'
import FooterView from '../views/FooterView.vue'
import Login from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        headerContent: HomeView, // This slot will be rendered in the header section of the parent component
        // mainContent: ,   // This slot will be rendered in the main section of the parent component
        footerContent:FooterView
      },
    },
    {
      path: '/about',
      name: 'about',
      components: {
        headerContent: AboutusView_title, // This slot will be rendered in the header section of the parent component
        mainContent: AboutusView_content,   // This slot will be rendered in the main section of the parent component
        footerContent:FooterView
      },
    },
    {
      path: '/contactus',
      name: 'contactus',
      components: {
        headerContent: ContactUsView_title, // This slot will be rendered in the header section of the parent component
        mainContent: ContactUSView_content,   // This slot will be rendered in the main section of the parent component
        footerContent:FooterView
      },
    }
  ]
})

export default router
