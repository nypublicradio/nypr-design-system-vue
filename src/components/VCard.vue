<template>
  <div class="card">
    <template v-if="titleLink">
      <a
        v-if="title"
        class="card-image-link"
        :href="titleLink"
        aria-hidden="true"
        role="presentation"
        tabindex="-1"
        @click="$emit('componentEvent', titleLink)"
      >
        <img
          v-if="image"
          class="card-image"
          :src="image"
          :alt="title"
          :width="imageWidth"
          :height="imageHeight"
          role="presentation"
          loading="lazy"
        >
      </a>
      <a
        v-else
        class="card-image-link"
        :href="titleLink"
        @click="$emit('componentEvent', titleLink)"
      >
        <img
          v-if="image"
          class="card-image"
          :src="image"
          :alt="alt"
          :width="imageWidth"
          :height="imageHeight"
        >
      </a>
    </template>
    <span
      v-else
      class="card-image-wrapper"
    >
      <img
        v-if="image"
        class="card-image"
        :src="image"
        :width="imageWidth"
        :height="imageHeight"
        alt=""
        role="presentation"
      >
    </span>
    <div
      v-if="hasDetails"
      class="card-details"
    >
      <div
        v-if="tags"
        class="card-tag"
      >
        <v-tag
          v-for="(tag, index) in tags"
          :key="index"
          :name="tag.name"
          :slug="tag.slug"
        />
      </div>
      <div
        v-if="title"
        class="card-title"
      >
        <a
          v-if="titleLink"
          class="card-title-link"
          :href="titleLink"
        >
          <span v-html="title" /><gallery-icon v-if="showGalleryIcon" />
        </a>
        <template v-else>
          <span v-html="title" /><gallery-icon v-if="showGalleryIcon" />
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
import VTag from '../components/VTag'
import GalleryIcon from '../components/icons/GalleryIcon'

export default {
  name: 'VCard',
  components: {
    GalleryIcon,
    VTag
  },
  props: {
    alt: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    imageHeight: {
      type: Number,
      default: null
    },
    imageWidth: {
      type: Number,
      default: null
    },
    showGalleryIcon: {
      type: Boolean,
      default: false
    },
    subtitle: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
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
  width: 100%;
  max-width: 100%;
}

.card-image {
  flex: 1 0 var(--card-image-width);
  width: var(--card-image-width);
  max-width: 100%;
  max-height: var(--card-image-height);
  height: auto;
}

.card-details {
  flex: 1;
  padding: var(--space-3);
}

.card-tag {
  margin-bottom: var(--space-2);
}

.card-title {
  font-family: var(--font-family-header);
  font-size: var(--font-size-7);
  display: flex;
  align-items: center;
}

.card .o-gallery-icon {
  width: 20px;
  height: 25px;
  margin-left: var(--space-2);
  margin-bottom: 2px;
}

.card.mod-large .o-gallery-icon {
  width: 30px;
  height: 30px;
  margin-bottom: 3px;
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
