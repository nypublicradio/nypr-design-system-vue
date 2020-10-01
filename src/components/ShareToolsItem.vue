<template>
  <a
    :href="link"
    class="c-share-tools__link o-icon"
    :class="service"
    :aria-label="ariaLabel"
    target="_blank"
    rel="noopener"
  >
    <component :is="service" />
  </a>
</template>

<script>
import Email from './icons/EmailIcon'
import Facebook from './icons/FacebookIcon'
import Instagram from './icons/InstagramIcon'
import Reddit from './icons/RedditIcon'
import Spotify from './icons/SpotifyIcon'
import Twitter from './icons/TwitterIcon'
import Youtube from './icons/YoutubeIcon'

export default {
  name: 'ShareToolsLink',
  components: {
    Email,
    Facebook,
    Instagram,
    Reddit,
    Spotify,
    Twitter,
    Youtube
  },
  props: {
    service: {
      type: String,
      default: null
    },
    username: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  },
  computed: {
    link () {
      switch (this.service) {
        case 'email': return 'mailto:' + this.username
        case 'facebook': return 'https://www.facebook.com/' + this.username
        case 'instagram': return 'https://www.instagram.com/' + this.username
        case 'spotify': return 'https://open.spotify.com/playlist/' + this.username
        case 'youtube': return 'https://www.youtube.com/channel/' + this.username
        case 'twitter': return 'https://www.twitter.com/' + this.username
        default: return ''
      }
    },
    ariaLabel () {
      return this.label ? this.label : 'Follow us on ' + this.service
    }
  }
}
</script>

<style
  lang="scss"
>
.c-share-tools__link {
  width: 30px;
  height: 30px;
  padding: 5px;
  margin: 0 4px;

  @include media(">small") {
    width: 40px;
  }
}

.c-share-tools__link path {
  transition: var(--animation-easing-standard) var(--animation-duration-standard);
}

.c-share-tools__link:hover path {
  fill: RGB(var(--color-primary-2));
}
</style>
