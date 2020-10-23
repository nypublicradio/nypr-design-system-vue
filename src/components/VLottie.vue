<template>
  <Lottie
    :options="defaultOptions"
  />
</template>

<script>
import * as animationData from './animations/AudioWaveIsActive.json'
import Lottie from 'vue-lottie/src/lottie.vue'

export default {
  components: {
    Lottie
  },
  data () {
    return {
      defaultOptions: {
        animationData: animationData.default
      }
    }
  }
}
</script>
