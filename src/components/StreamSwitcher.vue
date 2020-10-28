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
  height: 95px; // height of card plus height of the active caret

  @include media(">xlarge") {
    height: 70px; // height of card plus height of the active caret
  }
}

.stream-switcher.horizontal {
  display: flex;
  // horizontal scroll with hidden scrollbar
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
}

.stream-switcher.vertical {
  flex-direction: column;
}

.stream-switcher .stream-switcher-card {
  margin-right: var(--space-2);

  &:last-of-type {
    margin-right: 0;
  }
}

.stream-switcher.vertical .stream-switcher-card {
  margin-bottom: var(--space-2);
  width: 100%;

  &::after {
    display: none;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
