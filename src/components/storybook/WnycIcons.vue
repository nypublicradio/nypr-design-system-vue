<template>
  <div class="l-grid l-grid--4up">
    <div>
      <div class="u-flex u-align-items--center u-space--bottom">
        <span class="o-icon u-icon--l u-space--right">
          <jlgreene title="test title" />
        </span>
        <div>jlgreene logo</div>
      </div>
    </div>
    <div>
      <div class="u-flex u-align-items--center u-space--bottom">
        <span class="o-icon u-icon--l u-space--right">
          <wnyc-logo />
        </span>
        <div>wnyc logo</div>
      </div>
    </div>
  </div>
</template>

<script>
import Jlgreene from '../icons/wnyc/JlgreeneLogo'
import WnycLogo from '../icons/wnyc/WnycLogo'

export default {
  name: 'WnycIcons',
  components: {
    Jlgreene,
    WnycLogo
  }
}
</script>
