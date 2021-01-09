<template>
  <lottie
    :options="defaultOptions"
  />
</template>

<script>
import * as animationData from './animations/AudioWaveIsActiveJson.json'
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
