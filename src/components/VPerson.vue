<template>
  <div
    id="person"
    ref="thisPerson"
    class="person"
    :style="cssVars"
  >
    <div
      v-resize="onResize"
      class="person-inner"
      :class="[hasDetails ? 'has-details' : '', image ? '' : 'no-image', orientation === 'vertical' ? 'vertical' : '', orientation === 'responsive' ? 'responsive' : '']"
    >
      <!-- Image section -->
      <a
        v-if="image"
        class="person-image-link"
        :class="!nameLink || onAuthorPage ? 'disabled' : ''"
        :href="nameLink ? nameLink : null"
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
              :alt="fullName"
              role="presentation"
              loading="lazy"
              decoding="async"
            />
          </span>
          <div
            v-if="video"
            class="video-play-button"
            :class="circle ? 'circle' : ''"
            @click="handleVideoClick($event)"
          >
            <play-icon-simple
              :class="showVideo ? 'is-playing' : ''"
              :title="(showVideo ? 'Close ' : 'Play ')+ fullName +`'s introduction video`"
            />
          </div>
        </div>
      </a>

      <!-- Detail section -->
      <div
        v-if="hasDetails"
        ref="detailsRef"
        class="person-details"
      >
        <div
          v-if="fullName"
          role="heading"
          aria-level="3"
        >
          <a
            class="person-name-link"
            :class="!nameLink || onAuthorPage ? 'disabled' : ''"
            :href="nameLink ? nameLink : null"
          >
            <span v-html="fullName" />
          </a>
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
          v-if="socialArrayData.length > 0"
          class="social"
        >
          <share-tools-item
            v-for="(item, index) in socialArrayData"
            :key="index"
            :service="item.service"
            :username="item.username"
            :link="item.profileUrl"
            :label="item.label"
            :action="item.action"
            :url="item.url"
          />
        </share-tools>
      </div>
      <div
        v-if="video && showVideo"
        ref="videoHolderRef"
        class="video-holder"
        @click="handleVideoClick($event)"
      >
        <iframe
          ref="youtubeRef"
          class="iframeHolder"
          type="text/html"
          :src="'https://www.youtube.com/embed/'+getYoutubeId(video)+'?autoplay=1'"
          frameborder="0"
          allowfullscreen
        >
        </iframe>
        <div
          class="closer"
          @click="handleVideoClick($event)"
        >
          <close-icon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayIconSimple from './icons/PlayIconSimple'
import CloseIcon from './icons/CloseIcon'
import ShareTools from './ShareTools'
import ShareToolsItem from './ShareToolsItem'

/**
 * A component for displaying details about a person
 */
export default {
  name: 'VPerson',
  components: {
    ShareTools,
    ShareToolsItem,
    PlayIconSimple,
    CloseIcon
  },
  directives: {
    resize: {
      // use mounted for vue3
      // the resize will not work in storybook as it is vue3 and Gothamist is Vue2
      inserted: function (el, binding) {
        const onResizeCallback = binding.value
        window.addEventListener('resize', () => {
          const width = document.documentElement.clientWidth
          const height = document.documentElement.clientHeight
          onResizeCallback({ width, height })
        })
      }
    }
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
    fullName: {
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
      type: String,
      default: null
    },
    /**
     *  persons website label
     */
    websiteLabel: {
      type: String,
      default: null
    },
    /**
     *  persons email address
     */
    email: {
      type: String,
      default: null
    },
    /**
     *  persons phone number
     */
    phoneNumbers: {
      type: Array,
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
    },
    /**
     *  If component is on the Author page, disables image and name links
     */
    onAuthorPage: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      readMore: false,
      showVideo: false,
      inViewPort: false,
      windowSize: {},
      socialArrayData: []
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
      return !!this.role || !!this.blurb || !!this.social || !!this.fullName
    },
    organizationComputed () {
      return ' (' + this.organization + ')'
    }
  },
  watch: {
    windowSize: function () {
      this.runHandleOnResizeDebounce()
    }
  },
  beforeMount () {
    this.socialArrayData = this.socialArray()
  },
  mounted () {
    const { thisPerson } = this.$refs

    // initial call of handleResize
    if (this.truncate) {
      this.handleResize()
    }

    if (this.animate) {
      thisPerson.classList.add('animate')
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log('in viewport')
          // stop GIF
          if (this.image && this.isGIF(this.image)) {
            this.handleGifInViewPort()
          }

          // animate
          if (this.animate) {
            thisPerson.classList.remove('animate')
          }
          observer.disconnect()
        }
      })
    })

    observer.observe(thisPerson)

    // running the resize code in a debounce and controlled by a watch method looking at a data var windowSize, which is updarted by the onResize method with the screen is resized
    this.runHandleOnResizeDebounce = this.debounce(() => {
      this.handleResize()
    }, 500)
  },
  methods: {
    getOffsetTop (el) {
      const rect = el.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return (rect.top + scrollTop) - 160 // 160 is the ~ height of the header buffer
    },
    handleBlurb () {
      this.readMore = !this.readMore
       this.$refs.blurbRef.classList.toggle('expanded')

      // animate height of blurb container (vue/nuxt3 w/ gsap)
      // gsap.to(blurbHolderRef, {
      //   duration: this.readMore ? 0.5 : 0.15,
      //   height: blurbRef.offsetHeight + 5,
      //   onComplete: this.handleResize
      // })

      if (!this.readMore) {
        window.scrollTo({
          top: this.getOffsetTop(this.$refs.thisPerson),
          behavior: 'smooth'
        })
     }
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
        const { blurbRef, readMoreRef } = this.$refs
        const clamped = blurbRef.scrollHeight > blurbRef.clientHeight
        readMoreRef.classList.toggle('show-me', clamped)
      }
    },
    handleVideoClick: function (event) {
      event.preventDefault()
      event.stopPropagation()
      this.$emit(' componentEvent', 'playing promo video')
      this.showVideo = !this.showVideo
      // if we are showing the video, it scrolls to the video
      if (this.showVideo) {
        setTimeout(() => {
          window.scrollTo({
            top: this.getOffsetTop(this.$refs.thisPerson) + this.$refs.videoHolderRef.offsetTop,
            behavior: 'smooth'
          })
        }, 100)
      }
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
    },
    getYoutubeId (url) {
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      var match = url.match(regExp)
      return match && match[7].length === 11 ? match[7] : false
    },
    socialArray () {
      // Website, Email, Phone array
      const wepArray = this.social ? this.social : []

      if (this.email) {
        wepArray.push({
          service: 'email',
          username: this.email
        })
      }
      if (this.phoneNumbers) {
        this.phoneNumbers.forEach((phone) => {
          wepArray.push({
            service: 'phone',
            username: phone.phoneNumber
          })
        })
      }
      if (this.websiteUrl) {
        wepArray.push({
          service: 'site',
          profileUrl: this.websiteUrl,
          label: this.websiteLabel ? this.websiteLabel : 'Website'
        })
      }
      return wepArray
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
@mixin aspect-ratio($width, $height) {
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: ($height / $width) * 100%;
  }
  > .iframeHolder {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.person {
  transition: all 1.5s;
  -webkit-transition: all 1.5s;
  &.animate {
    -moz-transform: scale(0.85);
    -webkit-transform: scale(0.85);
    -o-transform: scale(0.85);
    -ms-transform: scale(0.85);
    transform: scale(0.85);
    opacity: 0;
  }
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
    &.responsive {
      @include media("<small") {
        @include person-vertical-styles;
        .person-details {
          padding: 0 var(--space-1);
        }
      }
    }
    &.vertical {
      @include person-vertical-styles;
      .person-details {
          padding: 0 var(--space-1);
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
      bottom: 5px;
      left: 5px;
      @include media("<small") {
        top: 5px;
        bottom: unset;
        &.circle {
          top: 0;
          bottom: unset;
        }
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
        min-width: 40px;
        min-height: 40px;
      }
      &.circle {
        width: 25%;
        height: 25%;
        bottom: 0;
        left: 0;
      }
    }
    .person-details {
      padding: 0 var(--space-1) 0 var(--space-3);
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
    .video-holder {
      position: relative;
      display: block;
      align-self: stretch;
      grid-column: 1 / -1;
      margin: 15px auto 0 auto;
      width: 100%;
      .iframeHolder {
        width: 100% !important;
        height: 100% !important;
        iframe {
          width: 100% !important;
          height: 100% !important;
        }
      }
      @include aspect-ratio(16, 9);
      .closer {
        position: absolute;
        cursor: pointer;
        top: 3px;
        right: 5px;
        width: 15px;
        height: 15px;
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
}
</style>
