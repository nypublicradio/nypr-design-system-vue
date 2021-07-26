<template>
  <ul
    class="c-secondary-nav__list"
    :class="[orientation, alignment]"
  >
    <li
      v-for="(item, index) in navItems"
      :key="index"
      class="c-secondary-nav__item"
    >
      <nuxt-link
        v-if="item.type !== 'external_link'"
        :to="item.url"
        rel="noopener"
        class="c-secondary-nav__link"
        @click="$emit('componentEvent', item.text)"
      >
        <span
          v-if="item.icon"
          class="c-secondary-nav__icon"
        >
          <component :is="item.icon" />
        </span>
        {{ item.text }}
        <span
          v-if="item.newWindow"
          class="is-vishidden"
        >(New tab)</span>
      </nuxt-link>
      <a
        v-else
        :href="item.url"
        :target="item.newWindow && '_blank'"
        rel="noopener"
        class="c-secondary-nav__link"
        @click="$emit('componentEvent', item.text)"
      >
        <span
          v-if="item.icon"
          class="c-secondary-nav__icon"
        >
          <component :is="item.icon" />
        </span>
        {{ item.text }}
        <span
          v-if="item.newWindow"
          class="is-vishidden"
        >(New tab)</span>
      </a>
    </li>
  </ul>
</template>

<script>
import EmailIcon from '../components/icons/EmailIcon'

export default {
  name: 'SecondaryNavigation',
  components: {
    EmailIcon
  },
  props: {
    navItems: {
      type: Array,
      default: null
    },
    orientation: {
      type: String,
      default: 'vertical'
    },
    alignment: {
      type: String,
      default: 'left'
    },
    type: {
      type: String,
      default: null
    },
    newWindow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.c-secondary-nav__list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.c-secondary-nav__list.horizontal {
  flex-direction: row;
}

.c-secondary-nav__list.responsive {
  flex-direction: column;
  @include media(">large") {
    flex-direction: row;
  }
}

.c-secondary-nav__list .c-secondary-nav__item {
  margin-bottom: var(--space-2);
}

.c-secondary-nav__list .c-secondary-nav__icon {
  margin-right: var(--space-2);
}

.c-secondary-nav__list .c-secondary-nav__icon svg {
  height: 20px;
  width: 20px;
}

.c-secondary-nav__list.horizontal .c-secondary-nav__item:not(:last-child) {
  margin-right: var(--space-5);
}

.c-secondary-nav__list.center {
  justify-content: center;
}

.c-secondary-nav__list.center .c-secondary-nav__item {
  margin: 0 var(--space-3) var(--space-3);
}

.c-secondary-nav__list.responsive .c-secondary-nav__item:not(:last-child) {
  @include media(">large") {
    margin-right: var(--space-5);
  }
}

.c-secondary-nav__list .c-secondary-nav__subheader-spacer {
  height: var(--space-5);
}
</style>
