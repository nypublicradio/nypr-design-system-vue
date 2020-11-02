<template>
  <div
    class="volume-control"
    @mouseover.prevent="showVolume = true"
    @mouseleave.prevent="showVolume = false"
  >
    <label
      for="playerVolume"
      class="is-vishidden"
    >
      Volume
    </label>
    <button
      class="volume-control-icon"
      :aria-label="muted ? 'unmute' : 'mute'"
      @click="mute"
      @keypress.space.enter="mute"
    >
      <volume-icon v-if="!muted" />
      <volume-muted v-if="muted" />
    </button>
    <transition name="slide-left">
      <input
        v-show="showVolume"
        id="playerVolume"
        class="volume-control-slider"
        type="range"
        min="0"
        max="100"
        :value="value"
        @change="$emit('change', $event.target.value)"
      >
    </transition>
  </div>
</template>

<script>
import VolumeIcon from './icons/VolumeIcon'
import VolumeMuted from './icons/VolumeMuted'

export default {
  name: 'VolumeControl',
  components: {
    VolumeIcon,
    VolumeMuted
  },
  model: {
     event: 'change'
  },
  props: {
    value: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      volume: 100,
      previousVolume: 35,
      showVolume: false
    }
  },
  computed: {
    muted () {
      return this.volume / 100 === 0
    }
  },
  methods: {
    mute () {
      if (this.muted) {
        this.updateVolume(this.previousVolume)
      } else {
        this.previousVolume = this.value
        this.updateVolume(0)
      }
    },
    updateVolume (volume) {
      this.volume = volume
      this.$emit('change', volume)
    }
  }
}
</script>

<style lang="scss">
.volume-control {
  padding-left: var(--space-3);
  display: none;
  @media all and (min-width: $medium) {
    display: flex;
    height: 96px;
    align-items: center;
    justify-content: flex-end;
  }
}

  .volume-control-icon {
    appearance: none;
    border: none;
    background: transparent;
    cursor: pointer;
    display: inline-block;
    height: 24px;
  }

  .volume-control-icon svg path {
    fill: RGB(var(--color-text));
  }

  .volume-control-slider.slide-left-enter,
  .volume-control-slider.slide-left-leave-to {
    width: 0px;
  }

  .volume-control-slider.slide-left-leave,
  .volume-control-slider.slide-left-enter-to {
    width: 116px;
  }

  .volume-control-slider.slide-left-enter-active {
    transition: width var(--animation-duration-standard) var(--animation-easing-incoming);
  }

  .volume-control-slider.slide-left-leave-active {
    transition: width var(--animation-duration-standard) var(--animation-easing-outgoing);
  }

</style>
