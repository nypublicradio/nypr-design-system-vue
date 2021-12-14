<template>
  <figure class="image-with-caption" :class="variation">
    <div class="image-with-caption-wrapper">
      <div class="image-with-caption-image">
        <a
          class="image-with-caption-image-link"
          :class="!imageUrl ? 'disabled' : ''"
          :href="imageUrl ? imageUrl : null"
          target="_blank"
        >
          <simple-responsive-image
            v-if="image"
            :src="image"
            :alt="altText"
            :width="width"
            :height="height"
            :max-width="maxWidth || Infinity"
            :max-height="maxHeight || Infinity"
            loading="lazy"
          />
        </a>
        <div
          v-if="caption"
          class="image-with-caption-caption"
          :class="{ visible: captionVisible }"
        >
          <transition name="fade">
            <p v-show="captionVisible">
              {{ caption }}
            </p>
          </transition>
        </div>
      </div>
      <div
        v-if="caption && !gothamistVariation"
        class="image-with-caption-icons"
        @click="toggleCaption"
      >
        <info-icon
          v-show="!captionVisible"
          class="image-with-caption-icons-info"
        />
        <close-icon
          v-show="captionVisible"
          class="image-with-caption-icons-close"
        />
      </div>
    </div>
    <figcaption v-if="credit || (caption && gothamistVariation)">
      <gothamist-arrow v-if="caption && gothamistVariation" />
      <div class="image-with-caption-credit">
        <div v-if="caption && gothamistVariation" class="gothamist-caption">
          {{ caption }}
        </div>
        <a
          v-if="creditUrl"
          :href="creditUrl"
          rel="noopener"
          class="image-with-caption-credit-link"
        >
          {{ credit }}
        </a>
        <span v-else>
          {{ credit }}
        </span>
      </div>
      <div v-if="title" class="image-with-caption-title">
        {{ title }}
      </div>
      <div v-if="description" class="image-with-caption-description">
        {{ description }}
      </div>
    </figcaption>
  </figure>
</template>

<script>
import CloseIcon from '../components/icons/CloseIcon'
import InfoIcon from '../components/icons/InfoIcon'
import GothamistArrow from '../components/icons/gothamist/GothamistArrow'
import SimpleResponsiveImage from '../components/SimpleResponsiveImage'

export default {
  name: 'ImageWithCaption',
  components: {
    CloseIcon,
    InfoIcon,
    GothamistArrow,
    SimpleResponsiveImage
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
    description: {
      default: null,
      type: String
    },
    height: {
      default: null,
      type: Number
    },
    urlTemplate: {
      default: null,
      type: String
    },
    variation: {
      default: null,
      type: String
    },
    width: {
      default: null,
      type: Number
    },
    widthInViewport: {
      default: null,
      type: Number
    },
    widthInViewportTablet: {
      default: null,
      type: Number
    },
    image: {
      default: null,
      type: String
    },
    imageUrl: {
      default: null,
      type: String
    },
    title: {
      default: null,
      type: String
    },
    maxHeight: {
      default: null,
      type: Number
    },
    maxWidth: {
      default: null,
      type: Number
    }
  },
  data () {
    return {
      captionVisible: false
    }
  },
  computed: {
    gothamistVariation () {
      return this.variation === 'gothamist'
    }
  },
  methods: {
    toggleCaption () {
      this.captionVisible = !this.captionVisible
      if (this.captionVisible) {
        this.$emit('componentEvent', 'Expanded')
      } else {
        this.$emit('componentEvent', 'Collapsed')
      }
    }
  }
}
</script>

<style lang="scss">
.image-with-caption {
  width: 100%;
}

.image-with-caption .image-with-caption-image,
.image-with-caption .image-with-caption-wrapper {
  position: relative;
}

.image-with-caption .image-with-caption-image-link.disabled {
  pointer-events: none;
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
    background: rgba(var(--color-dark-gray), 0.7);
  }
}

.image-with-caption .image-with-caption-credit,
.image-with-caption .image-with-caption-caption p {
  @include typeface(body, 3);
  margin-right: var(--space-3);
}

.image-with-caption .image-with-caption-credit {
  margin-left: var(--space-3);
  @media all and (min-width: $medium) {
    margin-left: 0;
  }
  margin-top: var(--space-1);
  text-align: right;
}

.image-with-caption.gothamist .image-with-caption-credit {
  margin-top: var(--space-1);
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}

.image-with-caption.gothamist .image-with-caption-credit-link {
  text-transform: uppercase;
  line-height: 20px;

  &:hover {
    background-color: RGB(var(--color-reddish-orange));
    color: RGB(var(--color-white));
  }
}

.image-with-caption.gothamist .image-with-caption-credit span {
  @include typeface(small, 1);
  letter-spacing: 1px;
  text-transform: uppercase;
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

.image-with-caption .gothamist-caption {
  display: flex;
  align-items: center;
  font-size: var(--font-size-4);
  margin-right: var(--space-2);
}

.image-with-caption .o-gothamist-arrow-icon {
  width: 20px;
  margin-top: -11px;
  margin-right: var(--space-2);
  float: left;

  path {
    fill: RGB(var(--color-reddish-orange));
  }
}

.image-with-caption .image-with-caption-title {
  @include typeface(header, 8);
  margin: var(--space-2) 0;
  clear: both;
}

.image-with-caption .image-with-caption-description {
  margin: var(--space-2) 0;
}
</style>
