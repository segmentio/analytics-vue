<template>
  <a
    href="https://vuejs.org"
    target="_blank"
    v-on:click="trackClickEvent"
   >
    {{ msg }}
  </a>
</template>

<script>
export default {
  name: 'Link',
  data () {
    return {
      msg: 'Learn Vue'
    }
  },
  methods: {
    trackClickEvent () {
      window.analytics.track('Learn Vue Link Clicked')
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
  font-size: 24px;
}
</style>
