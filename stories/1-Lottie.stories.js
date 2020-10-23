import VLottie from '../src/components/VLottie'

export default {
  title: 'Components/Atoms/Lottie'
}

export const AudioIsPlaying = () => ({
  components: {
    VLottie
  },
  template: `
    <span class="o-icon u-icon--l">
      <v-lottie />
    </span>
  `
})
