<script>
export default {
  data: function () {
    return {
      isLoggedIn: false,
      flashMessage: "",
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
      this.flashMessage = localStorage.getItem("flashMessage");
      localStorage.removeItem("flashMessage");
    },
  },
  methods: {
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <nav class="container">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/posts/">Blog Posts</router-link>
    |
    <router-link to="/posts/new" v-if="isLoggedIn">Create a Blog</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/test">Test</router-link>
    |
    <router-link to="/signup" v-if="!isLoggedIn">Signup</router-link>
    |
    <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
    |
    <router-link to="/logout" v-if="isLoggedIn">Logout</router-link>
  </nav>
  <div v-if="flashMessage" class="alert alert-success" v-on:click="flashMessage = null">{{ flashMessage }}</div>
  <router-view />
</template>

<style>
#app {
  font-family: Futura, Trebuchet MS, Arial, sans-serif;
  background-image: url("./assets/dot-grid.png.jpeg");
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
