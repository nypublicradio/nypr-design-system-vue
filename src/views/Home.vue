<template>
  <main class="home l-container">
    <h1>Home page</h1>
    <basic-card
      has-cta
      title="Weekly Music Roundup: Hachalu Hundessa RIP, Monte, and Jorja Smith"
      title-link="http://www.bing.com"
      image="./assets/Placeholder-Image-1_1.png"
      alt-text="alternative text"
      show="Gig Alerts"
      show-link="http://www.google.com"
      date="1/11/2020"
      duration="30 min"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
    />
  </main>
</template>

<script>
  import BasicCard from '../components/BasicCard'

  export default {
    name: 'Home',
    components: { BasicCard }
  }
</script>
