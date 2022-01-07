import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'gsap testing'
  },
  css: ['~/assets/scss/main'],
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use \'sass:math\'; @import \'./assets/scss/main.scss\';'
        }
      }
    }
  },
  components: [
    { path: '~/src/components', extensions: ['vue'] }
  ],
  buildModules: []
})
