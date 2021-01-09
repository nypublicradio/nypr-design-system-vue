import AudioWaveIsActive from '../../../src/components/animations/AudioWaveIsActive'
import LoadingIcon from '../../../src/components/animations/LoadingIcon'

export default {
  title: 'Components/Atoms/Lottie Animations'
}

export const AudioIsPlaying = () => ({
  components: {
    AudioWaveIsActive,
    LoadingIcon
  },
  template: `
    <span class="o-icon u-icon--l">
      <audio-wave-is-active />
    </span>
  `
})

export const LoadingAnimation = () => ({
  components: {
    LoadingIcon
  },
  template: `
    <span class="o-icon u-icon--l" style="background: black">
      <loading-icon />
    </span>
  `
})
