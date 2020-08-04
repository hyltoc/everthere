<template>
  <div id="app">
    <UseCases message="Hello"/>
  </div>
</template>

<script>
import UseCases from './views/UseCases/UseCases.vue'

export default {
  name: 'App',
  components: {
    UseCases
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
