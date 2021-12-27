<template>
  <div>
    <div>VPerson</div>

    <!-- <v-person
      full-name="Jen Chung"
      name-link="https://gothamist.com/staff/jen-chung"
      role="Executive Editor and Co-founder"
      blurb="Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order. "
    /> -->
    <!-- <Button label="Submit" /> -->
  </div>
</template>

<script>
// import { VPerson } from 'nypr-design-system-vue/src/components/VPerson.vue'
// import PrimeVue from 'primevue/config'
/* import Button from 'primevue/button' */
export default {
  name: 'HomePage',
  components: {
    // VPerson,
    /* PrimeVue, */
    // Button,
  },
  mixins: [],
  props: {
    var: {
      type: Array,
      default: () => [],
    },
  },
  async asyncData({ params }) {},
  data() {
    return {}
  },
  head() {
    return {}
  },
  computed: {},
  watch: {},
  updated() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
