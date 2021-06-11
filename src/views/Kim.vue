<template>
  <div class="l-container">
    <v-spacer />
    <p>this is a test paragraph</p>
    <v-spacer />
    <v-banner
      tag="Breaking News"
      headline="Red Hook Tavern Is A Cozy Neighborhood Gathering Spot (With $22 Burgers)"
      description="<p>full description test with more text that <a href='http://www.google.com'>links</a> and has <i>other</i> <b>formatting.</b></p>"
    />
    <v-spacer />
    <header class="c-basic__header">
      <h1 class="c-basic__heading o-3d-heading">
        Contact Us
      </h1>
    </header>
    <v-spacer size="quad" />
    <div class="l-container l-container--12col">
      <h1 class="c-article__headline o-headline">
        Three Hundred Gallons Of Diesel Fuel Spilled In Times Square Hotel
      </h1>
      <v-spacer size="double" />
      <div class="l-container l-container--10col">
        <article-metadata
          publish-date="Jan 1, 2020 1:25PM"
          updated-date="Mar 2, 2020 10:08AM"
        >
          <template v-slot:authors>
            <v-byline :authors="[{firstName: 'Brian',lastName: 'Lehrer',url: 'http://www.google.com'}]" />
          </template>
          <template v-slot:comments>
            <v-counter
              text="comments"
              :value="40"
              href="http://www.google.com"
            />
          </template>
        </article-metadata>
        <v-spacer size="double" />
        <div class="l-container">
          <share-tools
            layout="column"
            class="c-article__share u-border-accent u-border-accent--right"
          >
            <share-tools-item
              service="email"
              link="mailto:test@test.com"
            />
            <share-tools-item
              service="facebook"
              link="https://www.facebook.com/npratc/"
            />
            <share-tools-item
              service="twitter"
              link="https://twitter.com/npratc/"
            />
            <share-tools-item
              service="instagram"
              link="https://www.instagram.com/npratc/"
            />
            <share-tools-item
              service="newsletter"
              link="https://www.mailchimp.com"
            />
          </share-tools>
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
        </div>
      </div>
    </div>
    <v-spacer size="quad" />
    <div
      class="c-article__contact"
    >
      <div class="do-you-know-the-scoop u-reversed-out o-3d-heading">
        <strong>Do you know the scoop?</strong>
        <a href="#comments">Comment</a> below or
        <a
          href="mailto:tips@gothamist.com"
          target="_blank"
          rel="noopener"
        >Send us a Tip</a>
      </div>
    </div>
    <v-spacer size="quad" />
    <v-spacer size="quad" />
    <v-card
      :image-width="640"
      :image-height="430"
      class="u-space--double--bottom mod-vertical mod-large"
      image="https://cdn.cms.demo.nypr.digital/original_images/vodka-martini-recipe-720x720.jpg"
      title="Card Title"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      :tags="[{'name': 'tag','slug': 'tag'}]"
    >
      <v-button
        href="http://www.google.com"
        label="Button"
      />
    </v-card>
    <v-spacer size="quad" />
    <v-spacer size="quad" />
    <v-card
      show-gallery-icon
      class="gothamist mod-vertical mod-large"
      image="https://cdn.cms.demo.nypr.digital/original_images/vodka-martini-recipe-720x720.jpg"
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
            :value="40"
            href="http://www.google.com"
          />
        </template>
      </article-metadata>
    </v-card>
    <v-spacer size="quad" />
    <v-card
      show-gallery-icon
      class="gothamist mod-small"
      image="https://cdn.cms.demo.nypr.digital/original_images/vodka-martini-recipe-720x720.jpg"
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
            :value="40"
            href="http://www.google.com"
          />
        </template>
        <template v-slot:photos>
          <v-counter
            icon="gallery"
            text="Photos"
            :value="40"
            href="http://www.google.com"
          />
        </template>
      </article-metadata>
    </v-card>
    <v-spacer size="quad" />
    <v-card
      show-gallery-icon
      class="gothamist mod-small"
      image="https://cdn.cms.demo.nypr.digital/original_images/vodka-martini-recipe-720x720.jpg"
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
            :value="40"
            href="http://www.google.com"
          />
        </template>
        <template v-slot:photos>
          <v-counter
            icon="gallery"
            text="Photos"
            :value="40"
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
    ShareTools: () => import('../components/ShareTools'),
    ShareToolsItem: () => import('../components/ShareToolsItem'),
    VBanner: () => import('../components/VBanner'),
    VButton: () => import('../components/VButton'),
    VCard: () => import('../components/VCard'),
    VCounter: () => import('../components/VCounter'),
    VByline: () => import('../components/VByline'),
    VSpacer: () => import('../components/VSpacer')
  }
}
</script>

<style lang="scss">
.do-you-know-the-scoop {
  width: 100%;
  padding: var(--space-4) !important;
  @include typeface(body, 6);
}

.do-you-know-the-scoop strong {
  margin-right: var(--space-2);
}

.do-you-know-the-scoop a:hover {
  text-decoration: underline;
}
</style>
