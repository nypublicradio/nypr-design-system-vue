<template>
  <section class="recent-episodes l-container">
    <h2 class="u-space--double--bottom">
      Recent Episodes
    </h2>
    <div
      class="l-grid l-grid--4up l-grid--3up--medium l-grid--2up--small"
    >
      <basic-card
        v-for="(episode, index) in recentEpisodes"
        :key="index"
        :image="episode.attributes['image-main'].url"
        :alt-text="episode.attributes.title"
        :show="episode.attributes['show-title']"
        :title="episode.attributes.title"
        :duration="episode.attributes['audio-duration-readable']"
        :date="episode.attributes.newsdate | formatDate"
        class="u-space--bottom"
        :class="episode.attributes.show"
        tabindex="0"
        @click.native="playAudio(episode.attributes)"
        @keypress.native.enter.space="playAudio(episode.attributes)"
      />
    </div>
  </section>
</template>

<script>
  import { getRecentEpisodes } from '../api'
  import BasicCard from '../components/BasicCard'

  export default {
    name: 'TheRecentEpisodesBar',
    components: { BasicCard },
    filters: {
      formatDate (value) {
        const d = new Date(value)
        return d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear()
      }
    },
    data () {
      return {
        recentEpisodes: []
      }
    },
    async created () {
      try {
        const response = await getRecentEpisodes()
        this.recentEpisodes = response.data.data
      } catch (e) {
        console.log(e)
      }
    },
    methods: {
      playAudio (episode) {
        this.$store.commit('playAudio', episode)
      }
    }
  }
</script>

<style lang="scss">
  .recent-episodes .basic-card {
    cursor: pointer;
  }
  .recent-episodes .basic-card-image {
    width: 275px;
    height: 275px;
    object-fit:cover;
    border-radius: 50%;
  }
</style>
