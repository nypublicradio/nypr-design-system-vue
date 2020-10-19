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
:root {
  --live-indicator-dot-color: #e74f4f;
}

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
  background-color: var(--live-indicator-dot-color);
  border-radius: 8px;
  height: 8px;
  width: 8px;
  margin: 0 8px;
}

.pulse {
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0 RGBA(var(--live-indicator-dot-color), 0.2);
  }
  100% {
    box-shadow: 0 0 0 20px RGBA(var(--live-indicator-dot-color), 0);
  }
}
</style>
