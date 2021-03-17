<template>
  <div class="error-page l-container l-container--11col">
    <v-spacer size="quad" />
    <strong class="c-basic__header-kicker">
      404 Page Error
    </strong>
    <v-spacer />
    <h1
      class="c-basic__heading o-3d-heading"
      data-test-404-heading
    >
      The page you're looking for doesn't appear to exist.
    </h1>
    <v-spacer size="triple" />
    <image-with-caption
      variation="gothamist"
      alt-text="Realize the key to Zubaz is wearing them high. No need to rock these low. They do the work for you."
      image="https://gothamist-vue.demo.nypr.digital/404.jpg"
      caption="Realize the key to Zubaz is wearing them high. No need to rock these low. They do the work for you."
    />
    <v-spacer size="double" />
    <p class="o-rte-text">
      Welcome! The Gothamist page you're looking for doesn't appear to exist. Would you like to visit our
      <router-link to="/">
        Homepage
      </router-link>
      ? Or you can
      <router-link to="/search">
        search
      </router-link>
      for what you're looking for.
    </p>
    <v-spacer size="quad" />
    <div class="o-breadcrumbs">
      <a
        href="/news"
        class="o-breadcrumb"
      >News</a>
    </div>
    <v-spacer size="quad" />
    <h2 class="o-section__heading o-bg-text-accent">
      Recent Stories
    </h2>
    <v-spacer />
    <v-card
      class="gothamist mod-small"
      image="http://placehold.it/150x150"
      :image-height="150"
      :image-width="150"
      title="'What’s The Point?': A Year After COVID Shut Down NYC Schools, Many Students Struggle To Cope"
      title-link="http://www.google.com"
      :tags="[{'name': 'news','slug': 'news'},{'name': 'sponsored','slug': ''}]"
    >
      <article-metadata
        publish-date="Jan 1, 2020 1:25PM"
        updated-date="Mar 2, 2020 10:08AM"
      >
        <template v-slot:authors>
          <v-byline :authors="[{firstName: 'Jen',lastName: 'Chung',url: 'http://www.google.com',organization: 'Gothamist',organizationUrl: 'http://www.gothamist.com'}]" />
        </template>
        <template v-slot:comments>
          <v-counter
            icon="comment"
            text="Comments"
            value="40"
            href="http://www.google.com"
          />
        </template>
        <template v-slot:photos>
          <v-counter
            icon="gallery"
            text="Photos"
            value="40"
            href="http://www.google.com"
          />
        </template>
      </article-metadata>
    </v-card>
    <v-spacer size="quad" />
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  components: {
    ImageWithCaption: () => import('../components/ImageWithCaption'),
    ArticleMetadata: () => import('../components/ArticleMetadata'),
    VCard: () => import('../components/VCard'),
    VByline: () => import('../components/VByline'),
    VCounter: () => import('../components/VCounter'),
    VSpacer: () => import('../components/VSpacer')
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
