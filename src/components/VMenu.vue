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
        class="menu-panel"
        v-if="menuOpen"
      >
        <div
          class="menu-close"
          @click="menuOpen = false"
        >
          <close-icon />
        </div>
        <div class="menu-logo">
          <slot name="logo" />
        </div>
        <p>menu stuff goes here</p>
      </nav>
    </transition>
  </div>
</template>

<script>
import CloseIcon from '../components/icons/CloseIcon'
import HamburgerIcon from '../components/icons/HamburgerIcon'

export default {
  name: 'VMenu',
  components: {
    CloseIcon,
    HamburgerIcon
  },
  data: function () {
    return {
      menuOpen: false
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
  --menu-width: 300px;
}

.menu-hamburger {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}

.menu-logo {
  width: 94px;
  margin-bottom: var(--space-5);
}

.menu-close {
  cursor: pointer;
  position: absolute;
  width: 30px;
  height: 30px;
  // adding / adjusting for padding to make the tappable area 30px
  padding: 6px;
  top: -6px;
  right: -6px;
  transition: var(--animation-duration-standard);

  &:hover {
    opacity: var(--opacity-hover);
  }
}

.menu-panel {
  overflow-y: auto;
  color: RGB(var(--color-text));
  background-color: RGB(var(--color-background-muted));
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 9999;
  padding: var(--space-3);
  width: var(--menu-width);
}
</style>
