# Segment Vue Quickstart Guide
<div align="center">
  <img src="https://user-images.githubusercontent.com/16131737/52017744-245c3980-249d-11e9-822d-4565703c36c8.png"/>
  <p><b><i>You can't fix what you can't measure</i></b></p>
</div>

Analytics helps you measure your users, product, and business. It unlocks insights into your app's funnel, core business metrics, and whether you have product-market fit.

## How to get started
1. **Collect analytics data** from your app(s).
    - The top 200 Segment companies collect data from 5+ source types (web, mobile, server, CRM, etc.).
2. **Send the data to analytics tools** (for example, Google Analytics, Amplitude, Mixpanel).
    - Over 250+ Segment companies send data to eight categories of destinations such as analytics tools, warehouses, email marketing and remarketing systems, session recording, and more.
3. **Explore your data** by creating metrics (for example, new signups, retention cohorts, and revenue generation).
    - The best Segment companies use retention cohorts to measure product market fit. Netflix has 70% paid retention after 12 months, 30% after 7 years.

[Segment](https://segment.com?utm_source=github&utm_medium=click&utm_campaign=protos_vue) collects analytics data and allows you to send it to more than 250 apps (such as Google Analytics, Mixpanel, Optimizely, Facebook Ads, Slack, Sentry) just by flipping a switch. You only need one Segment code snippet, and you can turn integrations on and off at will, with no additional code. [Sign up with Segment today](https://app.segment.com/signup?utm_source=github&utm_medium=click&utm_campaign=protos_vue).

### Why?
1. **Power all your analytics apps with the same data**. Instead of writing code to integrate all of your tools individually, send data to Segment, once.

2. **Install tracking for the last time**. We're the last integration you'll ever need to write. You only need to instrument Segment once. Reduce all of your tracking code and advertising tags into a single set of API calls.

3. **Send data from anywhere**. Send Segment data from any device, and we'll transform and send it on to any tool.

4. **Query your data in SQL**. Slice, dice, and analyze your data in detail with Segment SQL. We'll transform and load your customer behavioral data directly from your apps into Amazon Redshift, Google BigQuery, or Postgres. Save weeks of engineering time by not having to invent your own data warehouse and ETL pipeline.

    For example, you can capture data on any app:
    ```js
    analytics.track('Order Completed', { price: 99.84 })
    ```
    Then, query the resulting data in SQL:
    ```sql
    select * from app.order_completed
    order by price desc
    ```

# 🏃💨 Quickstart
In this tutorial you'll add your write key to this Vue demo app to start sending data from the app to Segment, and from there to any of our destinations, using our [Analytics.js library](https://segment.com/docs/sources/website/analytics.js?utm_source=github&utm_medium=click&utm_campaign=protos_vue). Once your app is set up, you'll be able to turn on new destinations with the click of a button! Ready to try it for yourself? Scroll down to the <a href="#demo">demo section</a> and run the app!

Start sending data from any [source](https://segment.com/docs/guides/general/what-is-a-source?utm_source=github&utm_medium=click&utm_campaign=protos_vue) and see events live in the Segment **debugger**:

<div align="center">
  <img src="https://user-images.githubusercontent.com/16131737/52017555-87010580-249c-11e9-8848-896ac1f15daa.gif"/>
</div>
<br/>

Once you have data being sent to Segment, forward this data to any of our 250+ [destinations](https://segment.com/docs/guides/general/what-is-a-destination?utm_source=github&utm_medium=click&utm_campaign=protos_vue):

<div align="center">
  <img src="https://user-images.githubusercontent.com/16131737/52022151-78bae580-24ac-11e9-88ed-fb20a33eecfb.gif"/>
</div>

## 📺 <span name="demo">Demo</span>
To start with this demo app, follow the instructions below:

1. [Sign up](https://app.segment.com/signup?utm_source=github&utm_medium=click&utm_campaign=protos_vue) with Segment and edit the snippet in [index.html](https://github.com/segmentio/analytics-vue/blob/master/public/index.html#L11) to replace `YOUR_WRITE_KEY` with your Segment **Write Key**.
    > **Tip!** You can find your key in your project setup guide or settings in the Segment.

    Your snippet will look something like the example below.

    ```html
    <script type="text/javascript">
      !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
      analytics.load("YOUR_WRITE_KEY");
      }}();
    </script>
    ```

2. From the command line, use `npm install` to install the dependencies, then `npm start` to run the app.
    ```bash
    npm install
    npm start
    ```

3. Go to the Segment site, and in the Debugger look at the live events being triggered in your app. You should see the following:
    - Page event: `Home` - When someone views the `home` page.
    - Page event: `About` - When someone views the `about` page.
    - Track event: `Learn Vue Link Clicked` - When someone clicks the "Learn Vue" link.

Congrats! You're seeing live data from your demo Vue app in Segment! 🎉

# 🔌 Installing on Your App
Okay, the demo app is cool, but how do I get this in my own Vue app? Follow the steps below.

## ✂️ Step 1: Copy the Snippet
To install Segment in your own app first [sign up](https://app.segment.com/signup?utm_source=github&utm_medium=click&utm_campaign=protos_vue) with Segment and locate your Segment project's **Write Key**.
Then, copy and paste the snippet below into the `head` tag of your site. Replace `YOUR_WRITE_KEY` in the snippet below with your Segment project's write key.

> **Tip!** You can find your write key in your Segment project setup guide or settings.

```html
<script type="text/javascript">
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
  analytics.load("YOUR_WRITE_KEY");
  // analytics.page() // Uncomment if your application is NOT an SPA
  }}();
</script>
```
Now `window.analytics` is loaded and available to use throughout your app!

In the next sections you'll build out your implementation to track page loads, to identify individual users of your app, and track the actions they take.

## 📱 Step 2: Track Page Views in an SPA
> **Tip!** If your Vue application is **not** a Single Page application, you can uncomment the section in the above snippet and skip to Step 3.

The snippet from Step 1 loads `Analytics.js` into your app and is ready to track page loads. However, most Vue apps are a Single Page App (SPA), and in SPAs clicking a link or a new tab does not reload the whole webpage.

The `page` method lets you record page views on your website, along with optional information about the page being viewed. You can read more about how this works in the [page reference](https://segment.com/docs/sources/website/analytics.js/#page?utm_source=github&utm_medium=click&utm_campaign=protos_vue).

This means that using `analytics.page()` in `index.html` on a SPA will not detect page component loads, and you'll need to simulate a page load some other way. You can use [vue-router](https://router.vuejs.org) and Vue's lifecycle hooks to create `page` calls.

If you separate your pages into their own components and allow the [`<router-view>`](https://router.vuejs.org/api/#router-view) component to handle when the page renders, you can use `mounted` to invoke `page` calls. The example below shows one way you could do this.

```html
<template>
  <h1>
    Home page.
  </h1>
</template>
<script>
export default {
  name: 'HomePage',
  mounted () {
    window.analytics.page('Home')
  }
}
</script>
```

## 🔍 Step 3: Identify Users
The `identify` method is how you tell Segment who the current user is. It includes a unique User ID and any optional traits you can pass on about them. You can read more about this in the [identify reference](https://segment.com/docs/sources/website/analytics.js/#identify?utm_source=github&utm_medium=click&utm_campaign=protos_vue).

**Note:** You don't need to call `identify` for anonymous visitors to your site. Segment automatically assigns them an `anonymousId`, so just calling `page` and `track` still works just fine without `identify`.

Here's what a basic call to `identify` might look like:

```javascript
window.analytics.identify('f4ca124298', {
  name: 'Michael Bolton',
  email: 'mbolton@initech.com'
});
```

This call identifies Michael by his unique User ID and labels him with `name` and `email` traits.

In Vue, if you have a form where users sign up or log in, you can use the `v-on:submit` handler to call `identify`, as in the example below:

```html
<template>
  <form v-on:submit="handleSubmit">
    <input name="name" type="text" v-model="name">
    <input name="email" type="email" v-model="email">
    <input type="submit" value="Submit">
  </form>
</template>

<script>
export default {
  name: 'IdentifyForm',
  data: {
    name: '',
    email: ''
  },
  methods: {
    handleSubmit () {
      // Add your own unique ID here or we will automatically assign an anonymousID
      window.analytics.identify({
        name: this.name,
        email: this.email
      })
    }
  }
}
</script>
```

> **Tip!** Other handlers might be better for other situations. You can see the [Vue docs on event handlers](https://vuejs.org/v2/guide/events.html) for more information.

## ⏰ Step 4: Track Actions
The `track` method is how you tell Segment about which actions your users are performing on your site. Every action triggers what we call an "event", which can also have associated properties. It is important to figure out exactly what events you want to `track` instead of tracking anything and everything. A good way to do this is to build a [tracking plan](https://segment.com/docs/guides/sources/can-i-see-an-example-of-a-tracking-plan?utm_source=github&utm_medium=click&utm_campaign=protos_vue). You can read more about `track` in the [track reference](https://segment.com/docs/sources/website/analytics.js/#track?utm_source=github&utm_medium=click&utm_campaign=protos_vue).

Here's what a call to `track` might look like when a user bookmarks an article:

```javascript
window.analytics.track('Article Bookmarked', {
  title: 'Snow Fall',
  subtitle: 'The Avalanche at Tunnel Creek',
  author: 'John Branch'
});
```

The snippet tells us that the user just triggered the **Article Bookmarked** event, and the article they bookmarked was the `Snow Fall` article authored by `John Branch`. Properties can be anything you want to associate to an event when it is tracked.

### Track Calls with Event Handlers
In Vue, you can use several event handlers, such as `v-on:click`, `v-on:submit`, `v-on:mouseover`, to call the `track` events. In the example below, we use the `v-on:click` handler to make a `track` call to log a `User Signup`.

```html
<template>
  <button v-on:click="trackEvent">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'SignupButton',
  data() {
    return {
      title: 'Signup with Segment today!'
    }
  },
  methods: {
    trackEvent () {
      window.analytics.track('User Signup')
    }
  }
}
</script>
```

> **Tip!** Other handlers might be better for other situations. You can see the [Vue docs on event handlers](https://vuejs.org/v2/guide/events.html) for more information.

### Track Calls with Lifecycle Hooks
[Lifecycle hooks](https://vuejs.org/v2/api/#Options-Lifecycle-Hooks) are also great for tracking particular events, and in fact we used a lifecycle hook in Step 2 to track page component loads. For example, if you want to track components that are conditionally rendered from a parent component and that are outside the scope of a `page` call, then you can use `mounted` to trigger a `track` event:

```html
<template>
  <video autoplay>
    <source src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" type="video/youtube">
  </video>
</template>

<script>
export default {
  name: 'VideoPlayer',
  mounted () {
    window.analytics.track('Video Played')
  }
}
</script>
```

### Track Calls with Transitions
[Transition components](https://vuejs.org/v2/guide/transitions.html) components control when UI elements render. The transition hooks, `beforeEnter`, `enter`, `enterCancelled`, and `leave` are fired for different times in a component lifecycle. In this example, when the `Toggle` button is clicked, some text is rendered, and the `afterEnter` hook fires a `track` event.

```html
<template>
  <div>
    <button v-on:click="show = !show">
      {{ title }}
    </button>
    <transition v-on:after-enter="afterEnter">
      <p v-if="show">
        {{ text }}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DestinationsToggle',
  data() {
    return {
      show: false,
      title: 'Toggle',
      text: 'Integrate with over 200+ destinations!'
    }
  },
  methods: {
    afterEnter (el) {
      window.analytics.track('Destinations Info Toggled')
    }
  }
}
</script>
```

## 🤔 What's next?
Once you've added a few track calls, **you're done**! You've successfully installed `Analytics.js` tracking. Now you're ready to see your data in the Segment dashboard, and turn on any destination tools. 🎉

## 🎓 Advanced
Once you've mastered the basics, here are some advanced use cases you can apply with Segment.

### Track Calls for Error Logging
You can also use `track` calls to log errors, using a higher-order component such as `ErrorBoundary` to wrap around child components. Then, when an error occurs you log the error with `track` and gracefully display the appropriate child component. In this example, when an error is caught by `errorCaptured`, we set our `error` boolean to `true`, `track` the error, and then the `errorComponent` will be rendered.

```html
<script>
import DefaultErrorComponent from './DefaultErrorComponent.vue'

export default {
  name: 'ErrorBoundary',
  props: {
    errorComponent: {
      type: Object,
      default: () => DefaultErrorComponent
    }
  },
  data() {
    return {
      error: false
    }
  },
  errorCaptured (err, vm, info) {
    this.error = true

    window.analytics.track('JavaScript Error', {
      error: err,
      errorInfo: info
    })
  },
  render (h) {
    return this.error ? h(this.errorComponent) : this.$slots.default[0]
  }
}
</script>
```

### Typechecking with PropTypes
You can use typechecking with [`prop-types`](https://vuejs.org/v2/guide/components-props.html) to catch a lot of potential bugs and prevent handing down information in the wrong format. For example, you can enforce a format for `user` related objects which can help with data standardization. You can get creative with the traits you expect to be sent to Segment for `identify` and `track`:

```html
<script>
// Object with type declaration is only valid with Typescript
type IdentifyTraits = {
  name: string
  email: string
  isAuthorized: boolean
}

export default {
  name: 'User',
  props: {
    id: String,
    identifyTraits: Object as () => IdentifyTraits,
    trackTitle: String,
    trackTraits: Object
  },
  render () {
    return this.$slots.default[0]
  }
}
</script>
```

Interested more in data standardization? Check out our [protocols product](https://segment.com/product/protocols?utm_source=github&utm_medium=click&utm_campaign=protos_vue) to improve data quality.

You may wondering what you can be doing with all the raw data you are sending to Segment from your Vue app. With our [warehouses product](https://segment.com/product/warehouses?utm_source=github&utm_medium=click&utm_campaign=protos_vue), your analysts and data engineers can shift focus from data normalization and pipeline maintenance to providing insights for business teams. Having the ability to query data directly in SQL and layer on visualization tools can take your product to the next level.

## 💾 Warehouses
A warehouse is a special subset of destinations where we load data in bulk at a regular intervals, inserting and updating events and objects while automatically adjusting their schema to fit the data you've sent to Segment. We do the heavy lifting of capturing, schematizing, and loading your user data into your data warehouse of choice.

Examples of data warehouses include Amazon Redshift, Google BigQuery, MySQL, and Postgres.

<div align="center">
  <img src="https://user-images.githubusercontent.com/16131737/52022132-6a6cc980-24ac-11e9-8e09-8606531a5dc7.gif"/>
</div>

## 📝 Docs & Feedback
Check out our full [Analytics.js reference](https://segment.com/docs/sources/website/analytics.js?utm_source=github&utm_medium=click&utm_campaign=protos_vue) to see what else is possible, or read about the [Tracking API methods](https://segment.com/docs/sources/server/http?utm_source=github&utm_medium=click&utm_campaign=protos_vue) to get a sense for the bigger picture. If you have any questions, or see anywhere we can improve our documentation, [let us know](https://segment.com/contact?utm_source=github&utm_medium=click&utm_campaign=protos_vue)!
