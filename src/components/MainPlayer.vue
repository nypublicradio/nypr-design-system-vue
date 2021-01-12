<template>
  <div class="main-player l-grid l-grid--middle">
    <div>
      <a
        v-if="titleLink"
        :href="titleLink"
        target="_blank"
        rel="noopener"
      >
        <img
          :src="image"
          :alt="title"
          class="on-air-image"
          width="850"
          height="850"
        >
      </a>
      <img
        v-else
        :src="image"
        :alt="title"
        class="on-air-image"
        width="850"
        height="850"
      >
    </div>
    <div>
      <live-indicator :label="time" />
      <h2
        v-if="title && titleLink"
        class="main-player-title"
        data-test-element="show-title"
      >
        <a
          :href="titleLink"
          target="_blank"
          rel="noopener"
        >
          {{ title }}
        </a>
      </h2>
      <h2
        v-if="title && !titleLink"
        class="main-player-title"
        data-test-element="show-title"
      >
        {{ title }}
      </h2>
      <div
        v-if="details"
        class="main-player-details"
      >
        <div
          v-if="details && !detailsLink"
          v-html="details"
        />
        <a
          v-if="details && detailsLink"
          :href="detailsLink"
          class="main-player-details-link"
          target="_blank"
          rel="noopener"
          v-html="details"
        />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import LiveIndicator from '../components/LiveIndicator'

export default {
  name: 'MainPlayer',
  components: {
    LiveIndicator
  },
  props: {
    details: {
      type: String,
      default: null
    },
    detailsLink: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    time: {
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
  }
}
</script>

<style lang="scss">
.main-player {
  width: 100%;
  margin: auto;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

  @include media(">medium") {
    grid-template-columns: 330px 1fr;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
      opacity: var(--opacity-hover);
    }
  }

  .on-air-image {
    z-index: 10;
    height: auto;
    width: 100%;
    max-width: 100%;
    cursor: pointer;
    margin: 0 auto var(--space-2);

    @include media(">medium") {
      max-height: 330px;
      max-width: 330px;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: span 5;
      margin: 0 auto;
    }

    img {
      min-width: 100%;
      min-height: 100%;
    }
  }

  .live-indicator {
    margin: 0 0 var(--space-3) var(--space-4);
    color: RGB(var(--color-link));
  }

  .button {
    width: 235px;
    max-width: 235px;
    margin: 0 0 var(--space-5) var(--space-4);

    svg {
      max-height: 54px;
      max-width: 54px;
    }
  }

  .main-player-title {
    @include typeface(header, 10);
    color: RGB(var(--color-text));
    font-weight: normal;
    margin: 0 var(--space-4) var(--space-2);

    @include media(">xlarge") {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
      margin: 0 var(--space-4) var(--space-3);
    }

    a {
      border-bottom: none;
    }
  }

  .main-player-details {
    @include typeface(body, 5);
    color: RGB(var(--color-text));
    margin: 0 var(--space-4) var(--space-4) var(--space-4);

    @include media(">=medium") {
      @include typeface(body, 6);
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
      line-height: 25px;
    }
  }

  .loading-icon {
    width: 16px!important;
    height: 16px!important;
    margin: 0 var(--space-2) 0 0!important;
  }
}
</style>
