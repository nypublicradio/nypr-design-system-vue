<template>
  <div
    ref="thisPerson"
    class="person"
    :style="cssVars"
  >
    <div
      class="person-inner"
      :class="[hasDetails ? 'has-details' : '', image ? '' : 'no-image', orientation === 'vertical' ? 'vertical' : '', orientation === 'responsive' ? 'responsive' : '']"
    >
      <resize-observer @notify="onResize" />
      <!-- Image section -->
      <nuxt-link
        v-if="image"
        class="person-image-link"
        :class="!nameLink ? 'disabled' : ''"
        :to="nameLink ? nameLink : null"
        aria-hidden="true"
        role="presentation"
        tabindex="-1"
      >
        <div ref="imgRef">
          <span
            v-if="image"
            ref="visual"
            class="u-image__1x1 visual"
            :class="[circle ? 'circle' : '']"
          >
            <canvas
              ref="canvas"
              class="person-image"
            ></canvas>
            <img
              ref="img"
              class="person-image person-image-img"
              :src="image"
              :alt="name"
              role="presentation"
              loading="lazy"
              decoding="async"
            />
          </span>
          <div
            v-if="video"
            class="video-play-button"
            @click="handleVideoClick($event)"
          >
            <play-icon
              :title="`Play `+ name +`'s introduction video`"
              @click="$emit('componentEvent', video)"
            />
          </div>
        </div>
      </nuxt-link>

      <!-- Detail section -->
      <div
        v-if="hasDetails"
        ref="detailsRef"
        class="person-details"
      >
        <div
          v-if="name"
          role="heading"
          aria-level="3"
        >
          <nuxt-link
            class="person-name-link"
            :class="!nameLink ? 'disabled' : ''"
            :to="nameLink ? nameLink : null"
          >
            <span v-html="name" />
          </nuxt-link>
        </div>
        <span
          v-if="role"
          class="person-role"
        >
          <span v-html="role" />
          <a
            v-if="organization"
            :href="organizationLink"
            target="_blank"
            class="person-role"
            :class="[organizationLink ? 'link' : 'no-link']"
            v-html="organizationComputed"
          />
        </span>
        <div
          ref="blurbHolderRef"
          class="blurbHolder"
        >
          <div
            v-if="blurb"
            ref="blurbRef"
            :class="[truncate ? 'truncate' : '']"
            class="blurb"
            v-html="blurb"
          />
        </div>
        <a
          v-if="truncate"
          ref="readMoreRef"
          class="read-more"
          @click="handleBlurb()"
        >
          {{ readMore ? 'read less' : 'read more' }}
        </a>

        <share-tools
          v-if="social"
          class="social"
        >
          <share-tools-item
            v-for="(item, index) in socialArray"
            :key="index"
            :service="item.service"
            :username="item.username"
            :link="item.link"
            :label="item.label"
            :action="item.action"
            :url="item.url"
          />
        </share-tools>
      </div>
    </div>
    <div
      v-if="video && showVideo"
      class="video-holder"
      @click="handleVideoClick($event)"
    >
      <YouTube
        ref="youtubeLazyVideo"
        class="iframeHolder"
        :src="video"
        :vars="{autoplay: 1}"
      />

      <!-- close button in the upper right -->
      <div
        class="closer"
        @click="handleVideoClick($event)"
      >
        <close-icon />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'
import YouTube from 'vue3-youtube'
import PlayIcon from './icons/PlayIcon'
import { ResizeObserver } from 'vue3-resize'

import CloseIcon from './icons/CloseIcon'
import ShareTools from './ShareTools'
import ShareToolsItem from './ShareToolsItem'
gsap.registerPlugin(ScrollTrigger)

/**
 * A component for displaying details about a person
 */
export default {
  components: {
    ShareTools,
    ShareToolsItem,
    PlayIcon,
    CloseIcon,
    YouTube,
    ResizeObserver
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
     *  image scale in its container in vertical orientation only
     */
    imgScale: {
      type: String,
      default: '100'
    },
    /**
     *  adds a circle mask around the image.
     */
    circle: {
      type: Boolean,
      default: false
    },
    /**
     *  adds a basic animation to the component when it enters the viewport once. If an image and details are present, it will animate them individually. If either is missing, it will animate the entire component.
     */
    animate: {
      type: Boolean,
      default: false
    },
    /**
     *  youtube link to promo video
     */
    video: {
      type: String,
      default: null
    },
    /**
     *  Full name of the person.
     */
    name: {
      type: String,
      default: null
    },
    /**
     *  A URL pointing to the person's bio page or anywhere else they want to link to.
     */
    nameLink: {
      type: String,
      default: null
    },
    /**
     *  Organization this person is from.
     */
    organization: {
      type: String,
      default: null
    },
    /**
     *  link to the organization.
     */
    organizationLink: {
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
     *  maxium lines of text to show when truncarted
     */
    truncate: {
      type: [Boolean, String],
      default: false
    },
    /**
     *  persons website url
     */
    websiteUrl: {
      type: [String],
      default: null
    },
    /**
     *  persons website label
     */
    websiteLabel: {
      type: [String],
      default: null
    },
    /**
     *  persons email address
     */
    email: {
      type: [String],
      default: null
    },
    /**
     *  persons phone number
     */
    phoneNumber: {
      type: [String],
      default: null
    },
    /**
     *  social account array
     */
    social: {
      type: Array,
      default: null
    },
    /**
     *  horizontal(default), vertical, responsive (changes to vertical at the small break point)
     */
    orientation: {
      type: String,
      default: 'horizontal'
    }
  },
  data () {
    return {
      readMore: false,
      showVideo: false,
      inViewPort: false,
      windowSize: {}
    }
  },

  computed: {
    cssVars () {
      return {
        '--img-scale': this.imgScale ? this.imgScale + '%' : '100%',
        '--trunc-lines': this.truncate ? this.truncate : 'unset'
      }
    },
    hasDetails () {
      return !!this.role || !!this.blurb || !!this.social || !!this.name
    },
    organizationComputed () {
      return ' (' + this.organization + ')'
    },
    socialArray () {
      // Website, Email, Phone array
      const wepArray = []
      if (this.email) {
        wepArray.push({
          service: 'email',
          username: this.email
        })
      }
      if (this.phoneNumber) {
        wepArray.push({
          service: 'phone',
          username: this.phoneNumber
        })
      }
      if (this.websiteUrl) {
        wepArray.push({
          service: 'site',
          link: this.websiteUrl,
          label: this.websiteLabel ? this.websiteLabel : 'My site'
        })
      }
      return this.social.concat(wepArray)
    }
  },
  watch: {
    windowSize: function () {
      this.runHandleOnResizeDebounce()
    }
  },
  mounted () {
    // set of refs
    const { thisPerson, imgRef, detailsRef } = this.$refs

    // initial call of handleResize
    if (this.truncate) {
      this.handleResize()
    }
    // call method when "thisPerson" enters the viewport (once)
    if (this.image && this.isGIF(this.image)) {
      gsap.to(thisPerson, {
        scrollTrigger: thisPerson,
        onComplete: this.handleGifInViewPort
      })
    }

    // animate card when it enters the viewport
    if (this.animate) {
      const tl = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: thisPerson
        }
      })
      tl.from(thisPerson, { duration: 1, opacity: 0 })
      if (this.hasDetails && this.image) {
        tl.from(
          imgRef,
          {
            duration: 1,
            scale: 0.85,
            opacity: 0,
            ease: 'back.out'
          },
          '-=1'
        )
        tl.from(detailsRef, { duration: 1, opacity: 0 }, '-=0.5')
      } else {
        tl.from(thisPerson, { duration: 1, opacity: 0 })
      }
    }
    // running the resize code in a debounce and controlled by a watch method looking at a data var windowSize, which is updarted by the onResize method with the screen is resized
    this.runHandleOnResizeDebounce = this.debounce(() => {
      this.handleResize()
    }, 500)
  },
  methods: {
    handleBlurb () {
      const { blurbHolderRef, blurbRef } = this.$refs
      this.readMore = !this.readMore
      blurbRef.classList.toggle('expanded')

      gsap.to(blurbHolderRef, {
        duration: this.readMore ? 0.5 : 0.15,
        height: blurbRef.offsetHeight + 5,
        onComplete: this.handleResize
      })
    },
    debounce (fn, delay) {
      var timeoutID = null
      return function () {
        clearTimeout(timeoutID)
        var args = arguments
        var that = this
        timeoutID = setTimeout(function () {
          fn.apply(that, args)
        }, delay)
      }
    },
    onResize (size) {
      this.windowSize = size
    },
    handleResize () {
      if (!this.readMore && this.truncate) {
        console.log('debounced')
        const { blurbHolderRef, blurbRef, readMoreRef } = this.$refs
        const clamped = blurbRef.scrollHeight > blurbRef.clientHeight
        gsap.set(blurbHolderRef, { height: blurbRef.offsetHeight + 5 })
        readMoreRef.classList.toggle('show-me', clamped)
      }
    },
    handleVideoClick: function (event) {
      event.preventDefault()
      event.stopPropagation()
      this.$emit(' componentEvent', 'playing promo video')
      this.showVideo = !this.showVideo
    },
    handleGifInViewPort (inViewPort) {
      /* wait 10 seconds then swap out GIF with canvas render */
      this.inViewPort = inViewPort
      const { canvas, img } = this.$refs
      setTimeout(function () {
        const w = img.clientWidth
        const h = img.clientHeight
        canvas.setAttribute('width', w + 'px')
        canvas.setAttribute('height', h + 'px')
        canvas.getContext('2d').drawImage(img, 0, 0, w, h)
        img.remove()
        canvas.classList.add('show')
      }, 10000)
    },
    isGIF (imageURL) {
      return imageURL.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:gif)/g)
    }
  }
}
</script>

<style lang="scss">
@mixin person-vertical-styles {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  text-align: center;
  justify-items: center;
  .person-details .social {
    justify-self: center;
    margin-left: 0;
  }
  .person-image-link {
    width: var(--img-scale);
  }
}

.person {
  .person-inner {
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
      @include person-vertical-styles;
    }

    &.responsive {
      @include media("<small") {
        @include person-vertical-styles;
      }
    }
    .person-image-link {
      position: relative;
      align-self: start;
      justify-self: center;
      width: 100%;
      span.circle {
        position: relative;
        display: block;
        border-radius: 100%;
        overflow: hidden;
      }
      &.disabled {
        pointer-events: none;
      }
    }
    .person-image {
      height: 100%;
      object-fit: cover;
    }
    .u-image__1x1 {
      position: relative;
      display: block;
    }
    .visual {
      background: transparent;
      canvas {
        display: none;
        &.show {
          display: block;
        }
      }
    }
    .video-play-button {
      position: absolute;
      display: grid;
      bottom: 0;
      left: 0;
      width: 25%;
      height: 25%;
      @include media("<small") {
        top: 0;
        bottom: unset;
      }
      svg {
        opacity: 1;
        max-width: 40px;
        max-height: 40px;
        align-self: start;
        justify-self: center;
        @include media("<small") {
          align-self: end;
        }
        height: auto;
        path,
        polyline {
          fill: #ffffff;
          transition: var(--animation-easing-standard)
            var(--animation-duration-standard);
        }
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            path {
              fill: RGB(var(--color-primary-2));
            }
            .play,
            .inner-circle {
              stroke: #fff;
            }
          }
        }
        min-width: 40px;
        min-height: 40px;
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
        &.disabled {
          pointer-events: none;
        }
      }

      .person-role,
      .person-role a {
        color: inherit;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: var(--font-weight-header);
        font-size: var(--font-size-3);
        line-height: var(--line-height-2);
        overflow-wrap: anywhere;
        word-break: break-word;
        letter-spacing: 1.6px;
        &.no-link {
          pointer-events: none;
        }
      }
      .blurbHolder {
        overflow: hidden;
        .blurb {
          &.truncate {
            display: -webkit-box;
            -webkit-line-clamp: var(--trunc-lines);
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
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
    .vue3-resize-observer {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      pointer-events: none;
      display: block;
      overflow: hidden;
      opacity: 0;
    }
    .vue3-resize-observer object {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      pointer-events: none;
      z-index: -1;
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
    z-index: $z-index-100;
    max-width: 100%;
    .iframeHolder {
      width: 100% !important;
      height: 100% !important;
      position: absolute !important;
      iframe {
        width: calc(100vw - 100px) !important;
        height: calc(100vh - 80px) !important;
        max-width: 100%;
        position: absolute !important;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        @include media("<small") {
          width: 100vw !important;
          top: 40px;
          height: calc(100vh - 40px) !important;
        }
      }
    }
    .closer {
      position: absolute;
      cursor: pointer;
      top: 15px;
      right: 15px;
      width: 20px;
      height: 20px;
      svg {
        path {
          transition: var(--animation-easing-standard)
            var(--animation-duration-standard);
          fill: RGB(var(--color-white));
        }
      }
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          svg path {
            fill: RGB(var(--color-primary-2));
          }
        }
      }
    }
  }
}
</style>
