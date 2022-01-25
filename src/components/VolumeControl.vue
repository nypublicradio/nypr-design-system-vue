<template>
  <div
    class="volume-control"
    :class="{ 'show-volume': showVolume }"
  >
    <label
      for="playerVolume"
      class="is-vishidden"
    >
      Volume
    </label>
    <!-- <transition name="slide-left"> -->
    <input
      v-show="!isMuted"
      id="playerVolume"
      class="volume-control-slider"
      type="range"
      min="0"
      max="100"
      :value="volume"
      @change="$emit('volume-change', parseInt($event.target.value))"
    >
    <!-- </transition> -->
    <button
      class="volume-control-icon"
      :aria-label="isMuted ? 'unmute' : 'mute'"
      @click="$emit('volume-toggle-mute')"
      @keypress.space.enter="mute"
    >
      <volume-icon v-if="!isMuted" />
      <volume-muted v-if="isMuted" />
    </button>
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
    },
    showVolume: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      previousVolume: 35
    }
  },
  mounted () {}
}
</script>

<style lang="scss">
.volume-control {
  display: none;
  @media all and (min-width: $medium) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &:hover{
    input.volume-control-slider {
      width: 116px;
      opacity: 1;
      visibility: visible;
      margin-right:0;
    }
  }
  &.show-volume input.volume-control-slider, & input.volume-control-slider.focus-visible {
      width: 116px;
      opacity: 1;
      visibility: visible;
      margin-right:0;
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

  .volume-control input.volume-control-slider {
    transition: width 0.5s, opacity 0.25s, margin-right 0.25s;
    -webkit-transition: width 0.5s, opacity 0.25s, margin-right 0.25s;
    margin-right:0;
    padding: 24px 0;
    width: 0px;
    opacity: 0;
    border: none;
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
