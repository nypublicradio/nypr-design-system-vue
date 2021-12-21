<template>
  <div>
    <div v-if="allowVerticalEffect && isVertical" class="bg">
      <img
        :src="computedSrcBg"
        :width="width"
        :height="height"
        :alt="alt"
        loading="lazy"
      />
    </div>
    <img
      class="image"
      :class="isVertical ? 'is-vertical' : ''"
      :srcset="srcset"
      :src="computedSrc"
      :width="computedWidth"
      :height="height"
      :style="`width:${computedWidth}px;`"
      :alt="alt"
      loading="lazy"
      @click="$emit('click', $event.target.value)"
      @keypress="$emit('keypress', $event.target.value)"
    />
  </div>
</template>
<script>
/**
 * Responsive image component, generates a srcset with multiple image sizes for different display densities.
 */
export default {
  props: {
    /* alt text prop */
    alt: {
      type: String,
      default: null
    },
    /**
     * An image url template string with tokens to replace for width and height
     * e.g. "https://source.unsplash.com/random/%width%x%height%"
     * A plain image url here will also 'work' but you won't get additional sizes
     */
    src: {
      type: String,
      default: null
    },
    /**
     * The desired width for the 1x sized image.
     * this will also be added as an attribute to the image tag
     */
    width: {
      type: Number,
      default: null
    },
    /**
     * The desired height for the 1x sized image.
     * this will also be added as an attribute to the image tag
     */
    height: {
      type: Number,
      default: null
    },
    /**
     * Maximum width for the image. Generated sizes will be clipped to fit the max dimensions.
     * If you know the width of the original, full-sized image, use it here.
     */
    maxWidth: {
      type: Number,
      default: Infinity
    },
    /**
     * Maximum height for the image. Generated sizes will be clipped to fit the max dimensions.
     * If you know the height of the original, full-sized image, use it here.
     */
    maxHeight: {
      type: Number,
      default: Infinity
    },
    /**
     * Substring or regex within the urlto be replaced with width values.
     */
    widthToken: {
      type: [String, RegExp],
      default: '%width%'
    },
    /**
     * Substring or regex within the url to be replaced with height values.
     */
    heightToken: {
      type: [String, RegExp],
      default: '%height%'
    },
    /**
     * Substring or regex within the url to control jpg compression quality.
     */
    qualityToken: {
      type: [String, RegExp],
      default: '%quality%'
    },
    /**
     * List of display densities to generate sizes for in the srcset
     */
    sizes: {
      type: Array,
      default () {
        return [2, 3, 3.5, 4]
      }
    },
    /**
     * jpg compression quality
     */
    quality: {
      type: Number,
      default: 80
    },
    /**
     * allow the verticall effect to happen
     */
    allowVerticalEffect: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isVertical: {
        default: false,
        type: Boolean
      }
    }
  },
  computed: {
    computedWidth () {
      if (this.isVertical) {
        return this.getWidthFromHeight()
      } else {
        return this.width
      }
    },
    computedSrc () {
      const template = this.src
      if (template) {
        return template
          .replace(this.widthToken, this.computedWidth)
          .replace(this.heightToken, this.height)
          .replace(this.qualityToken, this.quality)
      } else {
        return undefined
      }
    },
    computedSrcBg () {
      const template = this.src
      if (template) {
        return template
          .replace(this.widthToken, this.width)
          .replace(this.heightToken, this.height)
          .replace(this.qualityToken, this.quality)
      } else {
        return undefined
      }
    },
    srcset () {
      const template = this.src
      if (template) {
        // If this is just a plain string with no tokens,
        // we don't need to generate a srcset
        if (
          template ===
          template.replace(this.widthToken, '').replace(this.heightToken, '')
        ) {
          return ''
        }
        let srcset = ''
        let lastImage = false
        for (const size of this.sizes) {
          /* continue if it is NOT the lastImage and the image has more pixels than its rendered area */
          if (!lastImage && this.maxWidth > this.computedWidth) {
            let width = Math.round(this.computedWidth * size)
            let height = Math.round(this.height * size)

            /* the image no longer has enough resolution to support the next srcset, use its maximum size and make it the last on the srcset list */
            if (width > this.maxWidth || height > this.maxHeight) {
              height = Math.round((height / width) * this.maxWidth)
              width = this.maxWidth
              lastImage = true
            }

            const url = template
              .replace(this.widthToken, width)
              .replace(this.heightToken, height)
              .replace(this.qualityToken, this.calcQuality(this.quality, size))
            srcset += `${url} ${size}x${
              size < this.sizes.length && !lastImage ? ',' : ''
            } `
          }
        }
        return srcset
      } else {
        return undefined
      }
    }
  },
  beforeMount () {
    // console.log('this.maxHeight = ', this.maxHeight)
    // console.log('this.maxWidth = ', this.maxWidth)
    if (this.allowVerticalEffect && this.maxHeight > this.maxWidth) {
      this.isVertical = true
      // console.log('this.isVertical = ', this.isVertical)
    } else {
      this.isVertical = false
      // console.log('this.isVertical = ', this.isVertical)
    }
  },
  methods: {
    calcQuality (quality, size) {
      return size >= 2 ? quality - Math.round(size * 5) : quality
    },
    getWidthFromHeight () {
      return Math.round(this.maxWidth / (this.maxHeight / this.height))
    },
    getHeightFromWidth () {
      return Math.round(this.maxHeight / (this.maxWidth / this.width))
    }
  }
}
</script>
<style lang="scss" scoped>
.image {
  position: relative;
  width: auto;
  &.is-vertical {
    margin: auto;
  }
}
.bg {
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  &:after {
    content: '';
    background-color: RGB(var(--color-black));
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.7;
  }
  img {
    width: 100%;
    filter: blur(3px) grayscale(100%);
    object-fit: cover;
    height: inherit;
  }
}
</style>
