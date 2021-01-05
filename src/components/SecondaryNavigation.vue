<template>
  <div>
    <ul
      class="c-secondary-nav__list"
      :class="orientation"
    >
      <li
        v-for="(item, index) in navItems"
        :key="index"
        class="c-secondary-nav__item"
      >
        <a
          :href="item.url"
          :target="item.newWindow && '_blank'"
          rel="noopener"
          class="c-secondary-nav__link"
        >
          {{ item.text }}
          <span
            v-if="item.newWindow"
            class="is-vishidden"
          >(New tab)</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SecondaryNavigation',
  props: {
    navItems: {
      type: Array,
      default: null
    },
    orientation: {
      type: String,
      default: 'vertical'
    }
  }
}
</script>

<style lang="scss">
.c-secondary-nav__list .c-secondary-nav__item {
  margin-bottom: var(--space-2);
}

.c-secondary-nav__list.horizontal .c-secondary-nav__item {
  display: inline-block;
}

.c-secondary-nav__list.horizontal .c-secondary-nav__item:not(:last-child) {
  margin-right: var(--space-5);
}

.c-secondary-nav__list .c-secondary-nav__subheader-spacer {
  height: var(--space-5);;
}
</style>
