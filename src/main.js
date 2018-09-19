import Vue from 'vue'
import App from './App.vue'
// import elementUI from 'element-ui'
import {
  Tabs,
  TabPane
} from 'element-ui'

import './assets/reset.css'

Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);

import 'element-ui/lib/theme-chalk/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
})
