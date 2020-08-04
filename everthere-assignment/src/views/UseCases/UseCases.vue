<template>
  <div class="page-container">
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="thoughtLeaders">
      <div v-for="tl in thoughtLeaders" v-bind:key="tl.uuid">{{ tl.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UseCases",
  props: {
    message: String
  },
  data() {
    return {
      error: null,
      thoughtLeaders: []
    };
  },

  created() {
    fetch("/api/thought-leaders")
      .then(res => res.json())
      .then(json => {
        this.thoughtLeaders = json;
      })
      .catch(error => {
        this.error = error;
      });
  }
};
</script>

<style scoped>
.page-container {
  padding: 14px;
  background-color: #f6f7f9;
  height: 100vh;
}
.error {
  color: #c41c33;
}
</style>