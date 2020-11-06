<template>
  <div>
    <figure class="image-with-caption">
      <img
        v-if="image"
        :src="image"
        :alt="altText"
        class="image-with-caption-image"
      >
      <figcaption
        v-if="credit"
        class="image-with-caption-caption"
      >
        <a
          v-if="creditUrl"
          :href="creditUrl"
          rel="noopener"
        >
          {{ credit }}
        </a>
        <template v-else>
          {{ credit }}
        </template>
      </figcaption>
    </figure>
    <p v-if="caption">
      {{ caption }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ImageWithCaption',
  props: {
    altText: {
      default: null,
      type: String
    },
    caption: {
      default: null,
      type: String
    },
    credit: {
      default: null,
      type: String
    },
    creditUrl: {
      default: null,
      type: String
    },
    image: {
      default: null,
      type: String
    }
  }
}
</script>

<style lang="scss">
.image-with-caption-caption {
  @include typeface(body, 3);
  margin-top: var(--space-1);
  text-align: right;
}
</style>
