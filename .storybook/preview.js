import { addParameters } from '@storybook/vue';
import './storybook-styles.scss';
import Vue from 'vue'
import { action } from '@storybook/addon-actions'

addParameters({
  docs: {
    inlineStories: true,
  },
});

Vue.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a :href="to" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})
