<template>
  <div class="stream-switcher-card" :class="{'is-active':active}">
    
    <div class="stream-switcher-stations-label">{{ station }}</div>
    <div class="sound-animation">
      <div class="sound-animation-bar"></div>
      <div class="sound-animation-bar"></div>
      <div class="sound-animation-bar"></div>
      <div class="sound-animation-bar"></div>
      <div class="sound-animation-bar"></div>
      <div class="sound-animation-bar"></div>
      <div class="sound-animation-bar"></div>
    </div>
    <div class="on-air-image">
      <img aria-hidden="true" :alt="showTitle" :src="image" />
    </div>
    <div class="stream-switcher-streams-stream-show-title">
      {{ showTitle }}
    </div>
    <div class="up-next">
      <!---->
      <div class="up-next-label">up next</div>
      <div class="up-next-show-title">{{ upNext }}</div>
      <div class="up-next-time">{{ time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StreamSwitcherCard",
  props: {
    station: {
      type: String,
      default: null,
    },
    showTitle: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    upNext: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.stream-switcher-card {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding-left: 20px;
  width: 100%;
  background: black;
  @include media(">=xxlarge") {
    margin-right: 0px;
    padding-left: 0px;
    padding-top: 56px;
  }
  .stream-switcher-stations-label {
    @include typeface(body, 3);
    color: RGB(var(--color-white));
    font-weight: bold;
    margin-bottom: 7px;
    margin-top: 8px;
    text-align: left;
    text-transform: uppercase;
    @include media(">=xxlarge") {
      margin-left: 24px;
    }
  }
  .stream-switcher-streams-stream-title {
    @include typeface(body, 4);
    align-self: center;
    color: RGB(var(--color-background));
    font-weight: bold;
    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 1;
    grid-row-end: span 1;
    margin-left: 8px;
    pointer-events: none;
  }

  .sound-animation {
    align-items: flex-end;
    align-self: center;
    display: flex;
    flex-direction: row;
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: span 1;
    height: 16px;
    justify-content: space-between;
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

  .on-air-image {
    height: 40px;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: span 1;
    margin: 4px 8px 8px 8px;
    max-height: 40px;
    max-width: 40px;
    pointer-events: none;
    width: 40px;
  }
  .stream-switcher-streams-stream-show-title {
    @include typeface(body, 4);
    align-self: center;
    color: RGB(var(--color-background));
    font-weight: 600;
    grid-column-start: 2;
    grid-column-end: span 2;
    grid-row-start: 2;
    grid-row-end: span 1;
    pointer-events: none;
  }

  .up-next {
    align-items: center;
    border-top: solid 1px #fff;
    display: flex;
    flex-direction: row;
    grid-column-start: 1;
    grid-column-end: span 3;
    grid-row-start: 3;
    grid-row-end: span 1;
    pointer-events: none;
    .up-next-label {
      @include typeface(body, 1);
      color: RGB(var(--color-background));
      margin-left: 8px;
      opacity: 0.7;
      pointer-events: none;
      text-transform: uppercase;
    }
    .up-next-show-title {
      @include typeface(body, 1);
      color: RGB(var(--color-background));
      font-weight: bold;
      margin-left: 8px;
      opacity: 0.7;
      pointer-events: none;
    }
    .up-next-time {
      @include typeface(body, 1);
      color: RGB(var(--color-background));
      flex: 1;
      margin-left: 8px;
      margin-right: 8px;
      opacity: 0.7;
      pointer-events: none;
      text-align: right;
    }
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
  &.is-active {
    border: 3px solid RGB(var(--color-text-error));
    @include media(">=xxlarge") {
      border-left: none;
    }
  }
  &.is-active.is-playing:hover {
    @include media(">=xxlarge") {
      height: 125px;
      .on-air-image,
      .stream-switcher-streams-stream-show-title {
        display: block;
      }
      .up-next {
        display: flex;
      }
    }
  }
  &.is-active.is-playing {
    @include media(">=xxlarge") {
      height: 36px;
      .on-air-image,
      .stream-switcher-streams-stream-show-title,
      .up-next {
        display: none;
      }
    }
  }
}
</style>