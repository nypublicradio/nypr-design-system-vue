<template>
  <img
    :src="computedSrc"
    :srcset="srcset"
    :width="width"
    :height="height"
    @click="$emit('click', $event.target.value)"
    @keypress="$emit('keypress', $event.target.value)"
  >
</template>
<script>
export default {
props: {
    src: {
      type: String,
      default: null
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
    maxWidth: {
      type: Number,
      default: Infinity
    },
    maxHeight: {
      type: Number,
      default: Infinity
    },
    widthToken: {
      type: [String, RegExp],
      default: '%width%'
    },
    heightToken: {
      type: [String, RegExp],
      default: '%height%'
    },
    sizes: {
      type: Array,
      default () {
        return [1, 1.5, 2, 3]
      }
    }
  },
  computed: {
    computedSrc () {
      const template = this.src
      if (template) {
        return template
          .replace(this.widthToken, this.width)
          .replace(this.heightToken, this.height)
      } else {
        return undefined
      }
    },
    srcset () {
      const template = this.src
      if (template) {
        // If this is just a plain string with no tokens,
        // we don't need to generate a srcset
        if (template === template
            .replace(this.widthToken, '')
            .replace(this.heightToken, '')) {
          return ''
        }
        let srcset = ''
        for (const size in this.sizes) {
          let width = Math.round(this.width * size)
          let height = Math.round(this.height * size)
          if (width > this.maxWidth || height > this.maxHeight) {
            width = this.maxWidth
            height = this.maxHeight
          }
          const url = template
            .replace(this.widthToken, width)
            .replace(this.heightToken, height)
          srcset += `${url} ${size}x `
        }
        return srcset
      } else {
        return undefined
      }
    }
  }
}
</script>
