<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="header-with-background">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <img src="./assets/images/dineeaselogo2.png" alt="logo" class="logo">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><RouterLink to="/">Home</RouterLink></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><RouterLink to="/about">About</RouterLink></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><RouterLink to="/contactus">Contact</RouterLink></a>
            </li>
            <li class="nav-item">
              <button type="button" aria-current="page" class="btn btn-outline-success nav_btn_login custom-btn">
                <RouterLink to="/login" style="font-size: 1.125rem; line-height: 1.5;">Log In</RouterLink>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" aria-current="page" class="btn btn-outline-success nav_btn_signup custom-btn">
                <RouterLink to="/signup" style="font-size: 1.125rem; line-height: 1.5;">Get Started</RouterLink>
              </button>
            </li>
            
          </ul>
        </div>
        <div class="content-wrapper">
          <RouterView name="headerContent" />
        </div>
    </nav>
  </header>

  <div class="content-wrapper2">
    <RouterView name="mainContent" />
  </div>

  <div class="footer">
    <RouterView name="footerContent" />
  </div>

  
</template>

<style scoped>
header {
  line-height: 1.5;
  height: auto;
  max-height: 400vh;
  max-width: 100%;
  padding: 0px;
  margin: 0;
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-right: calc(var(--section-gap) / 2);
}


.header-with-background {
  position: relative; /* Ensure the header is a positioned element */
  background-image: url("./assets/images/about_background.png");
  background-size: cover;
}

.header-with-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the alpha value (last parameter) to control the color intensity */
  pointer-events: none; /* Make the overlay ignore mouse events, so links are clickable */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
}

.navbar{
  top: 0%;
  background-color: none;
}
nav a.router-link-exact-active {
  color: var(--vt-c-white);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


.nav-item , .nav_btn_login, .nav_btn_signup{
  font-size: 1.125rem;
}

.custom-btn {
  margin-right: 13px;
}

.navbar-toggler a{
  padding-top: 13px;
  padding-left: 10px;
}

.nav_btn_login,
.nav_btn_signup {
  display: inline-block;
  padding: 0.5rem 2rem; /* Updated padding here */
  border-radius: 25px;
}

.nav_btn_signup{
  background-color: #007400;
  border: solid #007400;
  white-space: nowrap;
}

.nav_btn_signup a{
  color: #fff;
}

.nav_btn_login{
  background-color: #fff;
  border: solid #007400;
  white-space: nowrap;
}

.nav_btn_login a{
  color: #007400;
}

.content-wrapper {
  top: 40px;
}

.content-wrapper2{
    padding: 25px 100px 25px 100px;
}

.footer{
  text-align: center;
  color: #75797F;
  font-family: 'Inter', sans-serif;
  position: relative;
}

@media (min-width: 1024px) {
  header {
    height: 300px;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    align-items: flex-start;
  }

  .logo {
    margin: 0 1rem 0 0;
    border-color: none;
    padding-top: 0px;
  }

.content-wrapper {
  position:absolute;
  margin-top: 100px;
  display: block;
  text-align: left;
}

  nav {
    text-align: left;
    margin-left: 2rem;
    font-size: 1.125rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  .content-wrapper2{
    padding: 50px 200px 50px 200px;
  }

  .footer{
    text-align: center;
    color: #75797F;
    font-family: 'Inter', sans-serif;
  }
}
</style>
