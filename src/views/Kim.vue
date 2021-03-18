<template>
  <div class="l-container l-container--10col">
    <v-spacer />
    <header class="c-basic__header">
      <h1 class="c-basic__heading o-3d-heading">
        Contact Us
      </h1>
    </header>
    <v-spacer size="quad" />
    <v-card
      show-gallery-icon
      class="gothamist mod-vertical mod-large"
      image="http://placehold.it/640x430"
      :image-height="150"
      :image-width="150"
      title="'What’s The Point?': A Year After COVID Shut Down NYC Schools, Many Students Struggle To Cope"
      title-link="http://www.google.com"
      subtitle="Here's what the latest Campaign Finance Board filings tell us."
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
    <v-card
      show-gallery-icon
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
    <v-card
      show-gallery-icon
      class="gothamist mod-small"
      image="http://placehold.it/150x150"
      :image-height="150"
      :image-width="150"
      title="'What’s The Point?'"
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
  </div>
</template>

<script>
export default {
  name: 'KimsTestPage',
  components: {
    ArticleMetadata: () => import('../components/ArticleMetadata'),
    VCard: () => import('../components/VCard'),
    VCounter: () => import('../components/VCounter'),
    VByline: () => import('../components/VByline'),
    VSpacer: () => import('../components/VSpacer')
  }
}
</script>

<style lang="scss">

</style>
