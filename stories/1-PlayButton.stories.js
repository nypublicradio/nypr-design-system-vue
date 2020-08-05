import PlayButton from '../src/components/PlayButton'
import BigPauseIcon from '../src/components/svg/BigPauseIcon'
import BigPlayIcon from '../src/components/svg/BigPlayIcon'

export default {
  title: 'Icons'
}

export const Play = () => ({
  components: { PlayButton },
  template: `
    <div class="sbdocs-large-container">
      <play-button />
    </div>
  `
})

export const BigPlay = () => ({
  components: { BigPlayIcon },
  template: `
    <div class="sbdocs-large-container">
      <big-play-icon />
    </div>
  `
})

export const BigPause = () => ({
  components: { BigPauseIcon },
  template: `
    <div class="sbdocs-large-container">
      <big-pause-icon />
    </div>
  `
})
