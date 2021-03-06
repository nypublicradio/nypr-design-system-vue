<template>
  <footer class="c-main-footer">
    <div class="l-container">
      <div class="l-grid l-grid--2up l-grid--large-gutters">
        <div>
          <div class="c-main-footer__logo u-space--double--bottom">
            <slot name="logo" />
          </div>
          <div
            class="c-main-footer__slogan u-space--triple--bottom"
            v-html="slogan"
          />
          <div
            class="c-main-footer__nav c-main-footer__primary-nav"
            name="primaryNavFooter"
          >
            <secondary-navigation
              orientation="horizontal"
              :nav-items="primaryNav"
            />
          </div>
          <div
            v-if="hasLeftComponentSlot"
            class="c-main-footer__left-component"
          >
            <slot name="leftComponent" />
          </div>
        </div>

        <div>
          <div
            v-if="hasRightComponentSlot"
            class="c-main-footer__right-component u-space--double--bottom"
          >
            <slot name="rightComponent" />
          </div>
          <div class="l-grid l-grid--2up l-grid--2up--small">
            <div
              v-if="secondaryNav"
              class="c-main-footer__secondary-nav u-space--double--bottom"
              name="secondaryNavFooter"
            >
              <h3
                v-if="subheader1"
                class="c-secondary-nav__subheader u-space--bottom"
              >
                {{ subheader1 }}
              </h3>
              <div
                v-else
                class="c-secondary-nav__subheader-spacer"
              />
              <secondary-navigation :nav-items="secondaryNav" />
            </div>
            <div
              v-if="tertiaryNav"
              class="c-main-footer__secondary-nav u-space--double--bottom"
              name="tertiaryNavFooter"
            >
              <h3
                v-if="subheader2"
                class="c-secondary-nav__subheader u-space--bottom"
              >
                {{ subheader2 }}
              </h3>
              <div
                v-else
                class="c-secondary-nav__subheader-spacer"
              />
              <secondary-navigation :nav-items="tertiaryNav" />
            </div>
          </div>
        </div>
      </div>

      <div class="l-grid l-grid--2up--xlarge l-grid--middle l-grid--large-gutters">
        <div class="c-main-footer__brand-group">
          <div class="c-main-footer__nypr-logo">
            <nypr-logo />
          </div>
        </div>
        <div
          class="c-main-footer__social"
          name="shareToolFooter"
        >
          <slot name="social" />
        </div>
      </div>

      <div class="c-main-footer__bottom u-space--top">
        <div class="c-main-footer__copyright">
          <p class="u-font--secondary-style u-font--xs c-main-footer__copyright-text u-color--white">
            &copy; {{ currentYear }} New York Public Radio. All rights reserved.
          </p>
        </div>
        <div class="c-main-footer__terms-links">
          <secondary-navigation
            orientation="responsive"
            :nav-items="legalNav"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import NyprLogo from '../components/icons/NyprLogo'
import SecondaryNavigation from '../components/SecondaryNavigation'

export default {
  name: 'TheFooter',
  components: {
    NyprLogo,
    SecondaryNavigation
  },
  props: {
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
    },
    slogan: {
      type: String,
      default: null
    },
    subheader1: {
      type: String,
      default: null
    },
    subheader2: {
      type: String,
      default: null
    },
    tertiaryNav: {
      type: Array,
      default: null
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    },
    hasLeftComponentSlot () {
      return !!this.$slots.leftComponent
    },
    hasRightComponentSlot () {
      return !!this.$slots.rightComponent
    }
  }
}
</script>

<style
  lang="scss"
>
.c-main-footer {
  padding: var(--space-5);
  background-color: RGB(var(--color-background));
  color: RGB(var(--color-text));

  @include media(">xlarge") {
    padding: var(--space-5) 0;
  }
}

.c-main-footer a,
.c-main-footer a:visited,
.c-main-footer a:active {
  color: RGB(var(--color-link));
  text-decoration: none;

  &:hover {
    color: RGB(var(--color-link-hover));
    opacity: var(--opacity-link-hover);
    text-decoration: none;
  }
}

.c-main-footer .c-main-footer__inner {
  @include media(">xlarge") {
    margin-top: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}

.c-main-footer .c-main-footer__left-component {
  margin: 0;

  @include media(">medium") {
    margin: 0 0 var(--space-6);
  }
}

.c-main-footer .c-main-footer__col1 {
  width: 100%;
  max-width: 548px;
  margin-left: auto;
  margin-right: auto;
}

.c-main-footer .c-main-footer__branding {
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @include media(">xlarge") {
    justify-content: flex-start;
  }
}

.c-main-footer svg {
  fill: RGB(var(--color-text));
}

.c-main-footer a svg {
  fill: RGB(var(--color-text));
}

.c-main-footer a:hover svg {
  fill: rgba(var(--color-navigation-link-hover), var(--opacity-navigation-link-hover));
}

.c-main-footer .c-main-footer__logo {
  min-width: 150px;
  max-width: 150px;
  margin-right: var(--space-4);

  @include media(">small") {
    margin-right: var(--space-7);
  }
}

.c-main-footer p,
.c-main-footer .c-main-footer__slogan p {
  @include typeface(body, 6);
}

.c-main-footer .c-main-footer__utility {
  @include media("<=small") {
    margin-bottom: -18px;
  }
}

.c-main-footer .c-main-footer__nav {
  @include media("<=medium") {
    text-align: center;
  }
}

.c-main-footer .c-main-footer__primary-nav {
  margin-bottom: var(--space-4);
  text-align: center;
  @include media(">medium") {
    margin-bottom: var(--space-6);
    text-align: left;
  }
}

.c-main-footer .c-main-footer__nav .c-secondary-nav__item {
  display: flex;
  margin: 0 var(--space-3) var(--space-4) 0;

  @include media("<=medium") {
    margin: 0 var(--space-3) 0 0;
  }
}

.c-main-footer .c-main-footer__nav .c-secondary-nav__item:not(:last-child) {
  @include media(">xlarge") {
    margin-right: var(--space-5);
  }
}

.c-main-footer .c-main-footer__nav .c-secondary-nav__link {
  padding: var(--space-2) 0;
}

.c-main-footer .c-main-footer__primary-nav .c-secondary-nav__item {
  @include media("<xlarge") {
    text-align: left;
  }
}

.c-main-footer .c-main-footer__social {
  margin: auto;
}

.c-main-footer .c-share-tools__label {
  @include typeface(body, 5);
  text-align: center;
  @include media(">medium") {
    text-align: left;
  }
}

.c-main-footer .c-share-tools__group {
  margin: auto;
  @include media(">medium") {
    margin: initial;
  }
}

.c-main-footer .c-secondary-nav__subheader {
  @include typeface(subheader, 7);
  font-weight: normal;
}

.c-main-footer .c-secondary-nav__subheader-spacer {
  height: 38px;
}

.c-main-footer .c-main-footer__nypr-logo {
  width: 120px;
  margin: 0 auto 0;

  @include media(">xlarge") {
    margin: 0 var(--space-5) 0 0;
  }
}

.c-main-footer .c-main-footer__nypr-logo svg:hover {
  opacity: 1;
}

.c-main-footer .c-main-footer__nypr-logo path,
.c-main-footer .c-main-footer__nypr-logo polygon {
  fill: RGB(var(--color-text));
}

.c-main-footer .c-main-footer__brand-group {
  text-align: center;

  @include media(">xlarge") {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}

.c-main-footer .c-toggle-box__content {
  min-width: 320px;
  max-width: 400px;
  width: 100%;
}

.c-main-footer .c-main-footer__bottom {
  padding: var(--space-4) var(--space-3);
  text-align: center;
  margin-left: calc(var(--space-3) * -1);
  margin-right: calc(var(--space-3) * -1);

  @include media(">xlarge") {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    align-items: center;
    text-align: left;
  }
}

.c-main-footer .c-main-footer__bottom p {
  @include typeface(body, 6);
  margin-bottom: var(--space-3);
  @include media(">large") {
    margin-bottom: 0;
    height: 35px;
  }
}

.c-main-footer .c-main-footer__copyright {
  @include media(">xlarge") {
    margin-right: var(--space-4);
  }
}

.c-main-footer .c-main-footer__terms-links .c-secondary-nav__list {
  justify-content: center;
  align-items: center;
  @include media(">xlarge") {
    align-items: flex-start;
  }
}

.c-main-footer .c-main-footer__terms-links a {
  @include typeface(body, 6);
}

.c-main-footer .c-toggle-box__label {
  text-transform: none;
}

.c-main-footer .c-main-footer__nav .c-secondary-nav__item {
  font-size: var(--font-size-6);
}

.c-main-footer .c-main-footer__secondary-nav .c-secondary-nav__item {
  display: flex;
  margin-bottom: var(--space-2);
  font-size: var(--font-size-6);
}

// view all brands
.c-main-footer .o-text-with-icon {
  font-size: var(--font-size-3);
}

.jlgreene-logo-icon {
  width: 100px;
  padding-top: 5px;
}

</style>
