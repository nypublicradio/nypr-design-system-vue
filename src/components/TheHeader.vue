<template>
  <header class="c-main-header">
    <div
      id="header-inner"
      class="c-main-header__inner "
    >
      <div class="c-main-header__left _u-truncate--flex">
        <div
          class="c-main-header__branding"
          name="logo"
        >
          <a
            href="/"
            aria-label="home page"
          >
            <slot />
          </a>
        </div>
      </div>
      <div class="c-main-header__right">
        <v-button
          class="c-main-header__donate"
          label="Donate"
          href="https://pledge3.wnyc.org/donate/main/onestep/?utm_medium=partnersite&utm_source=w3k&utm_campaign=brandheader"
          target="_blank"
          rel="noopener"
          data-category="Click Tracking"
          data-action="Header"
          data-label="Donate Button"
        />
      </div>
    </div>
  </header>
</template>

<script>
import VButton from '../components/VButton'

export default {
  name: 'TheHeader',
  components: { VButton }
}
</script>

<style
  scoped
  lang="scss"
>
.c-main-header {
  text-align: center;
  position: relative;
  z-index: $z-index-header;
  @include typeface(header, 5);
}

.c-main-header svg {
  fill: RGB(var(--color-text));
  height: 52px;
}

.c-main-header a svg {
  fill: RGB(var(--color-navigation-link));
}

.c-main-header a:hover svg {
  fill: RGBA(var(--color-navigation-link-hover), var(--opacity-navigation-link-hover));
}

.c-main-header__inner {
  background-color: RGB(var(--color-background));
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--heading-height);
  position: relative;

  @include media(">xsmall") {
    padding: var(--space-2) var(--space-2) var(--space-2) var(--space-5);
  }
}

.c-main-header__branding {
  flex-shrink: 0; /* prevent from shrinking in flex container*/
  width: 120px;

  @include media(">xsmall") {
    width: 150px;
  }
}

.c-main-header__left {
  display: flex;
  align-items: flex-end;
}

.c-main-header__right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
}

.c-main-header__donate {
  margin-right: var(--space-3);

  @include media("<=small") {
    margin-right: 0;
  }

  @include media("<=medium") {
    font-size: var(--font-size-3);
    padding-left: var(--space-3);
    padding-right: var(--space-3);
  }
}

.c-main-header__donate.button {
  font-size: var(--font-size-5);
}
</style>
