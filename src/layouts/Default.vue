<template>
  <div>
    <the-brand-bar />
    <v-spacer />
    <the-header />
    <v-spacer size="triple" />
    <main>
      <slot />
    </main>
    <v-spacer size="triple" />
    <the-newsletter-signup />
    <v-spacer size="triple" />
    <the-all-shows-bar />
    <v-spacer size="double" />
    <hr class="l-container">
    <v-spacer size="double" />
    <the-about-bar />
    <v-spacer size="double" />
    <hr class="l-container">
    <v-spacer size="double" />
    <the-footer />
    <v-spacer size="sept" />
    <keep-alive>
      <transition name="slide">
        <audio-player
          v-if="this.$store.state.nowPlaying"
          :livestream="this.$store.state.livestream"
          :title="this.$store.state.nowPlaying['show-title']"
          :title-link="'shows/'+this.$store.state.nowPlaying.show"
          :details="this.$store.state.nowPlaying.title"
          :details-link="'story/'+this.$store.state.nowPlaying.slug"
          :file="this.$store.state.nowPlaying.audio"
        />
      </transition>
    </keep-alive>
  </div>
</template>

<script>
  import VSpacer from '../components/VSpacer'
  import TheBrandBar from '../components/TheBrandBar'
  import TheHeader from '../components/TheHeader'
  import TheNewsletterSignup from '../components/TheNewsletterSignup'
  import TheAllShowsBar from '../components/TheAllShowsBar'
  import TheAboutBar from '../components/TheAboutBar'
  import TheFooter from '../components/TheFooter'
  import AudioPlayer from '../components/AudioPlayer'

  export default {
    name: 'Default',
    components: {
      VSpacer,
      TheBrandBar,
      TheHeader,
      TheNewsletterSignup,
      TheAllShowsBar,
      TheAboutBar,
      TheFooter,
      AudioPlayer
    }
  }
</script>
