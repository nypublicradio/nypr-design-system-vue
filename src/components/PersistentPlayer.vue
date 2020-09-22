<template>
  <div class="persistent-player">
    <div class="player-controls">
      <div class="player-track">
        <template v-if="livestream">
          <div class="player-livestream">
            <span class="player-livestream-live-text">Live</span> <span class="player-livestream-dot" /> {{ station }}
          </div>
        </template>
        <div class="player-track-title">
          <h2 v-if="hasTitle && hasTitleLink">
            <a
              :href="titleLink"
              class="player-track-title-link"
            >
              {{ title }}
            </a>
          </h2>
          <h2 v-if="hasTitle && !hasTitleLink">
            {{ title }}
          </h2>
        </div>
        <div
          v-if="hasDetails"
          class="player-track-details"
        >
          <div
            v-if="hasDetails && !hasDetailsLink"
            class="player-track-title-details"
          >
            {{ details }}
          </div>
          <a
            v-if="hasDetails && hasDetailsLink"
            :href="detailsLink"
            class="player-track-title-details-link"
          >
            {{ details }}
          </a>
        </div>
        <template v-if="!livestream">
          <div
            class="player-track-progress"
            @click="seek"
          >
            <div
              :style="{ width: percentComplete + '%' }"
              class="player-track-seeker"
            />
            <div
              :style="{ width: percentBuffered + '%' }"
              class="player-track-buffered"
            />
          </div>
          <div class="player-track-time">
            <span class="player-track-time-current">{{ currentSeconds | convertTimeHHMMSS }}</span>
            <span class="player-track-time-separator">/</span>
            <span class="player-track-time-total">{{ durationSeconds | convertTimeHHMMSS }}</span>
          </div>
        </template>
      </div>
      <a
        v-if="showSkip && !livestream"
        class="player-back-15-icon"
        aria-label="go back 15 seconds"
        @click="goBack15"
      >
        <back15-icon />
      </a>
      <a
        class="player-play-pause-icon"
        :aria-label="playing ? 'pause' : 'play'"
        @click="togglePlay"
      >
        <play-icon v-if="!playing" />
        <pause-icon v-if="playing" />
      </a>
      <a
        v-if="showSkip && !livestream"
        class="player-ahead-15-icon"
        aria-label="go ahead 15 seconds"
        @click="goAhead15"
      >
        <ahead15-icon />
      </a>
      <div
        class="player-volume"
        @mouseover.prevent="showVolume = true"
        @mouseleave.prevent="showVolume = false"
      >
        <label
          for="playerVolume"
          class="is-vishidden"
        >
          volume slider
        </label>
        <transition name="slide-left">
          <input
            v-show="showVolume"
            id="playerVolume"
            v-model="volume"
            type="range"
            min="0"
            max="100"
          >
        </transition>
        <a
          tabindex="0"
          class="player-volume-icon"
          :aria-label="muted ? 'unmute' : 'mute'"
          @click="mute"
          @keypress.space.enter="mute"
        >
          <volume-icon v-if="!muted" />
          <volume-muted-icon v-if="muted" />
        </a>
      </div>
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
import PlayIcon from './svg/PlayIcon'
import PauseIcon from './svg/PauseIcon'
import Back15Icon from './svg/Back15Icon'
import Ahead15Icon from './svg/Ahead15Icon'
import VolumeIcon from './svg/VolumeIcon'
import VolumeMutedIcon from './svg/VolumeMutedIcon'
import DownloadIcon from './svg/DownloadIcon'

export default {
  name: 'PersistentPlayer',
  components: {
    PlayIcon,
    PauseIcon,
    Back15Icon,
    Ahead15Icon,
    VolumeIcon,
    VolumeMutedIcon,
    DownloadIcon
  },
  filters: {
    convertTimeHHMMSS (val) {
      const hhmmss = new Date(val * 1000).toISOString().substr(11, 8)
      return hhmmss.indexOf('00:') === 0 ? hhmmss.substr(3) : hhmmss
    }
  },
  props: {
    autoPlay: {
      type: Boolean,
      default: false
    },
    details: {
      type: String,
      default: null
    },
    detailsLink: {
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
  computed: {
    hasDetails () {
      return this.$props.details
    },
    hasDetailsLink () {
      return this.$props.detailsLink
    },
    hasTitle () {
      return this.$props.title
    },
    hasTitleLink () {
      return this.$props.titleLink
    },
    muted () {
      return this.volume / 100 === 0
    },
    percentBuffered () {
      return (this.buffered / this.durationSeconds) * 100
    },
    percentComplete () {
      return (this.currentSeconds / this.durationSeconds) * 100
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
  created () {
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
  },
  mounted () {
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
    mute () {
      if (this.muted) {
        this.volume = this.previousVolume
        return this.volume
      }
      this.previousVolume = this.volume
      this.volume = 0
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
      this.buffered = this.audio.buffered.end(0)
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
$xsmall: 450px;
$small: 550px;
$medium: 768px;
$large: 1240px;
$xlarge: 1440px;

.persistent-player {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: RGB(var(--color-cool-white));
  padding: var(--space-1) var(--space-3);
  @media all and (min-width: $medium) {
    padding: var(--space-2) var(--space-5);
  }
}

.persistent-player a,
.persistent-player a:visited,
.persistent-player a:active {
  color: var(--player-link-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.player-controls {
  display: flex;
  align-items: center;
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

.player-livestream {
  display: flex;
  align-items: center;
  font-size: var(--font-size-3);
  font-weight: 400;
}

.player-livestream .player-livestream-live-text {
  font-weight: 700;
  text-transform: uppercase;
}

.player-livestream .player-livestream-dot {
  background-color: #e74f4f;
  border-radius: 8px;
  height: 8px;
  width: 8px;
  margin: 0 8px;
}

.player-track {
  flex: auto;
  padding: 0 var(--space-6) 0 0;
  overflow: hidden;
}

.player-track-title {
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.player-track-title h2 {
  line-height: 1;
}

.player-track-title-details-link {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.player-track-progress {
  position: absolute;
  background-color: RGB(var(--color-primary-2));
  cursor: pointer;
  min-width: 200px;
  top: -5px;
  left: 0;
  right: 0;
  height: 5px;
  @media all and (min-width: $medium) {
    height: 3px;
    margin-top: .5rem;
    position: relative;
  }
}

.player-track-progress .player-track-seeker {
  background-color: RGB(var(--color-primary-2));
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 20;
}

.player-track-progress .player-track-buffered {
  background-color: RGB(var(--color-primary-1));
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 10;
}

.player-track-progress .player-track-playhead {
  position: absolute;
  height: 22px;
  width: 22px;
  margin: -8px -16px;
  transform: scale(0, 0);
  left: 0;
  opacity: 0;
  bottom: 0;
  transition: opacity .2s linear, transform .2s;

  &::after {
    content: '';
    height: 22px;
    width: 22px;
    background-color: var(--player-buffered-color);
    border-radius: 50%;
    opacity: 1;
    display: block;
    position: absolute;
    left: calc(50% - 11px);
    top: calc(50% - 11px);
  }
}

.player-track-time {
  display: flex;
  font-size: var(--font-size-2);
  font-weight: 500;
  @media all and (min-width: $medium) {
    justify-content: flex-end;
  }
}

.player-track-time .player-track-time-current {
  margin-right: var(--space-1);
}

.player-track-time .player-track-time-total {
  margin-left: var(--space-1);
}

.player-volume {
  padding-left: var(--space-3);
  display: none;
  @media all and (min-width: $medium) {
    display: flex;
    justify-content: flex-end;
  }
}

// transition
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: var(--animation-duration);
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

</style>
