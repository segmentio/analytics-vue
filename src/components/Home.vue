<template>
  <h1>Home</h1>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    window.analytics.page('Home')
  }
}
</script>
