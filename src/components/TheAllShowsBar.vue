<template>
  <section class="l-container">
    <h2 class="u-space--double--bottom">
      All Shows
    </h2>
    <div
      class="l-grid l-grid--5up l-grid--3up--medium l-grid--2up--small"
    >
      <div>
        <a href="livestream">
          <img
            src="https://media.wnyc.org/i/600/600/l/80/1/ns_showcard-newsounds-radio-1.jpg"
            alt="new sounds"
            loading="lazy"
          >
        </a>
      </div>
      <div
        v-for="(show, index) in showsBar"
        :key="index"
      >
        <a :href="'shows/'+show.attributes.slug">
          <img
            :src="show.attributes.image.url"
            :alt="show.attributes.title"
            loading="lazy"
          >
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  import { getShows } from '../api'

  export default {
    name: 'TheAllShowsBar',
    data () {
      return {
        showsBar: []
      }
    },
    async created () {
      try {
        const response = await getShows()
        this.showsBar = response.data.data.attributes['bucket-items']
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>
