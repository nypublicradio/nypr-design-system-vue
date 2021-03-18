<template>
  <div class="gallery-preview">
    <image-with-caption
      v-if="activeImage"
      :variation="variation"
      :alt-text="activeImage.alt"
      :image="activeImage.url"
      :credit="activeImage.credit"
      :credit-url="activeImage.creditUrl"
      :caption="activeImage.caption"
    />
    <div class="gallery-preview-images">
      <img
        v-for="(image, index) in images.slice(0,numberOfImages)"
        :key="index"
        :src="image.thumbnail"
        :alt="image.alt"
        loading="lazy"
        tabindex="0"
        aria-hidden="true"
        class="gallery-preview-image"
        :class="{ active: activeIndex === index }"
        @click="setActiveImage(index)"
        @keypress.enter.space.prevent="setActiveImage(index)"
      >
      <a
        :href="galleryUrl"
        class="gallery-preview-view-all"
      >
        <span>View All</span>
        <span class="gallery-preview-view-all-count">{{ count }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import ImageWithCaption from '../components/ImageWithCaption'

export default {
  name: 'GalleryPreview',
  components: {
    ImageWithCaption
  },
  props: {
    count: {
      type: Number,
      default: null
    },
    galleryUrl: {
      type: String,
      default: null
    },
    images: {
      type: Array,
      default: null
    },
    variation: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      activeImage: null,
      activeIndex: 0,
      numberOfImages: 4
    }
  },
  beforeMount () {
    this.activeImage = this.images[0]
  },
  mounted () {
    if (window.innerWidth < 640) {
      this.numberOfImages = 3
    }
    if (window.innerWidth < 550) {
      this.numberOfImages = 2
    }
  },
  methods: {
    setActiveImage (index) {
      this.activeIndex = index
      this.activeImage = this.images[index]
    }
  }
}
</script>

<style lang="scss">
$gallery-preview-max-width: 640px;
.gallery-preview {
  --gallery-preview-active-color: RGB(var(--color-link));
  max-width: $gallery-preview-max-width;
}

.gallery-preview-images {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.gallery-preview-image,
.gallery-preview-view-all {
  cursor: pointer;
  border: solid 2px RGB(var(--color-dark-gray));
  min-width: calc(33% - var(--space-3));
  max-width: calc(33% - var(--space-3));
  flex-basis: calc(33% - var(--space-3));

  @include media(">small") {
    min-width: calc(25% - var(--space-3));
    max-width: calc(25% - var(--space-3));
    flex-basis: calc(25% - var(--space-3));
  }

  @media all and (min-width: $gallery-preview-max-width) {
    min-width: calc(20% - var(--space-3));
    max-width: calc(20% - var(--space-3));
    flex-basis: calc(20% - var(--space-3));
  }

  &:focus,
  &.active {
    border: solid 2px var(--gallery-preview-active-color);
    outline: none;
  }
}

.gallery-preview-view-all {
  color: RGB(var(--color-white));
  background: RGB(var(--color-dark-gray));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @include typeface(small, 3);
  text-transform: uppercase;

  &:hover {
    text-decoration: none;
    color: RGB(var(--color-white));
    background: var(--gallery-preview-active-color);
  }
}

.gallery-preview-view-all-count {
  @include typeface(small, 11);
  margin-top: var(--space-2);
}
</style>
