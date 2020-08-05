<template>
  <div
    class="play-button"
  >
    <a
      tabindex="0"
      :aria-label="playing ? 'pause' : 'play'"
      @click="togglePlay"
    >
      <play-icon v-if="!playing" />
      <pause-icon v-if="playing" />
    </a>
  </div>
</template>

<script>
  import PlayIcon from './svg/PlayIcon'
  import PauseIcon from './svg/PauseIcon'

  export default {
    name: 'PlayButton',
    components: { PlayIcon, PauseIcon },
    props: {
      size: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        playing: false
      }
    },
    methods: {
      togglePlay () {
        this.playing = !this.playing
      }
    }
  }
</script>

<style
  lang="scss"
  scoped
>
  .play-button .play-icon .inner,
  .play-button .pause-icon .inner {
    fill: var(--color-quinary);
  }
</style>
