import Vue from 'vue'
import App from './App.vue'

import './assets/reset.css'

Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  el: '#app',
  render: h => h(App)
})
