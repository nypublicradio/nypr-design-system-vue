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
    <audio-player
      livestream
      title="The Show"
      title-link="http://www.google.com"
      details="Lorem Ipsum Dolor Sit Amet this is a really long title so I can test this out!"
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
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
    components: { VSpacer, TheBrandBar, TheHeader, TheNewsletterSignup, TheAllShowsBar, TheAboutBar, TheFooter, AudioPlayer }
  }
</script>
