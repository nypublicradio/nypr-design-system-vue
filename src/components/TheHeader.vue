<template>
  <header class="c-main-header">
    <div
      id="header-inner"
      class="c-main-header__inner "
    >
      <div class="c-main-header__left">
        <div
          class="c-side-menu"
          name="side-menu"
        >
          <slot name="menu" />
        </div>
        <div
          class="c-main-header__branding"
          name="logo"
        >
          <slot name="logo" />
        </div>
      </div>
      <nav class="c-primary-nav">
        <slot name="navigation" />
      </nav>
      <h2
        v-if="title"
        class="main-player-title"
        data-test-element="show-title"
      >
        {{ title }}
      </h2>
      <div class="c-main-header__right">
        <slot name="social" />
        <v-button
          v-if="donateUrl"
          class="c-main-header__donate"
          label="Donate"
          :href="donateUrl"
          target="_blank"
          rel="noopener"
          data-category="Click Tracking"
          data-action="Header"
          data-label="Donate Button"
          @click="$emit('componentEvent', donateUrl)"
        />
        <div class="search">
          <slot name="search" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import VButton from '../components/VButton'

export default {
  name: 'TheHeader',
  components: { VButton },
  props: {
    donateUrl: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
$z-index-header: 5000;

.c-main-header {
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: $z-index-header;
  @include typeface(header, 5);
  background: RGB(var(--color-background-muted));

  &.not-fixed {
    position: relative;
  }
}

.c-main-header svg {
  fill: RGB(var(--color-text));
  height: 52px;
}

.c-secondary-nav__link {
  color: var(--color-black);
  text-decoration: none;
  font-size: var(--font-size-4);
  font-family: var(--font-family-body);

}

.c-secondary-nav__link:hover {
  color: var(--color-black);
  text-decoration: none;
  opacity: var(--opacity-link-hover);
}

.c-main-header a svg {
  fill: RGB(var(--color-navigation-link));
}

.c-main-header a:hover svg {
  fill: RGBA(var(--color-navigation-link-hover), var(--opacity-navigation-link-hover));
}

.c-main-header__inner {
  background-color: RGB(var(--color-background));
  padding: var(--space-2) var(--space-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--heading-height);
  position: relative;
}

.c-main-header__branding {
  flex-shrink: 0; /* prevent from shrinking in flex container*/
  width: 120px;

  @include media(">xsmall") {
    width: 150px;
  }
}

.main-player-title {
  font-size: var(--font-size-6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.c-main-header__left {
  display: flex;
  align-items: center;
}

.c-main-header .c-primary-nav .c-secondary-nav__list {
  display: none;
  @include media(">xlarge") {
    display: flex;
  }
}

.c-main-header .c-primary-nav .c-secondary-nav__list .c-secondary-nav__item {
  margin-bottom: 0;
}

.c-main-header__right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
}

.c-main-header__donate {
  @include media("<=medium") {
    font-size: var(--font-size-3);
    padding-left: var(--space-3);
    padding-right: var(--space-3);
  }
}

.c-main-header .c-main-header__right .c-share-tools__group {
  @include media("<medium") {
    display: none;
  }
}

.c-main-header__donate.button {
  font-size: var(--font-size-5);
}

.c-main-header .c-main-header__right .search {
  cursor: pointer;
  @include media("<medium") {
    display: none;
  }
}

.c-main-header .c-main-header__right .search .search-bar-form-wrapper {
  right: 0;
  z-index: 99;
}

.c-main-header .c-main-header__right .search .search-bar-close {
  background: RGB(var(--color-white));
}

.c-main-header .menu-hamburger {
  width: 20px;
  transition: var(--animation-duration-standard);
  margin-right: var(--space-2);
  &:hover {
    opacity: var(--opacity-hover);
  }
}
</style>
