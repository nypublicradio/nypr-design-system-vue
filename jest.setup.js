import Vue from 'vue'
import { config } from '@vue/test-utils'

Vue.config.silent = true

// Vue.config.ignoredElements = ['nuxt-link']
// Mock Nuxt components
config.stubs['nuxt-link'] = { template: '<a><slot /></a>' }
