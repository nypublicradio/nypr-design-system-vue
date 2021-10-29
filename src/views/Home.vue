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
            <gothamist-logo />
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
        <gothamist-logo title="Gothamist" />
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
          donate-url="http://www.bing.com"
        />
      </template>
    </the-header>
    <v-spacer size="quad" />
    <p>home page</p>
    <v-person
      orientation="responsive"
      image="https://c.tenor.com/l6wUDFLSnfQAAAAC/square-animation.gif"
      video="https://www.youtube.com/watch?v=LOS5WB75gkY"
      img-scale="70"
      circle
      animate
      name="Jen Chung"
      name-link="https://gothamist.com/staff/jen-chung"
      role="Executive Editor and Co-founder"
      organization="Gothamist"
      organization-link="https://gothamist.com/"
      blurb="Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order.Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order.Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order.Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order."
      truncate="2"
      :social="[
        {
            service: 'facebook',
            link: 'https://www.facebook.com/WNYC',
        },
        {
            service: 'twitter',
            link: 'https://twitter.com/WNYC'
        },
        {
            service: 'instagram',
            link: 'https://www.instagram.com/WNYC/'
        },
        {
            service: 'linkedin',
            link: 'https://www.linkedin.com/company/wnyc-radio/'
        },
        {
            service: 'youtube',
            link: 'https://www.youtube.com/channel/UCbysmY4hyViQAAYEzOR-uCQ'
        },
        {
            service: 'email',
            username: 'jchung@nypr.com'
        },
        {
            service: 'site',
            label: 'My site',
            link: 'https://www.google.com'
        }
    ]"
    />
    <v-person
      orientation="responsive"
      image="https://c.tenor.com/l6wUDFLSnfQAAAAC/square-animation.gif"
      video="https://www.youtube.com/watch?v=LOS5WB75gkY"
      img-scale="70"
      circle
      animate
      name="Jen Chung"
      name-link="https://gothamist.com/staff/jen-chung"
      role="Executive Editor and Co-founder"
      organization="Gothamist"
      organization-link="https://gothamist.com/"
      blurb="Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order.Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order.Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order.Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order."
      truncate="2"
      :social="[
        {
            service: 'facebook',
            link: 'https://www.facebook.com/WNYC',
        },
        {
            service: 'twitter',
            link: 'https://twitter.com/WNYC'
        },
        {
            service: 'instagram',
            link: 'https://www.instagram.com/WNYC/'
        },
        {
            service: 'linkedin',
            link: 'https://www.linkedin.com/company/wnyc-radio/'
        },
        {
            service: 'youtube',
            link: 'https://www.youtube.com/channel/UCbysmY4hyViQAAYEzOR-uCQ'
        },
        {
            service: 'email',
            username: 'jchung@nypr.com'
        },
        {
            service: 'site',
            label: 'My site',
            link: 'https://www.google.com'
        }
    ]"
    />
    <v-person
      orientation="responsive"
      image="https://c.tenor.com/l6wUDFLSnfQAAAAC/square-animation.gif"
      video="https://www.youtube.com/watch?v=LOS5WB75gkY"
      img-scale="70"
      circle
      animate
      name="Jen Chung"
      name-link="https://gothamist.com/staff/jen-chung"
      role="Executive Editor and Co-founder"
      organization="Gothamist"
      organization-link="https://gothamist.com/"
      blurb="Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order.Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order.Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order.Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law and Order."
      truncate="2"
      :social="[
        {
            service: 'facebook',
            link: 'https://www.facebook.com/WNYC',
        },
        {
            service: 'twitter',
            link: 'https://twitter.com/WNYC'
        },
        {
            service: 'instagram',
            link: 'https://www.instagram.com/WNYC/'
        },
        {
            service: 'linkedin',
            link: 'https://www.linkedin.com/company/wnyc-radio/'
        },
        {
            service: 'youtube',
            link: 'https://www.youtube.com/channel/UCbysmY4hyViQAAYEzOR-uCQ'
        },
        {
            service: 'email',
            username: 'jchung@nypr.com'
        },
        {
            service: 'site',
            label: 'My site',
            link: 'https://www.google.com'
        }
    ]"
    />
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
    VSpacer: () => import('../components/VSpacer'),
    ShareTools: () => import('../components/ShareTools'),
    ShareToolsItem: () => import('../components/ShareToolsItem'),
    VPerson: () => import('../components/VPerson')
  },
  data () {
    return {
      isHomepage: false,
      donateUrl: 'http://www.google.com',
      tipsEmail: 'kim@kim.com,',
      footerNav: [
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1',
          type: 'external_link',
          newWindow: true
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2',
          type: 'external_link',
          newWindow: true
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3',
          type: 'external_link',
          newWindow: true
        }
      ],
      headerNav: [
        {
          url: '/',
          text: 'Home Page',
          type: 'cms_page'
        },
        {
          url: '/test',
          text: 'Test Page',
          type: 'cms_page'
        },
        {
          url: 'http://www.google.com',
          text: 'Google Link 2',
          type: 'external_link',
          newWindow: true
        },
        {
          url: 'http://www.google.com',
          text: 'Google Link 3',
          type: 'external_link',
          newWindow: true
        }
      ],
      legalNav: [
        {
          url: 'http://www.google.com',
          text: 'Legal Link 1',
          type: 'external_link'
        },
        {
          url: 'http://www.google.com',
          text: 'Legal Link 2',
          type: 'external_link'
        },
        {
          url: 'http://www.google.com',
          text: 'Legal Link 3',
          type: 'external_link'
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
