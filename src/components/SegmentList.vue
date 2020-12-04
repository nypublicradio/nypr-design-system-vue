<template>
  <div class="segment-list">
    <h3 class="segment-list-title">
      Segments
    </h3>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SegmentList'
}
</script>

<style lang="scss">
.segment-list .segment-list-title {
  @include typeface(body, 4);
  text-transform: uppercase;
  font-weight: bold;
}
</style>
