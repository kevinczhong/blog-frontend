<script>
import axios from "axios";

export default {
  data: function () {
    return {
      posts: [],
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("/posts.json").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>

<template>
  <div class="home container">
    <h1>Blog Posts</h1>
    <div class="row">
      <div class="col-sm-6" v-for="post in posts" v-bind:key="post.id">
        <div class="card">
          <div class="card-body">
            <img v-bind:src="post.image" class="card-img-top" v-bind:alt="post.title" />
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <a v-on:click="$router.push(`/posts/${post.id}`)" class="btn btn-primary">More Details</a>
            <p v-if="getUserId() == post.user_id">Your Post</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <img v-bind:src="post.image" v-bind:alt="post.title" />
      <p>{{ post.body }}</p>
      <router-link v-bind:to="`/posts/${post.id}`">More Details</router-link>
      <button v-on:click="$router.push(`/posts/${post.id}`)">More Details</button>
    </div> -->
  </div>
</template>

<style></style>

<!-- <router-link v-bind:to="`/posts/${post.id}`">More Details</router-link> -->
<!-- <img v-bind:src="post.image" class="card-img-top" v-bind:alt="post.title" /> -->
