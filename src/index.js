import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
