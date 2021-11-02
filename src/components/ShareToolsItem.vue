<template>
  <a
    v-if="action === 'follow'"
    :href="username ? socialLink : link"
    class="c-share-tools__link o-icon"
    :class="service"
    :aria-label="ariaLabel"
    target="_blank"
    rel="noopener"
    @click="$emit('follow', service)"
  >
    <component
      :is="service"
      v-if="service !== 'site'"
    />
    <span v-else>{{ label }}</span>
  </a>

  <button
    v-else-if="action === 'share'"
    class="share-tools-button"
    @click="share"
  >
    <component :is="service" />
  </button>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import Email from './icons/EmailIcon'
import Phone from './icons/PhoneIcon'
import Facebook from './icons/FacebookIcon'
import Instagram from './icons/InstagramIcon'
import Linkedin from './icons/LinkedinIcon'
// eslint-disable-next-line import/no-duplicates
import Newsletter from './icons/EmailIcon'
import Reddit from './icons/RedditIcon'
import Spotify from './icons/SpotifyIcon'
import Twitter from './icons/TwitterIcon'
import Youtube from './icons/YoutubeIcon'
import VButton from './VButton'

const URL_PLACEHOLDER_PATTERN = new RegExp('%URL%', 'g')
const SOCIAL_SERVICE_MAP = {
  spotify: {
    profileBase: 'https://open.spotify.com/playlist/'
  },
  facebook: {
    profileBase: 'https://www.facebook.com/',
    shareBase: 'https://www.facebook.com/sharer.php',
    urlKey: 'u'
  },
  linkedin: {
    profileBase: 'https://www.linkedin.com/in/',
    shareBase: 'https://www.linkedin.com/sharing/share-offsite/'
  },
  twitter: {
    profileBase: 'https://twitter.com/',
    shareBase: 'https://twitter.com/intent/tweet'
  },
  reddit: {
    profileBase: 'https://www.reddit.com/r/',
    shareBase: 'https://www.reddit.com/submit'
  },
  instagram: {
    profileBase: 'https://www.instagram.com/'
  },
  youtube: {
    profileBase: 'https://www.youtube.com/channel/'
  },
  email: {
    profileBase: 'mailto:',
    shareBase: 'mailto:',
    omitUrl: true
  },
  phone: {
    profileBase: 'tel:',
    shareBase: 'tel:',
    omitUrl: true
  }
}

export default {
  name: 'ShareToolsLink',
  components: {
    Email,
    Phone,
    Facebook,
    Instagram,
    Linkedin,
    Newsletter,
    Reddit,
    Spotify,
    Twitter,
    Youtube,
    VButton
  },
  props: {
    action: {
      type: String,
      default: 'follow'
    },
    service: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    },
    shareParameters: {
      type: Object,
      default: () => ({})
    },
    utmParameters: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    socialLink () {
      return SOCIAL_SERVICE_MAP[this.service]?.profileBase + this.username || ''
    },
    shareBase () {
      return SOCIAL_SERVICE_MAP[this.service]?.shareBase || ''
    },
    shareUrl () {
      const utmParams = Object.entries(this.utmParameters).map(
        ([key, value]) => {
          return 'utm_' + key + '=' + encodeURIComponent(value)
        }
      )
      let url = this.url
      if (utmParams.length > 0) {
        url = url + '?' + utmParams.join('&')
      }

      const shareParams = Object.entries(this.shareParameters).map(
        ([key, value]) => {
          return (
            key +
            '=' +
            encodeURIComponent(value.replace(URL_PLACEHOLDER_PATTERN, url))
          )
        }
      )

      let params = shareParams

      const shouldOmitUrl = SOCIAL_SERVICE_MAP[this.service]?.omitUrl
      if (!shouldOmitUrl) {
        const urlKey = SOCIAL_SERVICE_MAP[this.service]?.urlKey || 'url'
        const urlParam = urlKey + '=' + encodeURIComponent(url)
        params = [urlParam, ...params]
      }

      return this.shareBase + '?' + params.join('&')
    },
    ariaLabel () {
      if (this.label) {
        return this.label
      } else if (this.action === 'follow') {
        return 'Follow us on ' + this.service
      } else if (this.action === 'share') {
        return 'Share on ' + this.service
      }
      return ''
    }
  },
  methods: {
    share () {
      if (!this.service) {
        return
      }

      this.$emit('share', this.service)

      function getPopupPosition () {
        const screenLeft = screen.availLeft
        const screenTop = screen.availTop

        const windowWidth = screen.availWidth
        const windowheight = screen.availHeight

        const left = windowWidth / 2 - 600 / 2 + screenLeft
        const top = windowheight / 2 - 600 / 2 + screenTop

        return { left: left, top: top }
      }

      const windowString = ({ top, left }) =>
        `location=no,toolbar=no,menubar=no,scrollbars=no,status=no,width=550,height=600,top=${top},left=${left}`
      const popupPosition = getPopupPosition()
      const newWindow = window.open(
        this.shareUrl,
        'share window',
        windowString(popupPosition)
      )

      // make sure it actually opened and bring it to the front
      if (
        typeof newWindow !== 'undefined' &&
        newWindow !== null &&
        newWindow.focus
      ) {
        newWindow.focus()
      }
    }
  }
}
</script>

<style
  lang="scss"
>
.share-tools-button,
.c-share-tools__link {
  width: 30px;
  height: 30px;
  padding: 5px;
  margin: 0 4px;

  @include media(">small") {
    width: 40px;
  }
}

.share-tools-button svg > *,
.c-share-tools__link svg > * {
  transition: var(--animation-easing-standard)
    var(--animation-duration-standard);
}

.share-tools-button:hover svg > *,
.c-share-tools__link:hover svg > * {
  fill: RGB(var(--color-primary-2)) !important;
}

.c-share-tools__link.phone svg {
  padding: 1px;
  margin: auto;
  position: relative;
  display: block;
}
.c-share-tools__link.site {
  color: var(--color-text);
  width: auto;
  display: grid;
  align-content: center;
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-subheader);
  line-height: var(--line-height-1);
  transition: var(--animation-easing-standard)
    var(--animation-duration-standard);
  &:hover {
    color: RGB(var(--color-primary-2));
    text-decoration: underline;
  }
  @include media(">small") {
    font-size: var(--font-size-4);
  }
}

.share-tools-button > *,
.c-share-tools__link > * {
  pointer-events: none;
}

.share-tools-button {
  display: inline-block;
  border: none;
  border-radius: 0;
  background: none;
  cursor: pointer;
}
</style>
