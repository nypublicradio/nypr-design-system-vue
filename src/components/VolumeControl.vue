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
      :aria-label="isMuted ? 'unmute' : 'mute'"
      @click="$emit('volume-toggle-mute')"
      @keypress.space.enter="mute"
    >
      <volume-icon v-if="!isMuted" />
      <volume-muted v-if="isMuted" />
    </button>
    <transition name="slide-left">
      <input
        v-show="showVolume"
        id="playerVolume"
        class="volume-control-slider"
        type="range"
        min="0"
        max="100"
        :value="volume"
        @change="$emit('volume-change', parseInt($event.target.value))"
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
  props: {
    volume: {
      type: Number,
      default: 100
    },
    isMuted: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      previousVolume: 35,
      showVolume: false
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
    margin-right: 16px;
  }
}

  .volume-control-icon {
    flex: 1 0;
    appearance: none;
    border: none;
    background: transparent;
    cursor: pointer;
    display: inline-block;
    height: 36px;
    min-width: 36px;
    max-width: 36px;
  }

  .volume-control-icon svg path {
    fill: RGB(var(--color-text));
  }

  .volume-control-slider {
    padding: 24px 0;
    width: 116px;
    min-width: 116px;
  }

  .volume-control-slider.slide-left-enter,
  .volume-control-slider.slide-left-leave-to {
    width: 0px;
    min-width: 0px;
  }

  .volume-control-slider.slide-left-leave,
  .volume-control-slider.slide-left-enter-to {
    width: 116px;
    min-width: 116px;
  }

  .volume-control-slider.slide-left-enter-active {
    transition: all var(--animation-duration-standard) var(--animation-easing-incoming);
  }

  .volume-control-slider.slide-left-leave-active {
    transition: all var(--animation-duration-standard) var(--animation-easing-outgoing);
  }

</style>
