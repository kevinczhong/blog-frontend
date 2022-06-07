<script>
import axios from "axios";

export default {
  data: function () {
    return {
      postParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .patch("/posts/" + this.$route.params.id + ".json", this.postParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts/" + this.$route.params.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="postParams.title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="postParams.body" />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="postParams.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
