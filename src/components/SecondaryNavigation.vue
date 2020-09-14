<template>
  <div>
    <ul class="c-secondary-nav__list">
      <li
        v-for="(item, index) in navItems"
        :key="index"
        class="c-secondary-nav__item"
      >
        <a
          v-if="item.url"
          :href="item.url"
          class="c-secondary-nav__link u-font--secondary-style u-font--xs"
          target="_blank"
          rel="noopener"
          :data-test-seconary-nav-link="index"
        >
          {{ item.text }}
        </a>
        <router-link
          v-else
          :to="item.route"
          class="c-secondary-nav__link"
          :data-test-seconary-nav-link="index"
        >
          {{ item.text }}
        </router-link>
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
    }
  }
}
</script>

<style lang="scss">

</style>
