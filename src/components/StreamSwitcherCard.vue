<template>
  <div
    class="stream-switcher-card"
    :class="{'is-active':active, 'is-playing':playing}"
    @click="$emit('click', $event);"
  >
    <div
      v-if="playing"
      class="stream-switcher-card-animation"
    >
      <audio-wave-is-active />
    </div>
    <div class="stream-switcher-card-station">
      {{ station }}
    </div>
    <div
      v-if="active"
      class="stream-switcher-card-up-next"
    >
      up next
    </div>
    <div
      v-else
      class="stream-switcher-card-up-next"
    >
      on now
    </div>
    <div
      v-if="active"
      class="stream-switcher-card-title"
    >
      {{ upNextTitle }}
    </div>
    <div
      v-else
      class="stream-switcher-card-title"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
import AudioWaveIsActive from '../components/animations/AudioWaveIsActive'

export default {
  name: 'StreamSwitcherCard',
  components: { AudioWaveIsActive },
  props: {
    station: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    upNextTitle: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    playing: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.stream-switcher-card {
  @include typeface(body, 4);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  border: 1px solid RGB(var(--color-text-inverse));
  padding: var(--space-1) var(--space-2) var(--space-2);
  height: 70px;
  align-items: center;
  width: fit-content;
  max-width: 180px;
  min-width: 180px;
  margin-bottom: -20px; // hack to get around overflow scroll issue
  transition: var(--animation-duration-slow) var(--animation-easing-incoming);
  background-color: transparent;
  color: RGB(var(--color-text-inverse));

  @include media(">xlarge") {
    @include typeface(body, 5);
    padding: var(--space-2) var(--space-3);
    height: 50px;
    max-width: 320px;
    min-width: 320px;
    flex-wrap: nowrap;
  }

  // active caret
  &::after {
    content: '';
    position: absolute;
    width: 0;
    bottom: -15px;
    height: 15px;
    left: 30px;
    z-index: 10;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 15px solid RGB(var(--color-text-inverse));
    opacity: 0;
    -webkit-transition: opacity var(--animation-duration-slow) var(--animation-easing-incoming) 50ms;
    -moz-transition: opacity var(--animation-duration-slow) var(--animation-easing-incoming) 50ms;
    -ms-transition: opacity var(--animation-duration-slow) var(--animation-easing-incoming) 50ms;
    -o-transition: opacity var(--animation-duration-slow) var(--animation-easing-incoming) 50ms;
    transition: opacity var(--animation-duration-slow) var(--animation-easing-incoming) 50ms;
  }

  &:hover {
    background-color: RGBA(var(--color-text-inverse), .2);
  }

  &.is-active {
    background-color: RGBA(var(--color-text-inverse), 1);
    color: RGB(var(--color-text));

    &::after {
      opacity: 1;
    }
  }
}

.stream-switcher-card .stream-switcher-card-animation {
  flex-basis: 25px;
  height: 25px;
  margin: 0 var(--space-3) 0 0;
}

.stream-switcher-card .stream-switcher-card-station {
  font-weight: bold;
  text-transform: uppercase;
  min-width: 100px;
  margin: 0 var(--space-3) 0 0;
  line-height: 25px;
  -webkit-font-feature-settings: "lnum";
  -moz-font-feature-settings: "lnum";
  font-feature-settings: "lnum";
}

.stream-switcher-card .stream-switcher-card-up-next {
  flex-basis: 50px;
  margin: 0 var(--space-1) 0 0;
  font-weight: bold;
  white-space: nowrap;
  text-transform: uppercase;
  pointer-events: none;

  @include media(">xlarge") {
    flex-basis: auto;
  }
}

.stream-switcher-card .stream-switcher-card-title {
  flex-basis: calc(100% - 50px - var(--space-3));
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;

  @include media(">xlarge") {
    flex-basis: auto;
  }
}
</style>
