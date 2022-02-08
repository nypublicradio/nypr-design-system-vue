<template>
  <a v-if="isExternal" 
    v-bind="{...$props, ...$attrs}"
    :href="to" 
    target="_blank" 
    rel="noopener noreferrer"> 
    <slot name="default"></slot>
  </a>
  <nuxt-link v-else v-bind="{...$props, ...$attrs}">
    <slot name="default"></slot>
  </nuxt-link>
</template>

<script>
import RouteLocationRaw from 'vue-router'
export default {
  name: 'FlexibleLink',
  props: { to: RouteLocationRaw },
  computed: {
    isExternal () {
      if (typeof this.to === 'string' && /^http(s)+:/.test(this.to)) {
        return true
      }
      return false
    }
  }
}
</script>
