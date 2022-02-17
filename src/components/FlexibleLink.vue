<template>
  <a
    v-if="isExternal"
    v-bind="{...$props, ...$attrs}"
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
    class="external"
  >
    <slot name="default" />
  </a>
  <nuxt-link v-else v-bind="{...$props, ...$attrs}">
    <slot name="default" />
  </nuxt-link>
</template>

<script>
export default {
  name: 'FlexibleLink',
  props: {
    to: {
      type: [String, Object],
      default: ''
    }
  },
  computed: {
    isExternal () {
      if (typeof this.to === 'string' && /^http(s)?:/.test(this.to)) {
        return true
      }
      return false
    }
  }
}
</script>
