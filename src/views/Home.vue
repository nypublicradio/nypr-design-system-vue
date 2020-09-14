<template>
  <main class="home l-container">
    <h1>Home page</h1>
    <v-spacer size="triple" />
    <share-tools label="Connect">
      <share-tools-item
        service="facebook"
        username="WNYC"
      />
      <share-tools-item
        service="twitter"
        username="WNYC"
      />
      <share-tools-item
        service="instagram"
        username="WNYC"
      />
      <share-tools-item
        service="youtube"
        username="UCbysmY4hyViQAAYEzOR-uCQ"
      />
    </share-tools>
  </main>
</template>

<script>
  import VSpacer from '../components/VSpacer'
  import ShareTools from '../components/ShareTools'
  import ShareToolsItem from '../components/ShareToolsItem'

  export default {
    name: 'Home',
    components: { VSpacer, ShareTools, ShareToolsItem }
  }
</script>
