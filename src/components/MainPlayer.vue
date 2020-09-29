<template>
  <div class="main-player l-grid">
    <div>
      <img
        :src="image"
        :alt="title"
        class="main-player-image"
      >
      <v-button label="Listen Live">
        <play-simple />
      </v-button>
    </div>
    <div>
      <h2
        v-if="title && titleLink"
        class="main-player-title"
        data-test-element="show-title"
      >
        <a
          :href="titleLink"
          class="main-player-title-link"
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
          class="main-player-details"
        >
          {{ details }}
        </div>
        <a
          v-if="details && detailsLink"
          :href="detailsLink"
          class="main-player-details-link"
        >
          {{ details }}
        </a>
      </div>
      <live-indicator :label="time" />
    </div>
  </div>
</template>

<script>
import LiveIndicator from '../components/LiveIndicator'
import PlaySimple from '../components/icons/PlaySimple'
import VButton from '../components/VButton'

export default {
  name: 'MainPlayer',
  components: {
    LiveIndicator,
    PlaySimple,
    VButton
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
.main-player.l-grid {
  text-align: center;
  @include media(">medium") {
    grid-template-columns: 175px 1fr;
    text-align: left;
  }
}

.main-player .main-player-image {
  margin: 0 auto var(--space-3);
  @include media(">medium") {
    margin: 0 0 var(--space-3);
  }
}

.main-player .main-player-image,
.main-player .button {
  width: 115px;
  @include media(">medium") {
    width: 175px;
  }
}

.main-player .main-player-title {
  @include typeface(header, 10);

  color: RGB(var(--color-primary-2));
  font-weight: normal;
  margin-bottom: 8px;
  text-align: center;

  @include media(">=medium") {
    font-size: 52px;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    line-height: 60px;
    margin-bottom: 16px;
    text-align: left;
  }
}

.main-player .main-player-title-link {
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.main-player .main-player-details {
  @include typeface(body, 5);
  margin-bottom: var(--space-3);
}

.main-player .main-player-details-link {
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.main-player .live-indicator {
  justify-content: center;
  @include media(">=medium") {
    justify-content: flex-start;
  }
}
</style>
