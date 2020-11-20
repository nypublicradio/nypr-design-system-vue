<template>
    <Lottie :options="defaultOptions" :height="26" :width="26"  />
</template>
 
<script>
import * as animationData from './animations/AnimationWaveActive.json'
import Lottie from 'vue-lottie/src/lottie.vue'
 
export default {
    components: {
        Lottie
    },
    data() {
        return {
            defaultOptions: {
                animationData: animationData.default
            }
        }
    }
}
</script>