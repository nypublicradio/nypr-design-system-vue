<template>
  <div>
    <the-header
      :donate-url="donateUrl"
      class="u-color-group-dark"
    >
      <template v-slot:menu>
        <the-menu
          class="not-fixed u-color-group-dark"
          :primary-nav="headerNav"
          :secondary-nav="footerNav"
          :legal-nav="legalNav"
        >
          <template v-slot:logo>
            <nuxt-link
              to="/"
              aria-label="gothamist home page"
            >
              <gothamist-logo />
            </nuxt-link>
          </template>
          <template v-slot:button>
            <div>
              <v-button
                :href="donateUrl"
                class="c-main-header__donate"
                label="Donate"
              />
            </div>
          </template>
          <template v-slot:component>
            <div>
              <v-button
                :href="'mailto:' + tipsEmail"
                label="Send A Story Idea"
                class="c-main-header__send-story"
              />
            </div>
          </template>
          <template v-slot:search>
            <div>
              <v-search action="/search" />
            </div>
          </template>
          <template v-slot:social>
            <div>
              <share-tools label="Follow Us">
                <share-tools-item
                  service="facebook"
                  username="gothamist"
                />
                <share-tools-item
                  service="twitter"
                  username="gothamist"
                />
                <share-tools-item
                  service="instagram"
                  username="gothamist"
                />
                <share-tools-item
                  service="youtube"
                  username="UCY_2VeS5Q9_sMZRhtvF0c5Q"
                />
              </share-tools>
            </div>
          </template>
        </the-menu>
      </template>
      <template v-slot:logo>
        <nuxt-link
          to="/"
          class="c-main-header__logo"
          aria-label="gothamist home page"
        >
          <gothamist-logo title="Gothamist" />
        </nuxt-link>
      </template>
      <template v-slot:navigation>
        <secondary-navigation
          orientation="horizontal"
          :nav-items="headerNav"
        />
      </template>
      <template v-slot:search>
        <v-search
          class="header-search-bar"
          action="/search"
          show-search-icon
          show-close-icon
          closed-on-load
          :search-is-active="false"
          transition="slide-left"
          donateUrl="http://www.bing.com"
        />
      </template>
    </the-header>
  </div>
</template>

<script>
export default {
  name: 'GothamistHeader',
  components: {
    SecondaryNavigation: () => import('../components/SecondaryNavigation'),
    TheHeader: () => import('../components/TheHeader'),
    GothamistLogo: () => import('../components/icons/gothamist/GothamistLogo'),
    VSearch: () => import('../components/VSearch'),
    TheMenu: () => import('../components/TheMenu'),
    VButton: () => import('../components/VButton'),
    ShareTools: () => import('../components/ShareTools'),
    ShareToolsItem: () => import('../components/ShareToolsItem')
  },
  data () {
    return {
      isHomepage: false,
      donateUrl: 'http://www.google.com',
      tipsEmail: 'kim@kim.com,',
      footerNav: [
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1'
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2'
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3'
        }
      ],
      headerNav: [
        {
          url: 'http://www.google.com',
          text: 'Primary Link 1'
        },
        {
          url: 'http://www.google.com',
          text: 'Primary Link 2'
        },
        {
          url: 'http://www.google.com',
          text: 'Primary Link 3'
        }
      ],
      legalNav: [
        {
          url: 'http://www.google.com',
          text: 'Legal Link 1'
        },
        {
          url: 'http://www.google.com',
          text: 'Legal Link 2'
        },
        {
          url: 'http://www.google.com',
          text: 'Legal Link 3'
        }
      ]
    }
  },
  mounted () {
    if (this.$route.name === 'index') {
      this.isHomepage = true
    }
  }
}
</script>

<style lang="scss">

</style>
