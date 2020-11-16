<template>
  <div class="card">
    <a
      v-if="titleLink"
      class="card-image-link"
      :href="titleLink"
    >
      <img
        v-if="image"
        class="card-image"
        :src="image"
        alt="alt"
      >
    </a>
    <span
      v-else
      class="card-image-wrapper"
    >
      <img
        v-if="image"
        class="card-image"
        :src="image"
        alt="alt"
      >
    </span>
    <div
      v-if="hasDetails"
      class="card-details"
    >
      <div
        v-if="title"
        class="card-title"
      >
        <a
          v-if="titleLink"
          class="card-title-link"
          :href="titleLink"
        >
          {{ title }}
        </a>
        <template v-else>
          {{ title }}
        </template>
      </div>
      <div
        v-if="subtitle"
        class="card-subtitle"
      >
        {{ subtitle }}
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: null
    },
    alt: {
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
    subtitle: {
      type: String,
      default: null
    }
  },
  computed: {
    hasDetails () {
      return !!this.title || !!this.subtitle || !!this.$slots.default
    }
  }
}
</script>

<style lang="scss">
.card {
  --card-image-width: 193px;
  --card-image-height: 170px;
  display: flex;
  background: RGB(var(--color-background));
  color: RGB(var(--color-text));
  box-shadow: 0px 3px 24px RGBA(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 3px 24px RGBA(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  width: 544px;
}

  .card-image {
    flex: 1 0 var(--card-image-width);
    width: var(--card-image-width);
    min-width: var(--card-image-width);
    max-width: var(--card-image-width);
    max-height: var(--card-image-height);
    height: var(--card-image-height);
    object-fit: cover;
  }

  .card-details {
    flex: 1;
    padding: var(--space-3);
  }

  .card-title {
    font-family: var(--font-family-header);
    font-size: var(--font-size-7);
  }

  .card-title-link {
    color: RGB(var(--color-text));
    text-decoration: none;
  }

  .card-title-link:hover {
    color: RGB(var(--color-text));
    opacity: var(--opacity-link-hover);
    text-decoration: none;
  }

  .card-subtitle {
    font-family: var(--font-family-subheader);
    font-size: var(--font-size-4);
  }

  .card.mod-vertical {
    flex-direction: column;
    --card-image-width: 300px;
    --card-image-height: 200px;
    width: 300px;
  }

  .card.mod-large {
    --card-image-width: 360px;
    --card-image-height: 306px;
    width: 879px;
  }

    .card.mod-large .card-title {
      font-size: var(--font-size-10);
    }

    .card.mod-large .card-subtitle {
      font-size: var(--font-size-7);
    }

  .card.mod-vertical.card.mod-large {
    --card-image-width: 620px;
    --card-image-height: 413px;
    width: 620px;
  }

</style>
