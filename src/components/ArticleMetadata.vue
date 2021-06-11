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
        v-if="commentsExist"
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
  },
  data () {
    return {
      commentsExist: false
    }
  },
  mounted () {
    this.checkComments()
  },
  updated () {
    this.checkComments()
  },
  methods: {
    // check if comment count in comments slot is greater than 0
    checkComments () {
      this.commentsExist = this.$slots.comments && this.$slots.comments[0].componentOptions.propsData.value <= 0
    },
    componentEvent () {
      this.commentsExist = this.$slots.comments && this.$slots.comments[0].componentOptions.propsData.value <= 0
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

.article-metadata .article-metadata-line-one {
  margin-bottom: var(--space-2);
}

.article-metadata .article-metadata-line-two {
  line-height: 25px;
}

.article-metadata .article-metadata-line-two div {
  display: inline;
}

.article-metadata .article-metadata-separator {
  line-height: 25px;
  &::after {
    content: '\2022';
    margin: 0 var(--space-2);
  }
}

.article-metadata .o-gallery-icon {
  margin-left: 0!important;
}
</style>
