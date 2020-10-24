<template>
  <div class="l-grid l-grid--4up">
    <div>
      <div class="u-flex u-align-items--center u-space--bottom">
        <span class="o-icon u-icon--l u-space--right">
          <listener-count />
        </span>
        <div>listener count</div>
      </div>
    </div>
    <div>
      <div class="u-flex u-align-items--center u-space--bottom">
        <span class="o-icon u-icon--l u-space--right">
          <music-note />
        </span>
        <div>music notes</div>
      </div>
    </div>
    <div>
      <div class="u-flex u-align-items--center u-space--bottom">
        <span class="o-icon u-icon--l u-space--right">
          <pause-icon />
        </span>
        <div>pause</div>
      </div>
    </div>
    <div>
      <div class="u-flex u-align-items--center u-space--bottom">
        <span class="o-icon u-icon--l u-space--right">
          <wqxr-logo />
        </span>
        <div>wqxr logo</div>
      </div>
    </div>
  </div>
</template>

<script>
import ListenerCount from '../icons/wqxr/ListenerCount'
import MusicNote from '../icons/wqxr/MusicNote'
import PauseIcon from '../icons/wqxr/PauseIcon'
import WqxrLogo from '../icons/wqxr/WqxrLogo'

export default {
  name: 'WnycIcons',
  components: {
    ListenerCount,
    MusicNote,
    PauseIcon,
    WqxrLogo
  }
}
</script>
