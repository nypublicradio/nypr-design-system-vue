<template>
  <div class="u-padding">
    <h1>Test Page</h1>
    <v-spacer size="double" />
    <v-accordion class="u-space--bottom">
      <template v-slot:header><h2>Header 1</h2></template>
      <template v-slot:content>
        <p>
          Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex
          <a href="#">ea commodo consequat</a>.
        </p>
      </template>
    </v-accordion>
    <v-spacer size="double" />
    <image-with-caption
      variation="gothamist"
      alt-text="image alt text"
      image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
      credit="AP Photo/Carolyn Kaster"
      caption="This is the caption lorem ipsum dolor sit amet, consectetur adipiscing elit"
      title="Title of Slide"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
    <image-with-caption
      variation="gothamist"
      alt-text="image alt text"
      image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
      credit="AP Photo/Carolyn Kaster"
      caption="This is the caption lorem ipsum dolor sit amet, consectetur adipiscing elit"
      title="Title of Slide"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
    <image-with-caption
      variation="gothamist"
      alt-text="image alt text"
      image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
      credit="AP Photo/Carolyn Kaster"
      caption="This is the caption lorem ipsum dolor sit amet, consectetur adipiscing elit"
      title="Title of Slide"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
    <image-with-caption
      variation="gothamist"
      alt-text="image alt text"
      image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
      credit="AP Photo/Carolyn Kaster"
      caption="This is the caption lorem ipsum dolor sit amet, consectetur adipiscing elit"
      title="Title of Slide"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
    <image-with-caption
      variation="gothamist"
      alt-text="image alt text"
      image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
      credit="AP Photo/Carolyn Kaster"
      caption="This is the caption lorem ipsum dolor sit amet, consectetur adipiscing elit"
      title="Title of Slide"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
    <v-spacer size="double" />
    <v-collection title="Related to this story">
      <v-card
        image="https://cdn.cms.demo.nypr.digital/images/South-Miami-Beach-South-Point-Park.2e16d0ba.fill-661x496.jpg"
        title="Half Of Open Streets Are Operational"
        title-link="/"
        subtitle="Jen Chung [Gothamist]"
        class="gothamist"
        :image-width="100"
        :image-height="100"
        :image-max-width="100 || Infinity"
        :image-max-height="100 || Infinity"
        :tags="[{'name': 'tag','slug': 'tag'}]"
      />
      <v-card
        image="https://cdn.cms.demo.nypr.digital/images/South-Miami-Beach-South-Point-Park.2e16d0ba.fill-661x496.jpg"
        title="Half Of Open Streets Are Operational"
        title-link="/"
        subtitle="Jen Chung [Gothamist]"
        class="gothamist"
        :image-width="100"
        :image-height="100"
        :image-max-width="100"
        :image-max-height="100"
        :tags="[{'name': 'tag','slug': 'tag'}]"
      />
      <v-card
        image="https://cdn.cms.demo.nypr.digital/images/South-Miami-Beach-South-Point-Park.2e16d0ba.fill-661x496.jpg"
        title="Half Of Open Streets Are Operational"
        title-link="/"
        subtitle="Jen Chung [Gothamist]"
        class="gothamist"
        :image-width="100"
        :image-height="100"
        :image-max-width="100 || Infinity"
        :image-max-height="100 || Infinity"
        :tags="[{'name': 'tag','slug': 'tag'}]"
      />
      <v-card
        image="https://cdn.cms.demo.nypr.digital/images/South-Miami-Beach-South-Point-Park.2e16d0ba.fill-661x496.jpg"
        title="Half Of Open Streets Are Operational"
        title-link="/"
        subtitle="Jen Chung [Gothamist]"
        class="gothamist"
        :image-width="100"
        :image-height="100"
        :image-max-width="100 || Infinity"
        :image-max-height="100 || Infinity"
        :tags="[{'name': 'tag','slug': 'tag'}]"
      />
    </v-collection>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="scss">

</style>
