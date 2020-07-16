<template>
  <section class="brand-bar">
    <div class="nypr-network">
      <a class="nypr-network-link">NYPR Network</a>
      <caret-right />
    </div>
    <NyprLogo />
    <SquareBracketOpen />
    <div class="brand-bar-logos">
      <a
        href="https://www.wnyc.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header" data-label="wnyc-logo" target="_blank" class="brand-bar-link gtm__click-tracking">
        <wnyc-logo />
      </a>
      <a
        href="https://www.gothamist.com?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header" data-label="gothamist-logo" target="_blank"
        class="brand-bar-link gtm__click-tracking">
        <gothamist-logo />
      </a>
      <a
        href="https://www.wnycstudios.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header" data-label="wnyc-studios-logo" target="_blank"
        class="brand-bar-link gtm__click-tracking">
        <wnyc-studios-logo />
      </a>
      <a
        href="http://www.njpublicradio.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header" data-label="njpr-logo" target="_blank" class="brand-bar-link gtm__click-tracking">
        <njpr-logo />
      </a>
      <a
        href="https://www.wqxr.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header" data-label="wqxr-logo" target="_blank" class="brand-bar-link gtm__click-tracking">
        <wqxr-logo />
      </a>
      <a
        href="https://www.newsounds.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header" data-label="new-sounds-logo" target="_blank"
        class="brand-bar-link gtm__click-tracking">
        <new-sounds-logo />
      </a>
      <a
        href="https://www.thegreenespace.org?utm_medium=partnersite&amp;utm_campaign=brandheader&amp;utm_source=newsounds"
        data-action="Brand Header" data-label="greene-space-logo" target="_blank"
        class="brand-bar-link gtm__click-tracking">
        <greene-space-logo />
      </a>
    </div>
    <SquareBracketClose />
  </section>
</template>

<script>
  import CaretRight from './svg/CaretRight'
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
    height: 36px;
    align-items: center;
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
    align-items: center;
  }

  .brand-bar .brand-bar-link {
    display: flex;
    align-items: center;
    opacity: .6;

    &:hover {
      opacity: 1;
    }
  }

  .brand-bar svg {
    display: none;
    @media all and (min-width: $large) {
      display: block;
      fill: white;
      height: 34px;
      margin: 0 .8rem;
    }
  }

  .brand-bar .nypr-logo {
    opacity: .5;
  }

  .brand-bar .square-bracket-open-icon,
  .brand-bar .square-bracket-close-icon {
    height: 31px;
    opacity: .5;
  }

  .brand-bar .wnyc-logo {
    height: 26px;
  }

  .brand-bar .wnyc-studios-logo {
    height: 30px;
  }

  .brand-bar .wqxr-logo,
  .brand-bar .njpr-logo {
    height: 20px;
  }

  .brand-bar .gothamist-logo {
    height: 36px;
  }

  .brand-bar .new-sounds-logo {
    height: 15px;
    width: auto;
    fill: white;
  }

  .brand-bar .new-sounds-logo .st0 {
    height: 36px;
    fill: white;
  }
</style>
