<template>
  <div class="basic-card">
    <a
      v-if="hasImage && hasLink"
      :href="link"
    >
      <img
        :src="image"
        :alt="altText"
        class="basic-card-image u-space--bottom"
        loading="lazy"
      >
    </a>
    <img
      v-if="hasImage && !hasLink"
      :src="image"
      :alt="altText"
      class="basic-card-image u-space--bottom"
      loading="lazy"
    >
    <div
      v-if="hasVideo"
      class="u-space--bottom"
    >
      <media-block :url="video" />
    </div>
    <div class="basic-card-content">
      <div
        class="l-grid"
        :class="{'l-grid--2up': hasShow && hasDate}"
      >
        <div v-if="hasShow && hasShowLink">
          <a
            :href="showLink"
            class="basic-card-show-link"
          >
            <p
              class="basic-card-show"
            >
              {{ show }}
            </p>
          </a>
        </div>
        <p
          v-if="hasShow && !hasShowLink"
          class="basic-card-show"
        >
          {{ show }}
        </p>
        <p
          v-if="hasShow && hasDate"
          class="basic-card-date u-align--right u-hide-until--m"
        >
          {{ date }}
        </p>
        <p
          v-if="!hasShow && hasDate"
          class="basic-card-date"
        >
          {{ date }}
        </p>
      </div>
      <div
        v-if="hasLink && hasTitle"
        class="basic-card-title"
      >
        <a
          v-if="hasLink"
          :href="link"
          :aria-label="title"
        >
          {{ title }}
        </a>
      </div>
      <div
        v-if="!hasLink && hasTitle"
        class="basic-card-title"
      >
        {{ title }}
      </div>
      <div
        v-if="hasDuration"
        class="basic-card-duration u-space--bottom"
      >
        {{ duration }}
      </div>
      <div
        v-if="hasDescription"
        class="basic-card-description u-space--top"
        v-html="description"
      />
      <div
        v-if="hasCta"
        class="basic-card-cta"
      >
        {{ cta }}
      </div>
    </div>
  </div>
</template>

<script>
  import MediaBlock from './MediaBlock'

  export default {
    name: 'BasicCard',
    components: {
      'media-block': MediaBlock
    },
    props: {
      altText: {
        type: String,
        default: null
      },
      cta: {
        type: String,
        default: 'Read More'
      },
      date: {
        type: String,
        default: null
      },
      description: {
        type: String,
        default: null
      },
      duration: {
        type: String,
        default: null
      },
      hasCta: {
        type: Boolean,
        default: false
      },
      image: {
        type: String,
        default: null
      },
      link: {
        type: String,
        default: null
      },
      show: {
        type: String,
        default: null
      },
      showLink: {
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
      },
      video: {
        type: String,
        default: null
      }
    },
    computed: {
      hasDate () {
        return !!this.$props.date
      },
      hasDescription () {
        return !!this.$props.description
      },
      hasDuration () {
        return !!this.$props.duration
      },
      hasImage () {
        return !!this.$props.image
      },
      hasLink () {
        return !!this.$props.link
      },
      hasShow () {
        return !!this.$props.show
      },
      hasShowLink () {
        return !!this.$props.showLink
      },
      hasTitle () {
        return !!this.$props.title
      },
      hasVideo () {
        return !!this.$props.video
      }
    }
  }
</script>

<style
  lang="scss"
  scoped
>
  .basic-card {
    background: var(--card-background);
    width: 100%;
    height: 100%;
    position: relative;
  }

  .basic-card .basic-card-title {
    font-weight: 500;
  }

  .basic-card .basic-card-image {
    top: 0;
    left: 0;
  }

  .basic-card .basic-card-show {
    color: var(--color-gray);
  }

  .basic-card .basic-card-date,
  .basic-card .basic-card-duration {
    color: var(--color-light-gray);
  }

  .basic-card .basic-card-show-link,
  .basic-card .basic-card-show-link p,
  .basic-card .basic-card-cta {
    color: var(--card-color-link);
  }

  .basic-card.newsounds .basic-card-show-link,
  .basic-card.newsounds .basic-card-show-link p {
    color: var(--color-quinary);
  }

  .basic-card.soundcheck .basic-card-show-link,
  .basic-card.soundcheck .basic-card-show-link p {
    color: #17b77f;
  }

  .basic-card.gig-alerts .basic-card-show-link,
  .basic-card.gig-alerts .basic-card-show-link p {
    color: var(--color-gray);
  }

  .basic-card .basic-card-cta {
    margin-top: .25rem;
  }
</style>
