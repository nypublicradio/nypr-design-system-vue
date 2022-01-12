import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    // '~/assets/scss/theme.scss'
    // '~/src/styles/gothamist.scss'
  ],
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use 'sass:math'; @import './assets/scss/main.scss';`
          additionalData: `@use 'sass:math'; @import './assets/scss/shared.scss';`
        }
      }
    }
  },
  components: [
    { path: '~/src/components', extensions: ['vue'] }
  ],
  buildModules: []
})
