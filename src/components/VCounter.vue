<template>
  <nuxt-link
    v-if="value && value > 0"
    :to="href"
    class="counter"
  >
    <span
      v-if="icon"
      class="o-icon u-icon--xs"
    >
      <comment-icon
        v-if="icon === 'comment'"
        :aria-label="value + ' comments'"
      />
      <gallery-icon
        v-if="icon === 'gallery'"
        :aria-label="value + ' photos'"
      />
    </span>
    <div
      class="counter-text"
      aria-hidden="true"
    >{{ value }} {{ text }}</div>
  </nuxt-link>
</template>

<script>
import CommentIcon from './icons/CommentIcon'
import GalleryIcon from './icons/GalleryIcon'

export default {
  name: 'VCounter',
  components: {
    CommentIcon,
    GalleryIcon
  },
  props: {
    href: {
      type: String,
      default: null,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    value: {
      type: Number,
      default: 0,
      required: true
    }
  }
}
</script>

<style lang="scss">
.counter {
  position: relative;
  display: flex;
}

.counter .o-icon {
  position: relative;
  margin-right: var(--space-2);

  &:hover {
    opacity: 1;
  }

  svg {
    position: absolute;
    top: 3px;
  }

  path {
    fill: RGB(var(--color-link));
  }
}

.counter .counter-text {
  @include typeface(body, 4);
}
</style>
