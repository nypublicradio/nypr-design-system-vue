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
      <span
        v-if="publishDate"
        class="article-metadata-publish-date"
      >{{ publishDate }}</span>
      <span
        v-if="updatedDate"
        class="article-metadata-updated-date"
      >Updated:&nbsp;{{ updatedDate }}</span>
      <span
        v-if="$slots.comments"
        class="article-metadata-comments"
      ><slot name="comments" /></span>
      <span
        v-if="$slots.photos"
        class="article-metadata-photos"
      ><slot name="photos" /></span>
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
  @include typeface(body, 4);
}

.article-metadata .article-metadata-line-one {
  margin-bottom: var(--space-2);
}

.article-metadata .article-metadata-line-two {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.article-metadata .article-metadata-line-two > span {
  &::after {
    content: '\2022';
    margin: 0 var(--space-2);
  }

  &:last-of-type {
    &::after {
      content: '';
    }
  }
}

.article-metadata .article-metadata-comments,
.article-metadata .article-metadata-photos {
  display: flex;
  height: 19px;
}

.article-metadata .counter .o-icon {
  margin-top: 0;
}
</style>
