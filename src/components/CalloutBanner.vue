<template>
  <div
    v-if="active"
    class="callout-banner"
    :class="{'callout-banner-active': active}"
  >
    <div
      class="callout-banner-close"
      @click="active=false"
    >
      <close-icon />
    </div>
    <div class="callout-banner-message">
      <slot name="message" />
    </div>
  </div>
</template>

<script>
import CloseIcon from '../../src/components/icons/CloseIcon'

export default {
  name: 'CalloutBanner',
  components: {
    CloseIcon
  },
  data () {
    return {
      active: true
    }
  }
}
</script>

<style lang="scss">
.callout-banner {
  z-index: 9999;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: RGB(var(--color-background-highlight));
  align-items: center;
  padding: var(--space-5);
}

.callout-banner .callout-banner-close {
  position: absolute;
  cursor: pointer;
  top: var(--space-1);
  right: var(--space-1);
  width: 30px;
  height: 30px;
  padding: 6px;
  transition: var(--animation-duration-standard);

  &:hover {
    opacity: var(--opacity-hover);
  }
}
</style>
