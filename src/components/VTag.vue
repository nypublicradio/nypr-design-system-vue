<template>
  <a
    :href="href"
    class="tag"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'VTag',
  props: {
    href: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.tag {
  display: inline-block;
  margin-right: var(--space-2);
  @include typeface(small, 1);
  background: RGB(var(--color-tag-background));
  color: RGB(var(--color-tag-text));
  text-decoration: none;
  padding: var(--space-1);
  text-transform: uppercase;
  transition: background var(--animation-duration-standard) var(--animation-easing-standard);

  &:hover {
    background: RGBA(var(--color-tag-background), var(--opacity-hover));
    color: RGB(var(--color-tag-text));
    text-decoration: none;
  }
}
</style>
