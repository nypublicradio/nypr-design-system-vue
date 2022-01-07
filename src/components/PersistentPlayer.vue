<template>
  <div
    class="persistent-player u-color-group-dark"
  >
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
      <template v-if="shouldShowCta">
        <VolumeControl
          :volume="volume"
          :is-muted="isMuted"
          @volume-toggle-mute="$emit('volume-toggle-mute')"
          @volume-change="$emit('volume-change', $event)"
        />
        <button
          class="button player-cta-play-button"
          @click="togglePlay"
        >
          <play-simple class="button-icon" />
          <span class="button-text">Listen Live</span>
        </button>
      </template>
      <template v-else>
        <VolumeControl
          :volume="volume"
          :is-muted="isMuted"
          @volume-toggle-mute="$emit('volume-toggle-mute')"
          @volume-change="$emit('volume-change', $event)"
        />
        <a
          v-if="showSkip && !livestream"
          class="player-back-15-icon"
          aria-label="go back 15 seconds"
          @click="goBack15"
        >
          <back15 />
        </a>
        <v-button
          class="play-button"
          @click="togglePlay"
        >
          <pause-icon v-show="isPlaying" />
          <loading-icon v-show="isLoading" />
          <play-simple v-show="!isPlaying && !isLoading" />
        </v-button>
        <a
          v-if="showSkip && !livestream"
          class="player-ahead-15-icon"
          aria-label="go ahead 15 seconds"
          @click="goAhead15"
        >
          <ahead15 />
        </a>
      </template>
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
  </div>
</template>

<script>
import VButton from './VButton'
import PlaySimple from './icons/PlaySimple'
import PauseIcon from './icons/wqxr/PauseIcon'
import LoadingIcon from './animations/LoadingIcon'
import Back15 from './icons/Back15'
import Ahead15 from './icons/Ahead15'
import DownloadIcon from './icons/DownloadIcon'
import VolumeControl from './VolumeControl'
import TrackInfo from './TrackInfo'

export default {
  name: 'PersistentPlayer',
  components: {
    PlaySimple,
    Back15,
    Ahead15,
    VolumeControl,
    DownloadIcon,
    TrackInfo,
    VButton,
    PauseIcon,
    LoadingIcon
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
    isLoading: {
      type: Boolean,
      default: false
    },
    isPlaying: {
      type: Boolean,
      default: false
    },
    shouldShowCta: {
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
    },
    isMuted: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentSeconds: 0,
      durationSeconds: 0,
      buffered: 0,
      innerLoop: false,
      loaded: false,
      previousVolume: 35,
      showVolume: false,
      volume: 100
    }
  },
  mounted () {
    this.innerLoop = this.loop
    // keyboard accessibility
    window.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'Space':
          this.togglePlay()
          break
        case 'Enter':
          this.togglePlay()
          break
        case 'ArrowUp':
          if (this.volume < 100) { this.volume++ }
          break
        case 'ArrowDown':
          if (this.volume > 0) { this.volume-- }
          break
        case 'ArrowLeft':
          this.goBack15()
          break
        case 'ArrowRight':
          this.goAhead15()
          break
      }
    })
  },
  methods: {
    convertTime (val) {
      const hhmmss = new Date(val * 1000).toISOString().substr(11, 8)
      return hhmmss.indexOf('00:') === 0 ? hhmmss.substr(3) : hhmmss
    },
    download () {
      // this.stop() // emit event so vue-hifi can handle
      window.open(this.file, 'download')
    },
    goAhead15 () {
      // emit event so vue-hifi can handle
      // this.audio.currentTime = this.audio.currentTime + 15
    },
    goBack15 () {
      // emit event so vue-hifi can handle
      // this.audio.currentTime = this.audio.currentTime - 15
    },
    seek (e) {
      // emit event so vue-hifi can handle
      // if (!this.loaded) return
      // const el = e.target.getBoundingClientRect()
      // const seekPos = (e.clientX - el.left) / el.width
      // this.audio.currentTime = (this.audio.duration * seekPos)
    },
    togglePlay () {
      this.$emit('togglePlay')
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
  height: 100%;
}

.player-controls svg {
  fill: RGB(var(--color-text));
}

.player-controls .player-cta-play-button {
  margin-right: 4px;
  @media all and (min-width: $medium) {
    margin-right: 24px;
  }
}

.player-controls .player-cta-play-button svg {
  min-width: 20px;
}

.player-controls .player-cta-play-button svg path {
  fill: RGB(var(--color-text));
}

.player-controls .play-button {
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

.player-controls .loading-icon {
  width: 16px!important;
  height: 16px!important;
}
</style>
