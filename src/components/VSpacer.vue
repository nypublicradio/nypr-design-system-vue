<template>
  <div
    class="v-spacer"
    :class="spacingClass"
  />
</template>

<script>
  export default {
    name: 'VSpacer',
    props: {
      size: {
        type: String,
        default: null
      }
    },
    computed: {
      spacingClass () {
        return this.size ? 'u-padding--' + this.size + '--top' : 'u-padding--top';
      }
    }
  }
</script>

<style lang="scss">
  .v-spacer {
    clear: both;
  }
</style>
