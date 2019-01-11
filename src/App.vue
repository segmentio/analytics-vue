<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Link />
  </div>
</template>

<script>
import Link from './components/Link'

export default {
  name: 'App',
  components: {
    Link 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 140px;
  color: #2c3e50;
}
</style>
