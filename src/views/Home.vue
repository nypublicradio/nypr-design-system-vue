<template>
  <main class="home l-container">
    <h1>Home page</h1>
    <v-spacer size="triple" />
    <v-button label="click me" />
  </main>
</template>

<script>
import VSpacer from '../components/VSpacer'
import VButton from '../components/VButton'

export default {
  name: 'Home',
  components: {
    VSpacer,
    VButton
  }
}
</script>
