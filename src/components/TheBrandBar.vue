<template>
  <section class="brand-bar">
    <div
      class="nypr-network"
      @click="showBrandLogos = !showBrandLogos"
    >
      <a class="nypr-network-link">NYPR Network</a>
      <caret-right v-if="!showBrandLogos" />
      <close-icon v-if="showBrandLogos" />
    </div>
    <NyprLogo />
    <SquareBracketOpen />
    <div
      class="brand-bar-logos"
      :class="{ 'show': showBrandLogos }"
    >
      <a
        href="https://www.wnyc.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header"
        data-label="wnyc-logo"
        target="_blank"
        class="brand-bar-link gtm__click-tracking"
        rel="noopener"
        aria-label="visit the wnyc website"
      >
        <wnyc-logo />
      </a>
      <a
        href="https://www.gothamist.com?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header"
        data-label="gothamist-logo"
        target="_blank"
        class="brand-bar-link gtm__click-tracking"
        rel="noopener"
        aria-label="visit the gothamist website"
      >
        <gothamist-logo />
      </a>
      <a
        href="https://www.wnycstudios.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header"
        data-label="wnyc-studios-logo"
        target="_blank"
        class="brand-bar-link gtm__click-tracking"
        rel="noopener"
        aria-label="visit the wnyc studios website"
      >
        <wnyc-studios-logo />
      </a>
      <a
        href="http://www.njpublicradio.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header"
        data-label="njpr-logo"
        target="_blank"
        class="brand-bar-link gtm__click-tracking"
        rel="noopener"
        aria-label="visit the njpr website"
      >
        <njpr-logo />
      </a>
      <a
        href="https://www.wqxr.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header"
        data-label="wqxr-logo"
        target="_blank"
        class="brand-bar-link gtm__click-tracking"
        rel="noopener"
        aria-label="visit the wqxr website"
      >
        <wqxr-logo />
      </a>
      <a
        href="https://www.newsounds.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header"
        data-label="new-sounds-logo"
        target="_blank"
        class="brand-bar-link gtm__click-tracking"
        rel="noopener"
        aria-label="visit the new sounds website"
      >
        <new-sounds-logo />
      </a>
      <a
        href="https://www.thegreenespace.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header"
        data-label="greene-space-logo"
        target="_blank"
        class="brand-bar-link gtm__click-tracking"
        rel="noopener"
        aria-label="visit the greene space website"
      >
        <greene-space-logo />
      </a>
    </div>
    <SquareBracketClose />
  </section>
</template>

<script>
  import CaretRight from './svg/CaretRight'
  import CloseIcon from './svg/CloseIcon'
  import NyprLogo from './svg/NyprLogo'
  import SquareBracketOpen from './svg/SquareBracketOpen'
  import WnycLogo from './svg/WnycLogo'
  import GothamistLogo from './svg/GothamistLogo'
  import WnycStudiosLogo from './svg/WnycStudiosLogo'
  import NjprLogo from './svg/NjprLogo'
  import WqxrLogo from './svg/WqxrLogo'
  import NewSoundsLogo from './svg/NewSoundsLogo'
  import GreeneSpaceLogo from './svg/GreeneSpaceLogo'
  import SquareBracketClose from './svg/SquareBracketClose'

  export default {
    name: 'BrandBar',
    components: {
      CaretRight,
      CloseIcon,
      NyprLogo,
      SquareBracketOpen,
      WnycLogo,
      GothamistLogo,
      WnycStudiosLogo,
      NjprLogo,
      WqxrLogo,
      NewSoundsLogo,
      GreeneSpaceLogo,
      SquareBracketClose
    },
    data () {
      return {
        showBrandLogos: false
      }
    }
  }
</script>

<style lang="scss">
  @import "src/assets/scss/breakpoints";

  .brand-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background: var(--color-dark-gray);
    height: 36px;
    padding: 0 .75rem;
    @media all and (min-width: $large) {
      flex-direction: row;
      height: 62px;
      align-items: center;
      padding: 0 1.5rem;
    }
  }

  .brand-bar .nypr-network {
    display: flex;
    align-items: baseline;
    margin-top: 6px;
    @media all and (min-width: $large) {
      display: none;
    }
  }

  .brand-bar .nypr-network-link {
    color: var(--color-white);
    font-size: 15px;
  }

  .brand-bar .caret-right {
    height: 14px;
    margin-left: .5rem;
    width: 8px;
    display: flex;
    @media all and (min-width: $large) {
      display: none;
    }
  }

  .brand-bar-logos {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--color-dark-gray);
    min-height: 100vh;
    height: 100%;
    width: 200px;
    position: absolute;
    right: -200px;
    top: 36px;
    bottom: 0;
    padding: 2rem;
    z-index: 10;
    transition: var(--transition);
    @media all and (min-width: $large) {
      flex-direction: row;
      min-height: auto;
      width: auto;
      position: relative;
      top: auto;
      right: auto;
      padding: 0;
    }
    &.show {
      right: 0;
    }
  }

  .brand-bar .brand-bar-link {
    display: flex;
    align-items: center;
    @media all and (min-width: $large) {
      opacity: .6;
      &:hover {
        opacity: 1;
      }
    }
  }

  .brand-bar svg {
    display: block;
    fill: white;
    margin: 0 0 2rem;
    width: 100px;
    @media all and (min-width: $large) {
      height: 34px;
      width: auto;
      margin: 0 .8rem;
    }
  }

  .brand-bar .close-icon {
    width: 12px;
    height: 12px;
    margin-left: .5rem;
  }

  .brand-bar .nypr-logo {
    opacity: .5;
  }

  .brand-bar .square-bracket-open-icon,
  .brand-bar .square-bracket-close-icon {
    opacity: .5;
    width: 100px;
    @media all and (min-width: $large) {
      height: 31px;
      width: auto;
    }
  }

  .brand-bar .wnyc-logo {
    width: 100px;
    @media all and (min-width: $large) {
      height: 26px;
      width: auto;
    }
  }

  .brand-bar .wnyc-studios-logo {
    width: 100px;
    @media all and (min-width: $large) {
      height: 30px;
      width: auto;
    }
  }

  .brand-bar .wqxr-logo,
  .brand-bar .njpr-logo {
    width: 100px;
    @media all and (min-width: $large) {
      height: 20px;
      width: auto;
    }
  }

  .brand-bar .gothamist-logo {
    width: 100px;
    @media all and (min-width: $large) {
      height: 36px;
      width: auto;
    }
  }

  .brand-bar .new-sounds-logo {
    fill: white;
    width: 100px;
    height: auto;
    @media all and (min-width: $large) {
      height: 15px;
      width: auto;
    }
  }

  .brand-bar .new-sounds-logo .st0 {
    height: 36px;
    fill: white;
  }
</style>
