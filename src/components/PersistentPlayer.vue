<template>
  <div class="persistent-player u-color-group-dark">
    <div class="player-controls">
      <div class="player-track">
        <template v-if="livestream">
          <div class="player-livestream">
            <span class="player-livestream-live-text">Live</span> <span class="player-livestream-dot" /> {{ station }}
          </div>
        </template>
        <div class="player-track-title">
          <h2 v-if="title && titleLink">
            <a
              :href="titleLink"
              class="player-track-title-link"
            >
              {{ title }}
            </a>
          </h2>
          <h2 v-if="title && !titleLink">
            {{ title }}
          </h2>
        </div>
        <div
          v-if="details"
          class="player-track-details"
        >
          <div
            v-if="details && !detailsLink"
            class="player-track-title-details"
          >
            {{ details }}
          </div>
          <a
            v-if="details && detailsLink"
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
            <span class="player-track-time-current">{{ convertTime(currentSeconds) }}</span>
            <span class="player-track-time-separator">/</span>
            <span class="player-track-time-total">{{ convertTime(durationSeconds) }}</span>
          </div>
        </template>
      </div>
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
          <volume-muted v-if="muted" />
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
import PlayIcon from './icons/PlayIcon'
import Back15 from './icons/Back15'
import Ahead15 from './icons/Ahead15'
import VolumeIcon from './icons/VolumeIcon'
import VolumeMuted from './icons/VolumeMuted'
import DownloadIcon from './icons/DownloadIcon'

export default {
  name: 'PersistentPlayer',
  components: {
    PlayIcon,
    Back15,
    Ahead15,
    VolumeIcon,
    VolumeMuted,
    DownloadIcon
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
      this.buffered = 0
      if (this.audio.buffered.length > 0) {
        this.buffered = this.audio.buffered.end(0)
      }
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
  color: RGB(var(--color-text));
  background-color: RGB(var(--color-background));
  padding: var(--space-1) var(--space-2);
  @media all and (min-width: $medium) {
    padding: var(--space-1) var(--space-3);
  }
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

.persistent-player .player-livestream {
  display: flex;
  align-items: center;
  font-size: var(--font-size-3);
  font-weight: 400;
}

.persistent-player .player-livestream .player-livestream-live-text {
  font-weight: 700;
  text-transform: uppercase;
}

.persistent-player .player-livestream .player-livestream-dot {
  background-color: #e74f4f;
  border-radius: 8px;
  height: 8px;
  width: 8px;
  margin: 0 8px;
}

.persistent-player .player-track {
  flex: auto;
  padding: 0 var(--space-6) 0 0;
  overflow: hidden;
}

.persistent-player .player-track-title {
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.persistent-player .player-track-title h2 {
  line-height: 1;
}

.persistent-player .player-track-title-details-link {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.persistent-player .player-track-progress {
  position: absolute;
  background-color: RGB(var(--color-text));
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

.persistent-player .player-track-progress .player-track-seeker {
  background-color: RGB(var(--color-text));
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 20;
}

.persistent-player .player-track-progress .player-track-buffered {
  background-color: RGB(var(--color-gray));
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 10;
}

.persistent-player .player-track-progress .player-track-playhead {
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
    background-color: RGB(var(--color-dark-gray));
    border-radius: 50%;
    opacity: 1;
    display: block;
    position: absolute;
    left: calc(50% - 11px);
    top: calc(50% - 11px);
  }
}

.persistent-player .player-track-time {
  display: flex;
  font-size: var(--font-size-2);
  font-weight: 500;
  @media all and (min-width: $medium) {
    justify-content: flex-end;
  }
}

.persistent-player .player-track-time .player-track-time-current {
  margin-right: var(--space-1);
}

.persistent-player .player-track-time .player-track-time-total {
  margin-left: var(--space-1);
}

.persistent-player .player-volume {
  padding-left: var(--space-3);
  display: none;
  @media all and (min-width: $medium) {
    display: flex;
    justify-content: flex-end;
  }
}

.persistent-player .player-volume-icon {
  height: 24px;
}

.persistent-player .player-volume-icon svg path {
  fill: RGB(var(--color-text));
}
</style>
