<template>
  <main class="home l-container">
    <h1>Home page</h1>
    <newsletter-signup />
  </main>
</template>

<script>
  import NewsletterSignup from '../components/NewsletterSignup'

  export default {
    name: 'Home',
    components: { NewsletterSignup }
  }
</script>
