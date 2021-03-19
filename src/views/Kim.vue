<template>
  <div class="l-container l-container--10col">
    <v-spacer />
    <header class="c-basic__header">
      <h1 class="c-basic__heading o-3d-heading">
        Contact Us
      </h1>
    </header>
    <v-spacer size="quad" />
    <div class="c-article__contact" data-test-article-footer-contact="">

      <!---->

      <div id="ember152" class="c-contact-tout o-rte-text u-reversed-out o-3d-heading ember-view">
        <p><strong>Do you know the scoop?</strong> &nbsp; <a href="#comments">Comment</a> below or <a href="mailto:tips@gothamist.com" target="_blank" rel="noopener">Send us a Tip</a></p>
      </div>
    </div>
    <v-spacer size="quad" />
    <gallery-preview
      variation="gothamist"
      :count="19"
      gallery-url="http://www.google.com"
      :images="
        [
          {url:'http://placehold.it/640x500?text=1', thumbnail:'http://placehold.it/150x150?text=1', alt:'alt 1',caption:'caption 1',credit:'1 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'},
          {url:'http://placehold.it/640x500?text=2', thumbnail:'http://placehold.it/150x150?text=2', alt:'alt 2',caption:'caption 2',credit:'2 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'},
          {url:'http://placehold.it/640x500?text=3', thumbnail:'http://placehold.it/150x150?text=3', alt:'alt 3',caption:'caption 3',credit:'3 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'},
          {url:'http://placehold.it/640x500?text=4', thumbnail:'http://placehold.it/150x150?text=4', alt:'alt 4',caption:'caption 4',credit:'4 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'}
        ]
      "
    />
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
    GalleryPreview: () => import('../components/GalleryPreview'),
    VCard: () => import('../components/VCard'),
    VCounter: () => import('../components/VCounter'),
    VByline: () => import('../components/VByline'),
    VSpacer: () => import('../components/VSpacer')
  }
}
</script>

<style lang="scss">

</style>
