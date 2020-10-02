<template>
  <div class="wnyc-theme-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WnycThemeWrapper'
}
</script>

<style lang="scss">
@import "src/styles/wnyc";
</style>
