<template>
  <div class="gallery-preview">
    <image-with-caption
      v-if="activeImage"
      :variation="variation"
      :alt-text="activeImage.alt"
      :image="activeImage.template"
      :credit="activeImage.credit"
      :credit-url="activeImage.creditUrl"
      :caption="activeImage.caption"
      :title="activeImage.title"
      :description="activeImage.description"
      :width="mainImageWidth"
      :height="mainImageHeight"
      :max-width="activeImage.width"
      :max-height="activeImage.height"
    />
    <div class="gallery-preview-images">
      <simple-responsive-image
        v-for="(image, index) in images.slice(0, numberOfImages)"
        :key="index"
        :src="image.template"
        :width="thumbImageWidth"
        :height="thumbImageHeight"
        :max-width="image.width"
        :max-height="image.height"
        :alt="image.alt"
        loading="lazy"
        tabindex="0"
        aria-hidden="true"
        class="gallery-preview-image"
        :class="{ active: activeIndex === index }"
        @click="setActiveImage(index)"
        @keypress.enter.space.prevent="setActiveImage(index)"
      />
      <nuxt-link :to="galleryUrl" class="gallery-preview-view-all">
        <span>View All</span>
        <span class="gallery-preview-view-all-count">{{ count }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ImageWithCaption from '../components/ImageWithCaption'
import SimpleResponsiveImage from '../components/SimpleResponsiveImage'

export default {
  name: 'GalleryPreview',
  components: {
    ImageWithCaption,
    SimpleResponsiveImage
  },
  props: {
    count: {
      type: Number,
      default: null
    },
    mainImageWidth: {
      type: Number,
      default: 640
    },
    mainImageHeight: {
      type: Number,
      default: 426
    },
    thumbImageWidth: {
      type: Number,
      default: 150
    },
    thumbImageHeight: {
      type: Number,
      default: 150
    },
    galleryUrl: {
      type: String,
      default: null
    },
    images: {
      type: Array,
      default: () => []
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
  created () {
    this.activeImage = this.images[0]
  },
  mounted () {
    const doc = document.documentElement
    if (doc.clientWidth < 640) {
      this.numberOfImages = 3
    }
    if (doc.clientWidth < 550) {
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
.gallery-preview {
  --gallery-preview-active-color: RGB(var(--color-link));
  max-width: 640px;
}

.gallery-preview-images {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.gallery-preview-image {
  position: relative;
}
.gallery-preview-image,
.gallery-preview-view-all {
  cursor: pointer;
  border: solid 2px RGB(var(--color-dark-gray));
  min-width: calc(33% - var(--space-3));
  max-width: calc(33% - var(--space-3));
  flex-basis: calc(33% - var(--space-3));
  transition: var(--animation-easing-standard);

  &:hover {
    opacity: var(--opacity-hover);
    cursor: pointer;
  }

  @include media('>small') {
    min-width: calc(25% - var(--space-3));
    max-width: calc(25% - var(--space-3));
    flex-basis: calc(25% - var(--space-3));
  }

  @media all and (min-width: 640px) {
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
  text-align: center;
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
