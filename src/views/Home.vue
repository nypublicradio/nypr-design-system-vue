<template>
  <div>
    <div>Home</div>
    <image-with-caption
      variation="gothamist"
      alt-text="alt Text"
      image="https://cms.demo.nypr.digital/images/212139/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/"
      :width="640"
      :height="426"
      :max-width="200"
      :max-height="302"
      credit="leadAsset value image credit"
      caption="leadAsset value caption || leadAsset value image caption"
      credit-url="leadAsset value image creditLink"
      allow-vertical-effect
    />

    <image-with-caption
      variation="gothamist"
      alt-text="alt Text"
      image="https://cms.demo.nypr.digital/images/212139/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/"
      :width="640"
      :height="426"
      :max-width="200"
      :max-height="302"
      credit="leadAsset value image credit"
      caption="leadAsset value caption || leadAsset value image caption"
      credit-url="leadAsset value image creditLink"
    />

    <image-with-caption
      variation="gothamist"
      alt-text="alt Text"
      image="https://cms.demo.nypr.digital/images/212129/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/"
      :width="640"
      :height="426"
      :max-width="1200"
      :max-height="800"
      credit="leadAsset value image credit"
      caption="leadAsset value caption || leadAsset value image caption"
      credit-url="leadAsset value image creditLink"
    />
    <image-with-caption
      variation="gothamist"
      alt-text="alt Text"
      image="https://cms.demo.nypr.digital/images/212135/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/"
      :width="640"
      :height="426"
      :max-width="3468"
      :max-height="4624"
      credit="leadAsset value image credit"
      caption="leadAsset value caption || leadAsset value image caption"
      credit-url="leadAsset value image creditLink"
    />

    <image-with-caption
      variation="gothamist"
      alt-text="alt Text"
      image="https://cms.demo.nypr.digital/images/212135/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/"
      :width="640"
      :height="426"
      :max-width="3468"
      :max-height="4624"
      credit="leadAsset value image credit"
      caption="leadAsset value caption || leadAsset value image caption"
      credit-url="leadAsset value image creditLink"
      allow-vertical-effect
    />
    <!--
    <v-card
      image="https://cdn.cms.demo.nypr.digital/images/South-Miami-Beach-South-Point-Park.2e16d0ba.fill-661x496.jpg"
      title="Title with some <em>HTML</em>"
      title-link="https://www.google.com"
      subtitle="Subtitle"
      :image-width="193"
      :image-height="170"
      :image-max-width="1280 || Infinity"
      :image-max-height="852 || Infinity"
    /> -->
  </div>
</template>

<script>
import ImageWithCaption from '../components/ImageWithCaption.vue'
// import VCard from '../components/VCard.vue'
export default {
  name: 'Home',
  components: {
    ImageWithCaption
    // VCard
  },
  mixins: [],
  layout: 'default',

  props: {
    var: {
      type: Array,
      default: () => []
    }
  },
  async asyncData ({ params }) {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  updated () {},
  created () {},
  mounted () {},
  methods: {},
  head () {
    return {}
  },
  unmounted () {}
}
</script>

<style lang="scss" scoped></style>
