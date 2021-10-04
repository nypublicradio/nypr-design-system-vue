<template>
  <div class="article-metadata">
    <div
      v-if="$slots.authors"
      class="article-metadata-line-one"
    >
      <div class="article-metadata-authors">
        <slot name="authors" />
      </div>
    </div>
    <div class="article-metadata-line-two">
      <div
        v-if="publishDate"
        class="article-metadata-publish-date"
      >
        {{ publishDate }}
      </div>
      <div
        v-if="publishDate && updatedDate"
        class="article-metadata-separator"
      />
      <div
        v-if="updatedDate"
        class="article-metadata-updated-date"
      >
        Updated:&nbsp;{{ updatedDate }}
      </div>
      <div
        v-if="$slots.comments"
        class="article-metadata-comments"
      >
        <div class="article-metadata-separator" />
        <slot name="comments" />
      </div>
      <div
        v-if="$slots.photos"
        class="article-metadata-photos"
      >
        <div class="article-metadata-separator" />
        <slot name="photos" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleMetadata',
  props: {
    publishDate: {
      type: String,
      default: null
    },
    updatedDate: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.article-metadata {
  @include typeface(small, 4);
  line-height: 25px;
}

.article-metadata a {
  letter-spacing: var(--letter-spacing-small);
  text-underline-position: under;
}

.article-metadata .article-metadata-line-two {
  line-height: 25px;
}

.article-metadata .article-metadata-line-two div {
  display: inline;
}

.article-metadata .article-metadata-separator {
  line-height: 25px;
  font-size: var(--font-size-1);
  &::after {
    content: '\2022';
    margin: 0 var(--space-1);
  }
}

.article-metadata .counter {
  display: inline-block;
}

.article-metadata .o-gallery-icon {
  margin-left: 0!important;
}
</style>
