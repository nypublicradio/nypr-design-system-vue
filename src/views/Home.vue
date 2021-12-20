<template>
  <div>
    <div>Home</div>
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
  </div>
</template>

<script>
import ImageWithCaption from '../components/ImageWithCaption.vue'
export default {
  name: 'Home',
  components: {
    ImageWithCaption
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
