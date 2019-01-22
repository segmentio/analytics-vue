import Vue from 'vue'
import router from './router'
import App from './App'

Vue.config.productionTip = false

new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app')
