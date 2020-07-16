<template>
  <header>
    <div
      class="l-container"
      :class="{'home':isHomePage}"
    >
      <div class="l-grid l-grid--2up u-padding--top u-padding--half--bottom">
        <div>
          <v-logo class="u-align--center--s" />
          <p
            v-if="isHomePage"
            class="u-align--center--s u-space--half--bottom"
          >
            Hand-picked music, genre free. 24/7 radio from New York City.
          </p>
        </div>
        <div
          class="u-align--right u-align--center--s"
          :class="{'u-hide-until--m':!isHomePage, 'u-space--double--bottom':isHomePage}"
        >
          <icon-links>
            <icon-link-item
              icon="/svg/facebook.svg"
              link="https://www.facebook.com/newsounds/"
              alt-text="Facebook"
              data-action="Header: social buttons"
              class="gtm__click-tracking"
            />
            <icon-link-item
              icon="/svg/twitter.svg"
              link="https://twitter.com/newsounds"
              alt-text="Twitter"
              data-action="Header: social buttons"
              class="gtm__click-tracking"
            />
            <icon-link-item
              icon="/svg/instagram.svg"
              link="https://www.instagram.com/newsounds/"
              alt-text="Instagram"
              data-action="Header: social buttons"
              class="gtm__click-tracking"
            />
            <icon-link-item
              icon="/svg/youtube.svg"
              link="https://www.youtube.com/channel/UC-8reoPK4lLyGUZjANQKxuA"
              alt-text="YouTube"
              data-action="Header: social buttons"
              class="gtm__click-tracking"
            />
            <icon-link-item
              icon="/svg/spotify.svg"
              link="https://www.spotify.com"
              alt-text="Spotify"
              data-action="Header: social buttons"
              class="gtm__click-tracking"
            />
          </icon-links>
        </div>
      </div>
      <hr>
      <div class="u-padding--half--top u-padding--half--bottom">
        <v-button
          class="u-display--inline-block gtm__click-tracking"
          data-action="Header: listen live"
        >
          Listen Live
        </v-button>
        <img
          class="u-display--inline-block"
          src="/img/sinewave.gif"
          alt="sine wave animation"
        >
      </div>
      <hr>
      <the-header-nav />
      <hr>
    </div>
  </header>
</template>

<script>
  import VLogo from './VLogo'
  import TheHeaderNav from './TheHeaderNav'
  import IconLinks from './IconLinks'
  import IconLinkItem from './IconLinkItem'
  import VButton from './VButton'

  export default {
    name: 'TheHeader',
    components: { VLogo, TheHeaderNav, IconLinks, IconLinkItem, VButton },
    computed: {
      isHomePage () {
        return this.$route.name === 'Home'
      }
    }
  }
</script>
