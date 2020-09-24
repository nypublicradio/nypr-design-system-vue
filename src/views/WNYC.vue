<template>
  <div>
    <the-header>
      <wnyc-logo />
    </the-header>
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
    <the-footer
      slogan="Listener-supported WNYC is the home for independent journalism and courageous conversation on air and online. Broadcasting live from New York City on 93.9 FM and AM 820 and available online and on the go."
      :primary-nav="[
        {
          url: 'http://www.google.com',
          text: 'Primary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Primary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Primary Link 3',
        }
      ]"
      :secondary-nav="[
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3',
        }
      ]"
      :tertiary-nav="[
        {
          url: 'http://www.google.com',
          text: 'Tertiary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Tertiary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Tertiary Link 3',
        }
      ]"
      subheader1="Subheader 1"
      subheader2="Subheader 2"
    >
      <template v-slot:logo>
        <wnyc-logo />
      </template>
      <template v-slot:leftComponent>
        <p><em>slot for left component</em></p>
      </template>
      <template v-slot:rightComponent>
        <p><em>slot for right component</em></p>
      </template>
      <template v-slot:social>
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
      </template>
    </the-footer>
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter'
import TheHeader from '../components/TheHeader'
import WnycLogo from '../components/icons/wnyc/WnycLogo'

export default {
  name: 'Home',
  components: {
    TheFooter,
    TheHeader,
    WnycLogo
  }
}
</script>
