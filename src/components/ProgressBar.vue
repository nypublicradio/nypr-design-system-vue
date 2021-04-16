<template>
  <div class="progress-bar">
    <div
      class="progress-bar-progress"
      :style="'width: ' + percent + '%;'"
    />
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    percent: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.progress-bar {
  width: 100%;
}

.progress-bar-progress {
  height: var(--space-2);
  background-color: RGB(var(--color-primary-1));
}
</style>
