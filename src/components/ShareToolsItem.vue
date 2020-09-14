<template>
  <a
    :href="link"
    class="c-share-tools__link o-icon"
    :class="service"
    :aria-label="ariaLabel"
    target="_blank"
  >
    <component :is="service" />
  </a>
</template>

<script>
import Email from '../components/icons/email'
import Facebook from '../components/icons/facebook'
import Instagram from '../components/icons/instagram'
import Reddit from '../components/icons/reddit'
import Spotify from '../components/icons/spotify'
import Twitter from '../components/icons/twitter'
import Youtube from '../components/icons/youtube'

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
@import "../styles/themes/white-label/theme.legacy-variables";
@import "../styles/_library/base.mixins";
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