<template>
  <div id="app">
    <k-header :currentTab.sync="currentTab" :tabs="tabs"/>
    <viewModel v-if="currentTab === 'vue'" :link="vue.link" :baseUrl="vue.baseUrl"/>
    <viewModel v-if="currentTab === 'vue-router'" :link="vueRouter.link" :baseUrl="vueRouter.baseUrl"/>
    <viewModel v-if="currentTab === 'vuex'" :link="vueX.link" :baseUrl="vueX.baseUrl"/>
  </div>
</template>

<script>
import viewModel from './components/ViewModel'
import KHeader from './components/KHeader'

import vueMenu from "./data/vueMenu"
import vueRouterMenu from "./data/vueRouterMenu"
import vueXMenu from './data/vueXMenu'

export default {
  name: 'app',
  components: {
    viewModel,
    KHeader
  },
  data () {
    return {
      tabs: ['vue', 'vue-router', 'vuex'],
      currentTab: 'vue',
      vue: {
        link: vueMenu,
        baseUrl: "https://cn.vuejs.org/v2/"
      },
      vueRouter: {
        link: vueRouterMenu,
        baseUrl: "https://router.vuejs.org/zh/"
      },
      vueX: {
        link: vueXMenu,
        baseUrl: "https://vuex.vuejs.org/zh/"
      }
    }
  }
}
</script>

<style lang="scss">
html, body {
  background-color: #343D46;
}
body {
  color: white;
  font-size: 16px;
  font-family: Helvetica, Arial;
}
</style>
