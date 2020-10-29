// this is for the rollup build - still working on it!

import Vue from 'vue'
import * as components from './index'

if (typeof Vue !== 'undefined') {
  for (const name in components) {
    Vue.component(name, components[name])
  }
}
