<template>
  <li
    class="icon-link-item"
    :data-label="altText"
  >
    <a
      :href="link"
      target="_blank"
      class="icon-link"
    >
      <img
        :src="icon"
        :alt="altText"
      >
    </a>
  </li>
</template>

<script>
  export default {
    name: 'IconLinkItem',
    props: {
      icon: {
        type: String,
        default: null
      },
      link: {
        type: String,
        default: null
      },
      altText: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icon-link-item {
    display: inline-block;
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .icon-link-item .icon-link,
  .icon-link-item .icon-link:visited,
  .icon-link-item .icon-link:active {
    height: var(--icon-size);
    width: var(--icon-size);
    display: inline-block;
    transition: var(--transition);
    filter: grayscale(100%);

    &:hover {
      filter: none;
    }
  }
</style>
