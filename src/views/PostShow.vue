<script>
import axios from "axios";

export default {
  data: function () {
    return {
      post: [],
    };
  },
  created: function () {
    axios.get("/posts/" + this.$route.params.id + ".json").then((response) => {
      this.post = response.data;
    });
  },
  methods: {
    deletePost: function () {
      axios.delete("/posts/" + this.$route.params.id + ".json").then((response) => {
        console.log("Successfully Deleted", response.data);
        this.$router.push("/posts/");
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h2>{{ post.title }}</h2>
    <img v-bind:src="post.image" v-bind:alt="post.title" />
    <p>{{ post.body }}</p>
    <!-- <router-link to="/posts/">Back to all posts</router-link>
    <p><router-link v-bind:to="`/posts/${post.id}/edit`">Edit post</router-link></p> -->
    <p><button v-on:click="$router.push('/posts/')">Return to Main Page</button></p>
    <p><button v-on:click="$router.push(`/posts/${post.id}/edit`)">Edit This Post</button></p>
    <button v-on:click="deletePost">Delete This Post</button>
  </div>
</template>

<style></style>
