<template>
  <div id="app">
    <router-link class="router-link" to="/">Home</router-link>
    <router-link class="router-link" to="/about">About</router-link>
    <router-view></router-view>
    <img src="./assets/logo.png">
    <p>Edit <code>src/App.vue</code> and save to reload.</p>
    <Link />
  </div>
</template>

<script>
import Link from '@/components/Link'

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

#app > p {
  font-size: 28px;
}

.router-link {
  color: #42b983;
  padding: 30px;
  font-size: 24px;
}
</style>
