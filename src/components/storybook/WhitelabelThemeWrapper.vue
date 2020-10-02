<template>
  <div class="whitelabel-theme-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WhitelabelThemeWrapper'
}
</script>

<style lang="scss">
@import "src/styles/white-label.scss";
</style>
