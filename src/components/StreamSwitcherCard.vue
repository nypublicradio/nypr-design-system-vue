<template>
  <div
    class="stream-switcher-card u-color-group-dark"
    :class="{'is-active':active, 'is-playing':playing}"
  >
    <div class="stream-switcher-card-station">
      {{ station }}
    </div>
    <div
      class="stream-switcher-card-sound-animation"
      :class="{'is-playing':playing}"
    >
      <div class="sound-animation-bar" />
      <div class="sound-animation-bar" />
      <div class="sound-animation-bar" />
      <div class="sound-animation-bar" />
      <div class="sound-animation-bar" />
      <div class="sound-animation-bar" />
      <div class="sound-animation-bar" />
    </div>
    <div class="stream-switcher-card-show">
      <img
        class="stream-switcher-card-show-image"
        aria-hidden="true"
        :alt="showTitle"
        :src="image"
      >
      <div class="stream-switcher-card-show-title">
        {{ showTitle }}
      </div>
    </div>
    <div class="stream-switcher-card-up-next">
      <div class="stream-switcher-card-up-next-label">
        up next
      </div>
      <div class="stream-switcher-card-up-next-show-title">
        {{ upNext }}
      </div>
      <div class="stream-switcher-card-up-next-time">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StreamSwitcherCard',
  props: {
    station: {
      type: String,
      default: null
    },
    showTitle: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    upNext: {
      type: String,
      default: null
    },
    time: {
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  min-width: 250px;
  @include typeface(body, 4);
  border: 1px solid RGB(var(--color-background));
  background: transparent;
  color: RGB(var(--color-background));
  cursor: pointer;

  &.is-active {
    background: RGB(var(--color-background));
    color: RGB(var(--color-text));
    &::after {
      content: '';
      position: absolute;
      width: 0;
      bottom: -16px;
      height: 15px;
      left: 30px;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 15px solid RGB(var(--color-text));
      opacity: 0;
      transition: opacity var(--animation-duration-slow) var(--animation-easing-incoming) 50ms;
    }
  }
}

.stream-switcher-card .stream-switcher-card-station {
  margin: var(--space-2);
  font-weight: bold;
  text-transform: uppercase;
}

.stream-switcher-card .stream-switcher-card-sound-animation {
  position: absolute;
  align-items: flex-end;
  align-self: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  top: var(--space-2);
  right: var(--space-2);
  height: 16px;
  width: 40px;

  &.is-playing {
    .sound-animation-bar {
      animation: sound-bars 500ms linear 0ms infinite alternate;
    }

    .sound-animation-bar:nth-child(1) {
      animation-delay: 0ms;
    }

    .sound-animation-bar:nth-child(2) {
      animation-delay: 100ms;
    }

    .sound-animation-bar:nth-child(3) {
      animation-delay: 200ms;
    }

    .sound-animation-bar:nth-child(4) {
      animation-delay: 300ms;
    }

    .sound-animation-bar:nth-child(5) {
      animation-delay: 400ms;
    }

    .sound-animation-bar:nth-child(6) {
      animation-delay: 500ms;
    }

    .sound-animation-bar:nth-child(7) {
      animation-delay: 600ms;
    }
  }

  .sound-animation-bar {
    height: 100%;
    width: 2.2px;
    max-width: 2.2px;
    min-width: 2.2px;
  }
}

.stream-switcher-card .stream-switcher-card-show {
  display: flex;
  margin: 0 0 var(--space-2) var(--space-2);
}

.stream-switcher-card.is-playing .stream-switcher-card-show {
  display: flex;
}

.stream-switcher-card .stream-switcher-card-show-image {
  height: 40px;
  width: 40px;
  margin-right: var(--space-2);
  pointer-events: none;
}

.stream-switcher-card .stream-switcher-card-show-title {
  align-self: center;
  font-weight: bold;
  pointer-events: none;
}

.stream-switcher-card .stream-switcher-card-up-next {
  @include typeface(body, 1);
  align-items: center;
  border-top: solid 1px #fff;
  padding: var(--space-2) 0;
  display: flex;
  pointer-events: none;
}

.stream-switcher-card.is-playing .stream-switcher-card-up-next {
  display: flex;
}

.stream-switcher-card .stream-switcher-card-up-next-label {
  margin: 0 var(--space-2);
  opacity: 0.7;
  pointer-events: none;
  text-transform: uppercase;
}

.stream-switcher-card .stream-switcher-card-up-next-show-title {
  flex: 1;
  font-weight: bold;
  opacity: 0.7;
  pointer-events: none;
}

.stream-switcher-card .stream-switcher-card-up-next-time {
  margin: 0 var(--space-2);
  opacity: 0.7;
  pointer-events: none;
  text-align: right;
}

@keyframes sound-bars {
  0% {
    opacity: 0.35;
    background: #f3f3f3;
    height: 1px;
  }
  100% {
    opacity: 1;
    background: #fff;
    height: 100%;
  }
}
</style>
