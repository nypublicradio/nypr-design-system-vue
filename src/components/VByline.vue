<template>
  <div
    class="byline"
  >
    {{ prefix }}
    <span
      v-for="(author, index) in authors"
      :key="index"
      class="byline-author"
    >
      <a
        v-if="author.url"
        :href="author.url"
        target="_blank"
        rel="nofollow"
      >{{ author.firstName }}&nbsp;{{ author.lastName }}</a>
      <template v-else>{{ author.firstName }}&nbsp;{{ author.lastName }}</template>
      <template
        v-if="author.organization && author.organizationUrl"
      >(<a
        :href="author.organizationUrl"
        target="_blank"
        rel="nofollow"
      >{{ author.organization }}</a>)</template><template v-if="index < authors.length-2">,</template>
      <template v-if="author.organization && !author.organizationUrl">({{ author.organization }})<template v-if="index < authors.length-2">, </template></template>
      <template v-if="index === authors.length-2"> and </template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'VByline',
  props: {
    authors: {
      type: Array,
      default: null
    },
    prefix: {
      type: String,
      default: 'by '
    }
  }
}
</script>

<style lang="scss">
.byline {
  @include typeface(body, 4);
  line-height: 25px;

  a,
  a:visited,
  a:active {
    color: RGB(var(--color-text));
    &:hover {
      color: RGB(var(--color-link-hover));
    }
  }
}
</style>
