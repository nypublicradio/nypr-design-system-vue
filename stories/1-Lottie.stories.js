import AudioWaveIsActive from '../src/components/animations/AudioWaveIsActive'

export default {
  title: 'Components/Atoms/Lottie Animations'
}

export const AudioIsPlaying = () => ({
  components: {
    AudioWaveIsActive
  },
  template: `
    <span class="o-icon u-icon--l">
      <audio-wave-is-active />
    </span>
  `
})
