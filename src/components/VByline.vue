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
      <nuxt-link
        v-if="author.url"
        target="_self"
        :to="author.url"
      >{{ author.firstName }}&nbsp;{{ author.lastName }}</nuxt-link>
      <template v-else>{{ author.firstName }}&nbsp;{{ author.lastName }}</template>
      <template
        v-if="author.organization && author.organizationUrl"
      >(<nuxt-link
        :to="author.organizationUrl"
      >{{ author.organization }}</nuxt-link>)</template><template v-if="index < authors.length-2">,</template>
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
