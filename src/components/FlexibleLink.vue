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
export default {
  name: 'FlexibleLink',
  props: ['to'],
  computed: {
    isExternal () {
      if (/^http(s)+:/.test(this.to)) {
        return true
      }
      return false
    }
  }
}
</script>
