<template>
  <div
    v-if="active"
    class="banner"
    :class="{'banner-active': active}"
  >
    <v-tag
      v-if="tag"
      :text="tag"
      :href="tagLink"
    />
    <div
      v-if="showCloseButton"
      class="banner-close"
      @click="active=false"
    >
      <close-icon />
    </div>
    <div class="banner-content">
      <div
        v-if="thumbnail"
        class="banner-thumbnail"
      >
        <img
          :src="thumbnail"
          :alt="thumbnailAltText"
        >
      </div>
      <div>
        <div
          v-if="headline"
          class="banner-headline"
        >
          {{ headline }}
        </div>
        <div
          v-if="description"
          class="banner-description"
        >
          <span
            v-if="showJustNow"
            class="banner-description-just-now"
          >Just Now</span>{{ description }}
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from '../../src/components/icons/CloseIcon'
import VTag from '../../src/components/VTag'

export default {
  name: 'VBanner',
  components: {
    CloseIcon,
    VTag
  },
  props: {
    description: {
      type: String,
      default: null
    },
    headline: {
      type: String,
      default: null
    },
    showCloseButton: {
      type: Boolean,
      default: false
    },
    showJustNow: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: null
    },
    tagLink: {
      type: String,
      default: null
    },
    thumbnail: {
      type: String,
      default: null
    },
    thumbnailAltText: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      active: true
    }
  }
}
</script>

<style lang="scss">
.banner {
  position: relative;
  background-color: RGB(var(--color-background-highlight));
  align-items: center;
  padding: var(--space-5);
}

.banner .banner-close {
  position: absolute;
  cursor: pointer;
  top: var(--space-1);
  right: var(--space-1);
  width: 30px;
  height: 30px;
  padding: 6px;
  transition: var(--animation-duration-standard);

  &:hover {
    opacity: var(--opacity-hover);
  }
}

.banner .tag {
  margin-bottom: var(--space-3);
}

.banner .banner-content {
  display: flex;
  flex-direction: column;
  @include media(">medium") {
    flex-direction: row;
  }
}

.banner-headline {
  margin-bottom: var(--space-3);
  @include typeface(header, 8);
  font-weight: normal;
}

.banner-description {
  margin-bottom: var(--space-3);
}

.banner-description-just-now {
  @include typeface(small, 1);
  font-weight: bold;
  text-transform: uppercase;
  margin-right: var(--space-2);
}

.banner-thumbnail {
  flex-basis: 100%;
  width: 275px;
  max-width: 100%;
  margin-bottom: var(--space-4);
  @include media(">medium") {
    flex-basis: 275px;
    min-width: 275px;
    margin-right: var(--space-4);
  }
}
</style>
