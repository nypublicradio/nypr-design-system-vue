<template>
  <div
    class="person"
    :class="[hasDetails ? 'has-details' : '', image ? '' : 'no-image', orientation === 'vertical' ? 'vertical' : '', orientation === 'responsive' ? 'responsive' : '']"
    :style="cssVars"
  >
    <div
      v-if="video && showVideo"
      class="video-holder"
    >
      <LazyYoutube
        ref="youtubeLazyVideo"
        :autoplay="true"
        :custom-title="name +`'s introduction video` "
        thumbnail-quality="medium"
        class="video"
        src="https://www.youtube.com/watch?v=LOS5WB75gkY"
      />
      <v-button
        class="mod-small closer"
        label="X"
        @click="handleVideoClick($event)"
      />
    </div>

    <template v-if=" nameLink && image">
      <nuxt-link
        class="person-link"
        :to="nameLink"
        aria-hidden="true"
        role="presentation"
        tabindex="-1"
        @click="$emit(' componentEvent', nameLink)"
      >
        <span
          v-if="image"
          :class="[circle ? 'circle' : '']"
          v-html="theVisualAsset"
        />
        <v-button
          v-if="video"
          class="mod-flat video-play-button"
          @click="handleVideoClick($event)"
        >
          <play-icon />
        </v-button>
      </nuxt-link>
    </template>
    <template v-else>
      <span
        v-if="image"
        :class="[circle ? 'circle' : '']"
        class="person-image-holder"
        style="justify-self: center;"
        v-html="theVisualAsset"
      />
      <v-button
        v-if="video"
        class="mod-flat video-play-button"
        @click="handleVideoClick($event)"
      >
        <play-icon />
      </v-button>
    </template>
    <div
      v-if="hasDetails"
      class="person-details"
    >
      <div
        v-if="name"
        role="heading"
        aria-level="3"
      >
        <nuxt-link
          v-if="nameLink"
          class="person-name-link"
          :to="nameLink"
          @click="$emit(' componentEvent', nameLink)"
        >
          <span v-html="name" />
        </nuxt-link>
        <template v-else>
          <span v-html="name" />
        </template>
      </div>
      <span
        v-if="role"
        class="role"
        v-html="role"
      />
      <div
        ref="blurbHolderRef"
        class="blurbHolder"
      >
        <div
          v-if="blurb"
          ref="blurbRef"
          class="blurb"
          v-html="blurb"
        />
      </div>
      <a
        v-if="truncate"
        class="read-more"
        ref="readMoreRef"
        @click="handleBlurb()"
      >
        {{ readMore ? 'read less' : 'read more' }}
      </a>

      <share-tools class="social">
        <share-tools-item
          service="facebook"
          username="WNYC"
        />
        <share-tools-item
          service="twitter"
          username="WNYC"
        />
        <share-tools-item
          service="instagram"
          username="WNYC"
        />
        <share-tools-item
          service="youtube"
          username="UCbysmY4hyViQAAYEzOR-uCQ"
        />
      </share-tools>
    </div>

  </div>
</template>

<script>
import gsap from 'gsap'
import { LazyYoutube } from 'vue-lazytube'
import VButton from './VButton'
import PlayIcon from './icons/PlayIcon'
import ShareTools from './ShareTools'
import ShareToolsItem from './ShareToolsItem'
let debounce
/**
 * A component for displaying details about a person
 */
export default {
  components: {
    ShareTools,
    ShareToolsItem,
    VButton,
    PlayIcon,
    LazyYoutube
  },
  props: {
    /**
     *  A URL pointing to an image of the person.
     */
    image: {
      type: String,
      default: null
    },
    /**
     *  adds a circle mask around the visual asset.
     */
    circle: {
      type: Boolean,
      default: false
    },
    /**
     *  Full name of the person.
     */
    name: {
      type: String,
      default: null
    },
    /**
     *  A URL pointing to the person's bio page.
     */
    nameLink: {
      type: String,
      default: null
    },
    /**
     *  The person's role or job. e.g. Host, Guest, Author, etc.
     */
    role: {
      type: String,
      default: null
    },
    /**
     *  Information about the author. e.g. "Jen is a blah blah..." etc.
     */
    blurb: {
      type: String,
      default: null
    },
    /**
     *  maxium characters to show when truncarted, defulat is 90 characters
     */
    truncate: {
      type: [Boolean, String],
      default: false
    },
    /**
     *  social account array
     */
    social: {
      type: Array,
      default: null
    },
    /**
     *  for a stacked vertical layout, string: horizontal(default), vertical, responsive (changes to vertical at the small greak point)
     */
    orientation: {
      type: String,
      default: 'horizontal'
    },
    /**
     *  % the image will scale in its container for orientation vertical only
     */
    imgScale: {
      type: String,
      default: '100'
    },
    /**
     *  % youtube link to promo video
     */
    video: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      readMore: false,
      showVideo: false
    }
  },
  computed: {
    cssVars () {
      return {
        '--img-scale': this.imgScale + '%',
        '--trunc-lines': this.truncate
      }
    },
    hasDetails () {
      return !!this.role || !!this.blurb || !!this.social || !!this.name
    },
    theVisualAsset () {
      return `
        <img
          class="person-image"
          src="${this.image}"
          alt="${this.name}"
          role="presentation"
          loading="lazy"
          decoding="async"
        />
    `
    }
  },
  mounted () {
    if (this.truncate) {
      window.addEventListener('resize', this.onResize)
    }
  },
  beforeDestroy () {
    if (this.truncate) {
      window.removeEventListener('resize', this.onResize)
    }
  },
  methods: {
    handleBlurb () {
      const { blurbHolderRef, blurbRef } = this.$refs
      this.readMore = !this.readMore
      blurbRef.classList.toggle('expanded')
      this.onResize()

      gsap.to(blurbHolderRef, {
        duration: this.readMore ? 0.5 : 0.15,
        height: blurbRef.offsetHeight + 5
      })
    },
    onResize () {
      if (!this.readMore) {
        clearTimeout(debounce)
        debounce = setTimeout(() => {
          const { blurbHolderRef, blurbRef, readMoreRef } = this.$refs
          const clamped = blurbRef.scrollHeight > blurbRef.clientHeight
          gsap.set(blurbHolderRef, { height: blurbRef.offsetHeight + 5 })
          readMoreRef.classList.toggle('show-me', clamped)
        }, 100)
      }
    },
    handleVideoClick: function (event) {
      event.preventDefault()
      event.stopPropagation()
      this.showVideo = !this.showVideo
    }
  }
}
</script>

<style lang="scss">
@mixin vertical-styles {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  text-align: center;
  justify-items: center;
  .person-details .social {
    justify-self: center;
    margin-left: 0;
  }
  .person-link,
  .person-image-holder {
    width: var(--img-scale);
  }
}

.person {
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  color: RGB(var(--color-text));
  &.has-details {
    grid-template-columns: 1fr 3fr;
  }
  &.no-image {
    grid-template-columns: 1fr;
  }
  &.vertical {
    @include vertical-styles;
  }

  &.responsive {
    @include media("<small") {
      @include vertical-styles;
    }
  }
  .person-link {
    align-self: start;
    justify-self: center;
    width: 100%;
    span.circle {
      position: relative;
      display: block;
      border-radius: 100%;
      overflow: hidden;
    }
  }
  .person-image {
    width: 100%;
    height: auto;
  }
  .video-play-button {
    position: absolute;
    margin-top: -6%;
    margin-left: 1%;
    &:hover {
      opacity: 1;
    }
    svg {
      &:hover {
        opacity: 1;
        .play,
        .inner-circle {
          stroke: RGB(var(--color-primary-1));
        }
      }
      width: 40px;
      height: 40px;
    }
  }
  .person-details {
    padding: 0 var(--space-3);
    display: grid;
    color: RGB(var(--color-text));
    font-family: var(--font-family-body);
    .person-name-link {
      color: RGB(var(--color-text));
      font-weight: var(--font-weight-header);
      font-size: var(--font-size-7);
      line-height: var(--line-height-2);
      overflow-wrap: anywhere;
      word-break: break-word;
      text-decoration: none;
    }

    .role {
      text-transform: uppercase;
      font-weight: var(--font-weight-header);
      font-size: var(--font-size-3);
      line-height: var(--line-height-2);
      overflow-wrap: anywhere;
      word-break: break-word;
      letter-spacing: 1.6px;
    }
    .blurbHolder {
      overflow: hidden;
      .blurb {
        display: -webkit-box;
        -webkit-line-clamp: var(--trunc-lines);
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-top: var(--space-1);
        font-weight: var(--font-weight-body);
        font-size: var(--font-size-4);
        line-height: var(--line-height-1);
        overflow-wrap: anywhere;
        word-break: break-word;
        &.expanded {
          -webkit-line-clamp: unset;
        }
      }
    }

    .social {
      margin-top: var(--space-2);
      margin-left: -16px;
    }

    .read-more {
      word-break: keep-all;
      cursor: pointer;
      color: RGB(var(--color-text));
      font-size: var(--font-size-2);
      letter-spacing: 0.6px;
      text-transform: uppercase;
      margin-top: -2px;
      display: none;
      &.show-me {
        display: block;
      }
    }
  }
  .video-holder {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 15;
    max-width: 100%;
    .video {
      width: 90vw;
      height: 90vh;
      max-width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    .closer {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
}
</style>
