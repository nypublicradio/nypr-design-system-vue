<template>
  <main class="home l-container">
    <h1>Home page</h1>
    <v-spacer size="triple" />
    <v-button label="click me" />
    <v-lottie />
  </main>
</template>

<script>
import VSpacer from '../components/VSpacer'
import VButton from '../components/VButton'
import VLottie from '../components/animations/AudioWaveIsActiveJson.json'

export default {
  name: 'Home',
  components: {
    VSpacer,
    VButton,
    VLottie
  }
}
</script>
