<template>
  <div id="app">
    <router-link class="router-link" to="/">Home</router-link>
    <router-link class="router-link" to="/about">About</router-link>
    <router-view></router-view>
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
  color: #2c3e50;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 50%;
}

#app > p {
  font-size: 28px;
}

#app > img {
  padding: 15px 0;
}

.router-link {
  color: #42b983;
  padding: 30px;
  font-size: 24px;
}
</style>
