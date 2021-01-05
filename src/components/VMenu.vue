<template>
  <div class="menu">
    <div
      class="menu-hamburger"
      @click="toggleMenu"
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
          @click="menuOpen = false"
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
          <secondary-navigation :nav-items="primaryNav" />
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
          <secondary-navigation :nav-items="secondaryNav" />
        </div>
        <div
          v-if="hasSocialSlot"
          class="menu-social"
        >
          <v-spacer size="triple" />
          <slot name="social" />
        </div>
        <v-spacer size="triple" />
        <div class="menu-nypr-logo">
          <nypr-logo />
        </div>
        <v-spacer size="triple" />
        <p class="menu-copyright">
          © 2020 New York Public Radio. All rights reserved.
        </p>
        <v-spacer size="triple" />
        <div class="menu-terms-links l-grid l-grid--2up l-grid--2up--small">
          <a
            href="https://www.wnyc.org/terms"
            target="_blank"
            rel="noopener"
          >
            <strong>Terms of Use</strong>
          </a>
          <a
            href="https://www.wnyc.org/privacy"
            target="_blank"
            rel="noopener"
          >
            <strong>Privacy Policy</strong>
          </a>
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
  name: 'VMenu',
  components: {
    CloseIcon,
    HamburgerIcon,
    NyprLogo,
    SecondaryNavigation,
    VSpacer
  },
  props: {
    primaryNav: {
      type: Array,
      default: null
    },
    secondaryNav: {
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
      return !!this.$slots.search
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
      console.log('menu toggle')
    }
  }
}
</script>

<style lang="scss">
.menu {
  --menu-width: 368px;
}

.menu .menu-hamburger {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;
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
  width: 120px;
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
  text-align: center;
  text-transform: uppercase;
}

.menu .menu-terms-links a {
  text-decoration: none;
  color: RGB(var(--color-text));
}
</style>
