<template>
  <div class="l-grid l-grid--4up">
    <div>
      <div class="u-flex u-align-items--center u-space--bottom">
        <span class="o-icon u-icon--l u-space--right">
          <gothamist-arrow />
        </span>
        <div>gothamist arrow</div>
      </div>
    </div>
    <div>
      <div class="u-flex u-align-items--center u-space--bottom">
        <span class="o-icon u-icon--l u-space--right">
          <gothamist-logo />
        </span>
        <div>gothamist logo</div>
      </div>
    </div>
    <div>
      <div class="u-flex u-align-items--center u-space--bottom">
        <span class="o-icon u-icon--l u-space--right">
          <gothamist-logo-stacked />
        </span>
        <div>gothamist logo (stacked)</div>
      </div>
    </div>
    <div>
      <div class="u-flex u-align-items--center u-space--bottom">
        <span class="o-icon u-icon--l u-space--right">
          <nyc-love />
        </span>
        <div>nyc love</div>
      </div>
    </div>
    <div>
      <div class="u-flex u-align-items--center u-space--bottom">
        <span class="o-icon u-icon--l u-space--right">
          <party-confetti />
        </span>
        <div>party confetti</div>
      </div>
    </div>
  </div>
</template>

<script>
import GothamistArrow from '../icons/gothamist/GothamistArrow'
import GothamistLogo from '../icons/gothamist/GothamistLogo'
import GothamistLogoStacked from '../icons/gothamist/GothamistLogoStacked'
import NycLove from '../icons/gothamist/NycLove'
import PartyConfetti from '../icons/gothamist/PartyConfetti'

export default {
  name: 'GothamistIcons',
  components: {
    GothamistLogoStacked,
    GothamistLogo,
    GothamistArrow,
    NycLove,
    PartyConfetti
  }
}
</script>
