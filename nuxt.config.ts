import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [],
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import '~/node_modules/nypr-design-system-vue/src/styles/_library/_base.media.scss'; @import '~/node_modules/nypr-design-system-vue/src/styles/_library/_base.mixins.scss'; @import '~/node_modules/nypr-design-system-vue/src/styles/gothamist';`,
          //additionalData: `@import '~/assets/scss/main.scss' `,
        },
      },
    },
  },

  components: true
})
