import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import Default from './layouts/Default'

// vuex stuff
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    livestream: false,
    nowPlaying: null
  },
  mutations: {
    playAudio (state, show) {
      state.livestream = false
      state.nowPlaying = show
    },
    playLivestream (state, show) {
      state.livestream = true
      state.nowPlaying = show
    }
  }
})

// layouts
Vue.component('default-layout', Default)

// turns off the (annoying) production tip you see in the console
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
