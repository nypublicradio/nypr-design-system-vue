import ContentBlade from '../src/components/ContentBlade'

export default {
  title: 'Content Card',
  component: ContentBlade
}

export const MediaOnLeft = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        date="1/11/2020"
        title="Title Lorem Ipsum Dolor"
        title-link="http://www.google.com"
        link="http://www.google.com"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </template>
      </content-blade>
    </div>
  `
})

export const MediaOnRight = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Title Lorem Ipsum Dolor"
        title-link="http://www.google.com"
        link="http://www.bing.com"
        cta="check this out"
        video="https://player.vimeo.com/video/90283590"
        alignment="right"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </template>
      </content-blade>
    </div>
  `
})

export const FeaturedVideoExample = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Watch Adia Victoria, In-Studio"
        title-link="http://www.google.com"
        link="http://www.google.com"
        video="https://player.vimeo.com/video/90283590"
        cta="Watch more New Sounds videos"
      >
        <template slot="content">
          <p>
            Nashville-based singer-songwriter, guitarist, and poet Adia Victoria crafts Southern Gothic pop deeply
            rooted in the blues. She performs new songs from her record, “Silences”, in-studio.
          </p>
        </template>
      </content-blade>
    </div>
  `
})

export const FeaturedContentBladeExample = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        featured
        date="1/11/2020"
        title="Weekly Music Roundup: Lisel, Bab L’ Bluz, and Samora Pinderhughes"
        title-link="http://www.google.com"
        link="http://www.google.com"
        image="./assets/Placeholder-Image-1_1.png"
        cta="Read More"
        layout="1x4"
      >
        <template slot="content">
          <p>
            This week, a quiet song of protest from Samora Pinderhughes, a noisy song from quarantine by Lisel, and an
            ode to the NYC subways from Max Richter. Plus, Moroccan trance by Bab L' Bluz.
          </p>
        </template>
      </content-blade>
    </div>
  `
})


export const MiddleAlignment = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
        verticalAlignment="middle"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
          </p>
        </template>
      </content-blade>
    </div>
  `
})

export const TwoThirdsLayout = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
        layout="2x3"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </template>
      </content-blade>
    </div>
  `
})

export const TwoThirdsWithMediaOnRight = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
        layout="2x3"
        alignment="right"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </template>
      </content-blade>
    </div>
  `
})

export const OneQuarterLayout = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
        layout="1x4"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </template>
      </content-blade>
    </div>
  `
})

export const OneQuarterWithMediaOnRight = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
        layout="1x4"
        alignment="right"
      >
        <template slot="content">
          <p>Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
            lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
            ultrices
          </p>
        </template>
      </content-blade>
    </div>
  `
})

export const FixedImageLayout = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="./assets/Placeholder-Image-1_1.png"
        alt-text="alt text"
        layout="fixed"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </template>
      </content-blade>
    </div>
  `
})
