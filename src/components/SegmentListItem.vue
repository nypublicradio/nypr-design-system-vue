<template>
  <a
    :href="url"
    class="segment-list-item"
  >
    <div>
      {{ title }}
    </div>
    <div class="segment-list-item-icon">
      <simple-arrow-right />
    </div>
  </a>
</template>

<script>
import SimpleArrowRight from '../components/icons/SimpleArrowRight'

export default {
  name: 'SegmentList',
  components: {
    SimpleArrowRight
  },
  props: {
    title: {
      default: null,
      type: String
    },
    url: {
      default: null,
      type: String
    }
  }
}
</script>

<style lang="scss">
.segment-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: var(--border-subtle);
  padding: var(--space-1) 0;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.segment-list-item .segment-list-item-icon {
  height: 18px;
  padding-left: var(--space-2);
}
</style>
