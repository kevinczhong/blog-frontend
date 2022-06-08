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
  },
};
</script>

<template>
  <div class="home">
    <h1>Blog Posts</h1>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <img v-bind:src="post.image" v-bind:alt="post.title" />
      <p>{{ post.body }}</p>
      <!-- <router-link v-bind:to="`/posts/${post.id}`">More Details</router-link> -->
      <button v-on:click="$router.push(`/posts/${post.id}`)">More Details</button>
    </div>
  </div>
</template>

<style></style>
