<template>
  <section class="content-blade">
    <div
      class="l-grid"
      :class="getLayout()"
    >
      <div
        v-if="hasImage"
        :class="rightAligned ? 'l-grid--order-2-large' : 'l-grid--order-1-large'"
      >
        <img
          :src="image"
          :alt="altText"
        >
      </div>
      <div
        v-if="hasVideo"
        :class="rightAligned ? 'l-grid--order-2-large' : 'l-grid--order-1-large'"
      >
        <media-block :url="video" />
      </div>
      <div
        class="content-blade-content"
        :class="rightAligned ? 'l-grid--order-1-large' : 'l-grid--order-2-large'"
      >
        <p
          v-if="hasDate"
          class="content-blade-date u-space--bottom"
        >
          {{ date }}
        </p>
        <h3
          v-if="hasTitle && hasTitleLink"
          class="content-blade-title u-space--bottom"
          :class="{'featured': featured}"
        >
          <a :href="titleLink">{{ title }}</a>
        </h3>
        <h3
          v-if="hasTitle && !hasTitleLink"
          class="content-blade-title u-space--bottom"
          :class="{'featured': featured}"
        >
          {{ title }}
        </h3>
        <slot name="content" />
        <p
          v-if="hasLink && hasCta"
          class="content-blade-cta"
        >
          <a
            :href="link"
            target="_blank"
          >{{ cta }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import MediaBlock from './MediaBlock'

  export default {
    name: 'ContentBlade',
    components: {
      'media-block': MediaBlock
    },
    props: {
      alignment: {
        type: String,
        default: 'left'
      },
      altText: {
        type: String,
        default: null
      },
      cta: {
        type: String,
        default: 'Read More'
      },
      date: {
        type: String,
        default: null
      },
      featured: {
        type: Boolean,
        default: false
      },
      image: {
        type: String,
        default: null
      },
      layout: {
        type: String,
        default: 'equal'
      },
      link: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      titleLink: {
        type: String,
        default: null
      },
      verticalAlignment: {
        type: String,
        default: 'top'
      },
      video: {
        type: String,
        default: null
      }
    },
    computed: {
      hasCta () {
        return !!this.$props.cta
      },
      hasDate () {
        return !!this.$props.date
      },
      hasImage () {
        return !!this.$props.image
      },
      hasLink () {
        return !!this.$props.link
      },
      hasTitle () {
        return !!this.$props.title
      },
      hasTitleLink () {
        return !!this.$props.titleLink
      },
      hasVideo () {
        return !!this.$props.video
      },
      rightAligned () {
        return this.$props.alignment === 'right'
      },
      verticalAlignmentClass () {
        if (this.$props.verticalAlignment === 'middle') {
          return 'l-grid--middle'
        } else {
          return 'l-grid--top'
        }
      }
    },
    methods: {
      getLayout () {
        if (this.$props.alignment === 'right') {
          if (this.$props.layout === '2x3') {
            return 'l-grid--3x2 l-grid--1up--small l-grid--large-gutters ' + this.verticalAlignmentClass
          } else if (this.$props.layout === '1x4') {
            return 'l-grid--4x1 l-grid--1up--small l-grid--large-gutters ' + this.verticalAlignmentClass
          } else if (this.$props.layout === 'fixed') {
            return 'l-grid--fixed ' + this.verticalAlignmentClass
          } else {
            return 'l-grid--2up l-grid--large-gutters ' + this.verticalAlignmentClass
          }
        } else {
          if (this.$props.layout === '2x3') {
            return 'l-grid--2x3 l-grid--1up--small l-grid--large-gutters ' + this.verticalAlignmentClass
          } else if (this.$props.layout === '1x4') {
            return 'l-grid--1x4 l-grid--1up--small l-grid--large-gutters ' + this.verticalAlignmentClass
          } else if (this.$props.layout === 'fixed') {
            return 'l-grid--fixed ' + this.verticalAlignmentClass
          } else {
            return 'l-grid--2up l-grid--large-gutters ' + this.verticalAlignmentClass
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content-blade .content-blade-date {
    color: var(--color-light-gray);
  }

  .content-blade .content-blade-title {
    font-size: var(--font-size-6);
  }

  .content-blade .content-blade-title.featured {
    font-size: var(--font-size-16);
  }

  .content-blade .content-blade-title a,
  .content-blade .content-blade-title a:visited,
  .content-blade .content-blade-title a:active {
    color: var(--color-black);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
