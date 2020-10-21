<template>
  <div
    class="stream-switcher"
    :class="orientation"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'StreamSwitcher',
  props: {
    orientation: {
      type: String,
      default: 'horizontal'
    }
  }
}
</script>

<style lang="scss">
.stream-switcher {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.stream-switcher.horizontal {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.stream-switcher.vertical {
  flex-direction: column;
}

.stream-switcher .stream-switcher-card {
  margin-right: var(--space-2);
}

.stream-switcher.vertical .stream-switcher-card {
  margin-bottom: var(--space-2);
}
</style>
