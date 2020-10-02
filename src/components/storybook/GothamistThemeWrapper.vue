<template>
  <div class="gothamist-theme-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GothamistThemeWrapper'
}
</script>

<style lang="scss">
@import "src/styles/gothamist";
</style>
