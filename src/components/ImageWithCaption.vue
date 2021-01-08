<template>
  <figure class="image-with-caption">
    <div class="image-with-caption-wrapper">
      <div class="image-with-caption-image">
        <img
          v-if="image"
          :src="image"
          :alt="altText"
          :width="width"
          :height="height"
        >
        <div
          v-if="caption"
          class="image-with-caption-caption"
          :class="{'visible': captionVisible}"
        >
          <transition name="fade">
            <p v-show="captionVisible">
              {{ caption }}
            </p>
          </transition>
        </div>
      </div>
      <div
        v-if="caption"
        class="image-with-caption-icons"
        @click="toggleCaption"
      >
        <info-icon
          v-show="!captionVisible"
        />
        <close-icon
          v-show="captionVisible"
        />
      </div>
    </div>
    <figcaption
      v-if="credit"
      class="image-with-caption-credit"
    >
      <a
        v-if="creditUrl"
        :href="creditUrl"
        rel="noopener"
      >
        {{ credit }}
      </a>
      <template v-else>
        {{ credit }}
      </template>
    </figcaption>
  </figure>
</template>

<script>
import CloseIcon from '../components/icons/CloseIcon'
import InfoIcon from '../components/icons/InfoIcon'

export default {
  name: 'ImageWithCaption',
  components: {
    CloseIcon,
    InfoIcon
  },
  props: {
    altText: {
      default: null,
      type: String
    },
    caption: {
      default: null,
      type: String
    },
    credit: {
      default: null,
      type: String
    },
    creditUrl: {
      default: null,
      type: String
    },
    height: {
      default: null,
      type: String
    },
    image: {
      default: null,
      type: String
    },
    width: {
      default: null,
      type: String
    }
  },
  data () {
    return {
      captionVisible: false
    }
  },
  methods: {
    toggleCaption () {
      this.captionVisible = !this.captionVisible
    }
  }
}
</script>

<style lang="scss">
.image-with-caption .image-with-caption-image,
.image-with-caption .image-with-caption-wrapper {
  position: relative;
}

.image-with-caption .image-with-caption-caption {
  position: absolute;
  color: white;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: var(--space-3);
  transition: var(--animation-duration-standard);

  &.visible {
    background: rgba(var(--color-dark-gray), .7);
  }
}

.image-with-caption .image-with-caption-credit,
.image-with-caption .image-with-caption-caption p {
  @include typeface(body, 3);
  margin-right: var(--space-3);
}

.image-with-caption .image-with-caption-credit {
  margin-top: var(--space-1);
  text-align: right;
}

.image-with-caption .image-with-caption-icons {
  cursor: pointer;
  margin: 0 0 0 auto;
  position: absolute;
  bottom: var(--space-2);
  right: var(--space-2);
  z-index: 999;
}

.image-with-caption .info-icon,
.image-with-caption .o-close-icon {
  transition: var(--animation-duration-standard);
  width: 28px;
  height: 28px;

  &:hover {
    opacity: var(--opacity-hover);
  }
}

.image-with-caption .o-close-icon {
  padding: 6px;
}

.image-with-caption .o-close-icon path,
.image-with-caption .info-icon-i {
  fill: RGB(var(--color-white));
}

.image-with-caption .info-icon-bg {
  fill: RGB(var(--color-dark-gray));
}
</style>
