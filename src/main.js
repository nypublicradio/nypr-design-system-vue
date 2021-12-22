import { createApp, h } from 'vue'
import routes from './router'
const NotFoundComponent = { template: '<p>Page not found</p>' }

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent () {
      return routes[this.currentRoute] || NotFoundComponent
    }
  },

  render () {
    return h(this.CurrentComponent)
  }
}

createApp(SimpleRouter).mount('#app')
