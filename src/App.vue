<template>
  <div id="app">
    <nav>
      <ul class="header-ul">
        <li>
          <router-link class="router-link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/about">About</router-link>
        </li>
      </ul>
    </nav>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#app > p {
  font-size: 28px;
}

#app > img {
  padding: 15px 0;
}

.header-ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.header-ul > li {
  display: inline;
  padding: 30px;
}

.router-link {
  color: #42b983;
  padding: 30px;
  font-size: 24px;
}
</style>
