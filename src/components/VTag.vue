<template>
  <div
    class="tag"
    :class="name"
  >
    <a
      v-if="slug"
      :href="'/tags/' + slug"
    >
      {{ name }}
    </a>
    <span v-else>
      {{ name }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'VTag',
  props: {
    slug: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.tag {
  display: inline;
  margin: 0 var(--space-2) var(--space-2) 0;
  @include typeface(small, 1);
  font-weight: bold;
  color: RGB(var(--color-tag-text));
  text-transform: uppercase;

  a,
  a:visited,
  a:active {
    color: RGB(var(--color-tag-text));
    text-decoration: none;
    background: RGB(var(--color-tag-background));
    padding: var(--space-1);
    transition: background var(--animation-duration-standard) var(--animation-easing-standard);

    &:hover {
      background: RGB(var(--color-tag-background));
      color: RGB(var(--color-tag-text));
      text-decoration: none;
    }
  }

  span {
    background: RGB(var(--color-tag-background));
    padding: var(--space-1);
  }
}
</style>
