<template>
  <img
    :srcset="srcset"
    :src="computedSrc"
    :width="width"
    :height="height"
    @click="$emit('click', $event.target.value)"
    @keypress="$emit('keypress', $event.target.value)"
  />
</template>
<script>
/**
 * Responsive image component, generates a srcset with multiple image sizes for different display densities.
 */
export default {
  props: {
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
        return [1, 2, 3, 3.5, 4]
      }
    },
    /**
     * jpg compression quality
     */
    quality: {
      type: Number,
      default: 80
    }
  },
  computed: {
    computedSrc () {
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
          let width = Math.round(this.width * size)
          let height = Math.round(this.height * size)
          if (!lastImage) {
            if (width > this.maxWidth || height > this.maxHeight) {
              width = this.maxWidth
              // height = this.maxHeight
              height = Math.round(height * this.maxWidth / this.maxWidth)
              lastImage = true
            }
            const url = template
              .replace(this.widthToken, width)
              .replace(this.heightToken, height)
              .replace(this.qualityToken, this.calcQuality(this.quality, size))
            srcset += `${url} ${size}x${
              size <= this.sizes.length - 1 ? ',' : ''
            } `
          }
        }
        return srcset
      } else {
        return undefined
      }
    }
  },
  methods: {
    calcQuality (quality, size) {
      return size >= 2 ? quality - Math.round(size * 5) : quality
    }
  }
}
</script>
