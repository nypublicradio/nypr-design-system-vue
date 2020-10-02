<template>
  <div class="stream-switcher">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'StreamSwitcher'
}
</script>

<style lang="scss">
.stream-switcher {
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @include media(">medium") {
    flex-direction: column;
  }
}

.stream-switcher .stream-switcher-card {
  margin-right: var(--space-2);

  @include media(">medium") {
    margin: 0 0 var(--space-2);
  }
}
</style>
