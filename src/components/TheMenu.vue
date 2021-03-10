<template>
  <div class="menu">
    <transition name="fade">
      <div
        v-if="hasOverlay && menuOpen"
        class="menu-overlay"
        @click="menuOpen = false"
      />
    </transition>
    <div
      class="menu-hamburger"
      tabindex="0"
      aria-label="open the menu"
      @click="toggleMenu"
      @keypress.enter.space.prevent="toggleMenu"
    >
      <hamburger-icon />
    </div>
    <transition name="slide-right">
      <nav
        v-if="menuOpen"
        class="menu-panel"
      >
        <div
          class="menu-close"
          tabindex="0"
          aria-label="close the menu"
          @click="menuOpen = false"
          @keypress.enter.space.prevent="menuOpen = false"
        >
          <close-icon />
        </div>
        <div
          v-if="hasLogoSlot"
          class="menu-logo"
        >
          <slot name="logo" />
        </div>
        <div
          v-if="hasButtonSlot"
          class="menu-button"
        >
          <v-spacer size="triple" />
          <slot name="button" />
        </div>
        <div
          v-if="primaryNav"
          class="menu-primary-navigation"
        >
          <v-spacer size="triple" />
          <secondary-navigation
            alignment="center"
            :nav-items="primaryNav"
          />
        </div>
        <div
          v-if="hasComponentSlot"
          class="menu-component"
        >
          <v-spacer size="triple" />
          <slot name="component" />
        </div>
        <div
          v-if="hasSearchSlot"
          class="menu-search"
        >
          <v-spacer size="triple" />
          <slot name="search" />
        </div>
        <div
          v-if="secondaryNav"
          class="menu-secondary-navigation"
        >
          <v-spacer size="triple" />
          <secondary-navigation
            alignment="center"
            :nav-items="secondaryNav"
          />
        </div>
        <div
          v-if="hasSocialSlot"
          class="menu-social"
        >
          <v-spacer size="triple" />
          <slot name="social" />
        </div>
        <v-spacer size="quad" />
        <div class="menu-nypr-logo">
          <nypr-logo />
        </div>
        <v-spacer size="double" />
        <p class="menu-copyright">
          © {{ currentYear }} New York Public Radio. All rights reserved.
        </p>
        <v-spacer />
        <div class="menu-terms-links">
          <secondary-navigation
            alignment="center"
            orientation="horizontal"
            :nav-items="legalNav"
          />
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
import CloseIcon from '../components/icons/CloseIcon'
import HamburgerIcon from '../components/icons/HamburgerIcon'
import NyprLogo from '../components/icons/NyprLogo'
import SecondaryNavigation from '../components/SecondaryNavigation'
import VSpacer from '../components/VSpacer'

export default {
  name: 'TheMenu',
  components: {
    CloseIcon,
    HamburgerIcon,
    NyprLogo,
    SecondaryNavigation,
    VSpacer
  },
  props: {
    hasOverlay: {
      type: Boolean,
      default: true
    },
    primaryNav: {
      type: Array,
      default: null
    },
    secondaryNav: {
      type: Array,
      default: null
    },
    legalNav: {
      type: Array,
      default: null
    }
  },
  data: function () {
    return {
      menuOpen: false
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    },
    hasButtonSlot () {
      return !!this.$slots.button
    },
    hasComponentSlot () {
      return !!this.$slots.component
    },
    hasLogoSlot () {
      return !!this.$slots.logo
    },
    hasSearchSlot () {
      return !!this.$slots.search
    },
    hasSocialSlot () {
      return !!this.$slots.social
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style lang="scss">
.menu {
  --menu-width: 368px;
}

.menu .menu-overlay {
  background: RGBA(var(--color-white), .5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
}

.menu .menu-hamburger {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;
  z-index: 999;
}

.menu.not-fixed .menu-hamburger {
  position: relative;
}

.menu .menu-close {
  cursor: pointer;
  position: absolute;
  // make the tappable area at least 30px and the icon 18x18
  width: 30px;
  height: 30px;
  padding: 6px;
  top: var(--space-3);
  right: var(--space-3);
  transition: var(--animation-duration-standard);

  &:hover {
    opacity: var(--opacity-hover);
  }
}

.menu .menu-panel {
  overflow-y: auto;
  color: RGB(var(--color-text));
  background-color: RGB(var(--color-background));
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 9999;
  padding: var(--space-4);
  width: 100%;

  @include media(">small") {
    width: var(--menu-width);
  }
}

.menu .menu-logo {
  margin: auto;
}

.menu .menu-search .search-bar {
  margin: auto;
}

.menu .menu-primary-navigation,
.menu .menu-secondary-navigation {
  text-align: center;
}

.menu .c-secondary-nav__item {
  margin-bottom: var(--space-4);

  &:last-of-type {
    margin-bottom: 0;
  }
}

.menu .menu-primary-navigation .c-secondary-nav__link {
  @include typeface(header, 9);
  font-weight: normal;
}

.menu .menu-secondary-navigation .c-secondary-nav__link {
  @include typeface(body, 6);
  font-weight: normal;
  color: RGB(var(--color-link));
}

.menu .c-share-tools {
  justify-content: center;

  @include media("<=large") {
    .c-share-tools__label {
      text-align: center;
    }
  }
}

.menu .menu-nypr-logo {
  margin: auto;
  width: 100px;
}

.menu .menu-nypr-logo svg:hover {
  opacity: 1;
}

.menu .menu-copyright {
  @include typeface(body, 5);
  text-align: center;
}

.menu .menu-terms-links {
  @include typeface(body, 3);
  text-transform: uppercase;
}

.menu .menu-terms-links a {
  text-decoration: none;
  font-weight: bold;
  color: RGB(var(--color-text));
}
</style>
