<template>
  <div class="live-indicator">
    <span class="live-indicator-live-text">Live</span> <span class="live-indicator-dot" /> {{ label }}
  </div>
</template>

<script>
export default {
  name: 'LiveIndicator',
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
  font-size: var(--font-size-3);
  font-weight: 400;
  margin-bottom: var(--space-3);
}

.live-indicator .live-indicator-live-text {
  font-weight: 700;
  text-transform: uppercase;
}

.live-indicator .live-indicator-dot {
  background-color: #e74f4f;
  border-radius: 8px;
  height: 8px;
  width: 8px;
  margin: 0 8px;
}
</style>
