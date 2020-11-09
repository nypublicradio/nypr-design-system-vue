<template>
  <figure class="image-with-caption">
    <div class="image-with-caption-image">
      <img
        v-if="image"
        :src="image"
        :alt="altText"
      >
      <div
        v-if="caption"
        class="image-with-caption-caption"
        :class="{'visible': captionVisible}"
      >
        <transition name="fade">
          <p v-if="captionVisible">
            {{ caption }}
          </p>
        </transition>
        <div
          @click="toggleCaption"
          class="image-with-caption-icons"
        >
          <info-icon
            v-if="!captionVisible"
          />
          <close-icon
            v-if="captionVisible"
          />
        </div>
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
    image: {
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
      console.log('kim')
      this.captionVisible = !this.captionVisible
    }
  }
}
</script>

<style lang="scss">
.image-with-caption .image-with-caption-image {
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
  margin-right: var(--space-2);
}

.image-with-caption .image-with-caption-credit {
  margin-top: var(--space-1);
  text-align: right;
}

.image-with-caption .image-with-caption-icons {
  cursor: pointer;
  margin: 0 0 0 auto;
}

.image-with-caption .o-close-icon {
  width: 16px;
  height: 16px;
}

.image-with-caption .info-icon {
  width: 28px;
  height: 28px;
  transition: var(--animation-duration-standard);

  &:hover {
    opacity: var(--opacity-hover);
  }
}

.image-with-caption .o-close-icon path,
.image-with-caption .info-icon {
  fill: RGB(var(--color-white));
}
</style>
