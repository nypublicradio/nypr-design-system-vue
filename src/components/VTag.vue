<template>
  <div
    class="tag"
    :class="text"
  >
    <a
      v-if="href"
      :href="href"
    >
      {{ text }}
    </a>
    <template v-else>
      {{ text }}
    </template>
  </div>
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
  font-weight: bold;
  background: RGB(var(--color-tag-background));
  color: RGB(var(--color-tag-text));
  padding: var(--space-1);
  text-transform: uppercase;
  transition: background var(--animation-duration-standard) var(--animation-easing-standard);

  a,
  a:visited,
  a:active {
    color: RGB(var(--color-tag-text));
    text-decoration: none;

    &:hover {
      background: RGBA(var(--color-tag-background), var(--opacity-hover));
      color: RGB(var(--color-tag-text));
      text-decoration: none;
    }
  }
}
</style>
