import { app, addParameters } from '@storybook/vue3';
import './storybook-styles.scss';
import { action } from '@storybook/addon-actions'

addParameters({
  docs: {
    inlineStories: true,
  },
});

app.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a :href="to" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}