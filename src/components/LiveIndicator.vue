<template>
  <div class="live-indicator">
    <div class="live-indicator-wrapper">
      <span class="live-indicator-live-text">Live</span> <span class="live-indicator-dot"><live-indicator-dot /></span>
    </div>
    {{ label }}
  </div>
</template>

<script>
import LiveIndicatorDot from '../components/animations/LiveIndicatorDot'

export default {
  name: 'LiveIndicator',
  components: {
    LiveIndicatorDot
  },
  props: {
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.live-indicator {
  display: flex;
  align-items: center;
  margin-bottom: var(--space-3);
  @include typeface(body, 4);
  font-feature-settings: "lnum";
  text-transform: uppercase;
  color: RGB(var(--color-tag-text));
  font-weight: bold;
}

.live-indicator .live-indicator-wrapper {
  display: flex;
  align-items: center;
  background-color: RGB(var(--color-tag-background));
  border-radius: 3px;
  padding: 0 var(--space-1);
  margin-right: var(--space-2);
}

.live-indicator .live-indicator-live-text {
  @include typeface(body, 4);
  color: RGB(var(--color-tag-text));
  font-weight: bold;
  letter-spacing: 2px;
  margin-right: var(--space-1);
  text-transform: uppercase;
}

.live-indicator .live-indicator-dot {
  height: 12px;
  width: 12px;
}
</style>
