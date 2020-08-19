import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import Default from './layouts/Default'

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
    playLivestream (state) {
      state.livestream = true
      state.nowPlaying =
        {
          audio: 'https://www.liberliber.it/mediateca/musica/g/gershwin/rhapsody_in_blue/mp3/gershwin_rhapsody_in_blue_bl_01.mp3',
          'show-title': 'New Sounds Radio',
          show: 'newsoundsradio',
          title: 'episode title',
          slug: 'http://www.kim.com'

        }
    }
  }
})

// layouts
Vue.component('default-layout', Default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
