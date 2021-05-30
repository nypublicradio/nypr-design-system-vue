<template>
  <a
    :href="href"
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
    >
      {{ value }} {{ text }}
    </div>
  </a>
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
      type: [String, Number, null],
      default: null,
      required: true
    }
  }
}
</script>

<style lang="scss">
.counter {
  display: flex;
}

.counter .o-icon {
  margin: -3px var(--space-2) 0 0;

  &:hover {
    opacity: 1;
  }

  path {
    fill: RGB(var(--color-link));
  }
}

.counter .counter-text {
  @include typeface(body, 4);
  line-height: 16px;
}
</style>
