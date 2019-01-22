<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    window.analytics.page('Home')
  }
}
</script>
