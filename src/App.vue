<template>
  <nav class="navbar">
    <div class="logo">
      <img class="img-logo" alt="SuiteMediaLogo" src="@/assets/logoSuiteMediaWhite.png">
    </div>
    <div class="nav-links">
      <router-link to="/" class="nav-link">Work</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/services" class="nav-link">Service</router-link>
      <router-link to="/ideas" class="nav-link">Ideas</router-link>
      <router-link to="/careers" class="nav-link">Careers</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </div>
  </nav>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
}

.logo {
  margin-bottom: 20px;
}

.img-logo {
  padding-left: 70%;
  max-width: 100px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.nav-link {
  font-weight: bold;
  color: #ebebeb;
  text-decoration: none;
  padding-bottom: 2px;
  transition: border-bottom 0.1s ease;
}

.nav-link.router-link-exact-active {
  color: #ffffff;
  border-bottom: 2px solid #ffffff;
}

.navbar {
  background: #ff6800;
  transition: top 0.3s;
}

@media screen and (min-width: 768px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin-bottom: 0;
  }

  .nav-links {
    flex-direction: row;
    margin-top: 0;
  }
}
</style>
