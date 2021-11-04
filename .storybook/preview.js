import { app, addParameters } from '@storybook/vue3';
import './storybook-styles.scss';
import Vue from 'vue'
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