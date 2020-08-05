<template>
  <main class="shows l-container">
    <h1 class="u-space--bottom">
      Shows
    </h1>
    <p class="u-space--triple--bottom">
      Perspectives you trust on the music you're about to love.
    </p>
    <div class="l-grid l-grid--4up l-grid--3up--medium l-grid--2up--small">
      <basic-card
        image="https://media.wnyc.org/i/600/600/l/80/1/ns_showcard-newsounds-radio-1.jpg"
        alt-text="New Sounds Radio"
        show="New Sounds Radio"
        show-link="livestream"
        link="livestream"
        description="A home for the musically curious. Serving hand-picked, genre-free music 24/7."
        class="u-space--bottom newsounds"
      />
      <basic-card
        v-for="(show, index) in shows"
        :key="index"
        :image="show.attributes.image.url"
        :alt-text="show.attributes.title"
        :show="show.attributes.title"
        :link="'shows/'+show.attributes.slug"
        :show-link="'shows/'+show.attributes.slug"
        :description="show.attributes.tease"
        class="u-space--bottom"
        :class="show.attributes.slug"
      />
    </div>
    <hr class="u-space--double--top u-space--double--bottom">
    <h2 class="u-space--double--bottom">
      Other Shows
    </h2>
    <div class="l-grid l-grid--4up l-grid--3up--medium l-grid--2up--small">
      <basic-card
        v-for="(show, index) in otherShows"
        :key="index"
        :show="show.attributes.title"
        :link="'shows/'+show.attributes.slug"
        :show-link="'shows/'+show.attributes.slug"
        :description="show.attributes.tease"
        class="u-space--bottom"
        :class="show.attributes.show"
      />
    </div>
    <hr class="u-space--double--top u-space--double--bottom">
    <the-recent-episodes-bar />
  </main>
</template>

<script>
  import { getShows, getOtherShows } from '../api'
  import TheRecentEpisodesBar from '../components/TheRecentEpisodesBar'
  import BasicCard from '../components/BasicCard'

  export default {
    name: 'ShowsPage',
    components: { TheRecentEpisodesBar, BasicCard },
    data () {
      return {
        shows: [],
        otherShows: []
      }
    },
    async created () {
      try {
        const response = await getShows()
        this.shows = response.data.data.attributes['bucket-items']
      } catch (e) {
        console.log(e)
      }
      try {
        const response = await getOtherShows()
        this.otherShows = response.data.data.attributes['bucket-items']
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>
