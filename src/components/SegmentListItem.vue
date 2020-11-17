<template>
  <a
    v-if="url"
    :href="url"
    :target="newWindow && '_blank'"
    class="segment-list-item"
  >
    <div class="segment-list-item-title">
      {{ title }}
    </div>
    <div class="segment-list-item-icon">
      <simple-arrow-right />
    </div>
  </a>
  <div
    v-else
    class="segment-list-item"
  >
    {{ title }}
  </div>
</template>

<script>
import SimpleArrowRight from '../components/icons/SimpleArrowRight'

export default {
  name: 'SegmentListItem',
  components: {
    SimpleArrowRight
  },
  props: {
    newWindow: {
      default: false,
      type: Boolean
    },
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

.segment-list-item .segment-list-item-title {
  width: 100%;
}

.segment-list-item .segment-list-item-icon {
  height: var(--space-3);
  padding-left: var(--space-2);
}
</style>
