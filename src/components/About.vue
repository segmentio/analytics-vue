<template>
  <div>
    <h1>About</h1>
    <p class="about-content">
      Segment collects analytics data and sends it to 250+ apps with the flip of a switch (e.g. Google Analytics, Mixpanel, Optimizely, Facebook Ads, Slack, Sentry). You only need one snippet and you can turn integrations on and off whenever you want with no additional code.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted () {
    window.analytics.page('About')
  }
}
</script>

<style>
.about-content {
  font-size: 23px;
  line-height: 1.4;
  margin: 0 35%;
}
</style>
