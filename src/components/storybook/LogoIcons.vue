<template>
  <div class="l-grid l-grid--5up">
    <div class="u-padding">
      <nypr-logo />
    </div>
    <div class="u-padding">
      <gothamist-logo />
    </div>
    <div class="u-padding">
      <gothamist-logo-stacked />
    </div>
    <div class="u-padding">
      <wnyc-logo />
    </div>
    <div class="u-padding">
      <wqxr-logo />
    </div>
  </div>
</template>

<script>
import WqxrLogo from '../icons/wqxr/WqxrLogo'
import WnycLogo from '../icons/wnyc/WnycLogo'
import GothamistLogoStacked from '../icons/gothamist/GothamistLogoStacked'
import GothamistLogo from '../icons/gothamist/GothamistLogo'
import NyprLogo from '../icons/NyprLogo'

export default {
  name: 'LogoIcons',
  components: {
    GothamistLogo,
    GothamistLogoStacked,
    NyprLogo,
    WnycLogo,
    WqxrLogo
  }
}
</script>
