<template>
  <div class="persistent-player u-color-group-dark">
    <div class="player-controls">
      <TrackInfo
        :livestream="livestream"
        :station="station"
        :image="image"
        :title="title"
        :title-link="titleLink"
        :description="description"
        :description-link="descriptionLink"
        :buffered="buffered"
        :current-seconds="currentSeconds"
        :duration-seconds="durationSeconds"
        @seek="seek"
      />
      <VolumeControl v-model.number="volume" />
      <a
        v-if="showSkip && !livestream"
        class="player-back-15-icon"
        aria-label="go back 15 seconds"
        @click="goBack15"
      >
        <back15 />
      </a>
      <a
        class="play-button"
        :class="{'is-playing': playing, 'is-paused': !playing, 'is-loading': !loaded}"
        :aria-label="playing ? 'pause' : 'play'"
        @click="togglePlay"
      >
        <play-icon />
      </a>
      <a
        v-if="showSkip && !livestream"
        class="player-ahead-15-icon"
        aria-label="go ahead 15 seconds"
        @click="goAhead15"
      >
        <ahead15 />
      </a>
      <a
        v-if="showDownload && !livestream"
        tabindex="0"
        class="player-download-icon"
        aria-label="download"
        @click="download"
        @keypress.space.enter="download"
      >
        <download-icon />
      </a>
    </div>
    <audio
      ref="audioFile"
      :loop="innerLoop"
      :src="file"
      preload="auto"
      style="display: none"
    />
  </div>
</template>

<script>
import PlayIcon from './icons/PlayIcon'
import Back15 from './icons/Back15'
import Ahead15 from './icons/Ahead15'
import DownloadIcon from './icons/DownloadIcon'
import VolumeControl from './VolumeControl'
import TrackInfo from './TrackInfo'

export default {
  name: 'PersistentPlayer',
  components: {
    PlayIcon,
    Back15,
    Ahead15,
    VolumeControl,
    DownloadIcon,
    TrackInfo
  },
  props: {
    autoPlay: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: null
    },
    descriptionLink: {
      type: String,
      default: null
    },
    file: {
      type: String,
      default: null
    },
    livestream: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    showDownload: {
      type: Boolean,
      default: false
    },
    showSkip: {
      type: Boolean,
      default: true
    },
    showTrack: {
      type: Boolean,
      default: true
    },
    station: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    titleLink: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      audio: undefined,
      currentSeconds: 0,
      durationSeconds: 0,
      buffered: 0,
      innerLoop: false,
      loaded: false,
      playing: false,
      previousVolume: 35,
      showVolume: false,
      volume: 100
    }
  },
  watch: {
    playing (value) {
      if (value) {
        return this.audio.play()
      }
      this.audio.pause()
    },
    volume () {
      this.audio.volume = this.volume / 100
    }
  },
  mounted () {
    this.innerLoop = this.loop
    // keyboard accessibility
    window.addEventListener('keydown', event => {
      switch (event.code) {
        case 'Space':
          this.togglePlay()
          break
        case 'Enter':
          this.togglePlay()
          break
        case 'ArrowUp':
          if (this.volume < 100) this.volume++
          break
        case 'ArrowDown':
          if (this.volume > 0) this.volume--
          break
        case 'ArrowLeft':
          this.goBack15()
          break
        case 'ArrowRight':
          this.goAhead15()
          break
      }
    })
    this.audio = this.$refs.audioFile
    this.audio.addEventListener('timeupdate', this.update)
    this.audio.addEventListener('loadeddata', this.load)
    this.audio.addEventListener('buffered', this.update)
    this.audio.addEventListener('pause', () => {
      this.playing = false
    })
    this.audio.addEventListener('play', () => {
      this.playing = true
    })
  },
  methods: {
    convertTime (val) {
      const hhmmss = new Date(val * 1000).toISOString().substr(11, 8)
      return hhmmss.indexOf('00:') === 0 ? hhmmss.substr(3) : hhmmss
    },
    download () {
      this.stop()
      window.open(this.file, 'download')
    },
    goAhead15 () {
      this.audio.currentTime = this.audio.currentTime + 15
    },
    goBack15 () {
      this.audio.currentTime = this.audio.currentTime - 15
    },
    load () {
      if (this.audio.readyState >= 2) {
        this.loaded = true
        this.durationSeconds = parseInt(this.audio.duration)
        this.playing = this.autoPlay
        return this.playing
      }
      throw new Error('Failed to load sound file.')
    },
    seek (e) {
      if (!this.loaded) return
      const el = e.target.getBoundingClientRect()
      const seekPos = (e.clientX - el.left) / el.width
      this.audio.currentTime = (this.audio.duration * seekPos)
    },
    stop () {
      this.playing = false
      this.audio.currentTime = 0
    },
    togglePlay () {
      this.playing = !this.playing
    },
    update () {
      this.currentSeconds = this.audio.currentTime
      this.buffered = 0
      if (this.audio.buffered.length > 0) {
        this.buffered = this.audio.buffered.end(0)
      }
    }
  }
}
</script>

<style lang="scss">
  $xsmall: 450px;
  $small: 550px;
  $medium: 768px;
  $large: 1240px;
  $xlarge: 1440px;

.persistent-player {
  bottom: 0;
  left: 0;
  color: #FFF;
  height: 96px;
  position: fixed;
  z-index: 1200;
  width: 100%;
  padding: 0 8px;
  color: RGB(var(--color-text));
  background-color: RGB(var(--color-background));
}

  .persistent-player a,
  .persistent-player a:visited,
  .persistent-player a:active {
    color: var(--color-text);
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  .player-controls {
    display: flex;
    align-items: center;
  }

    .player-controls svg {
      fill: RGB(var(--color-text));
    }

    .player-controls .play-button {
      width: 55px;
      min-width: 55px;
    }

    .player-controls .back-15-icon {
      margin-right: var(--space-2);
    }

    .player-controls .ahead-15-icon {
      margin-left: var(--space-2);
    }

    .player-controls .download-icon {
      margin-left: var(--space-2);
    }
</style>
