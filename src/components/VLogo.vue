<template>
  <div class="logo">
    <router-link to="/" aria-label="go to the home page">
      <new-sounds-logo />
    </router-link>
  </div>
</template>

<script>
  import NewSoundsLogo from './svg/NewSoundsLogo'
  export default {
    name: 'VLogo',
    components: { NewSoundsLogo }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/breakpoints";

  .logo {
    max-width: 175px;
  }

  .home .logo {
    max-width: 300px;
    margin: auto;
    @media all and (min-width: $medium) {
      margin: 0 auto 0 0;
      max-width: 420px;
    }
  }

  .new-sounds-logo {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
</style>
