<template>
  <div>
    <h1>Welcome to Your Vue.js App</h1>
    <a
      href="https://vuejs.org"
      target="_blank"
      v-on:click="trackClickEvent"
     >
      {{ msg }}
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Learn Vue'
    }
  },
  methods: {
    trackClickEvent () {
      analytics.track('Clicked Learn Vue Link') 
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
  font-size: 22px;
}
</style>
