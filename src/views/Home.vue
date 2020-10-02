<template>
  <main class="home l-container">
    <theme-switcher>
      <h1>Home page</h1>
      <v-spacer size="triple" />
      <v-button label="click me" />
    </theme-switcher>
  </main>
</template>

<script>
import ThemeSwitcher from '../components/storybook/ThemeSwitcher'
import VSpacer from '../components/VSpacer'
import VButton from '@/components/VButton'

export default {
  name: 'Home',
  components: {
    ThemeSwitcher,
    VSpacer,
    VButton
  }
}
</script>
