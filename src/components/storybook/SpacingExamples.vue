<template>
  <div>
    <p class="u-space--bottom">
      Half:
    </p>
    <v-spacer
      size="half"
      class="u-background-color--light-gray"
    />
    <p class="u-space--top u-space--bottom">
      Default:
    </p>
    <v-spacer class="u-background-color--light-gray" />
    <p class="u-space--top u-space--bottom">
      Double:
    </p>
    <v-spacer
      size="double"
      class="u-background-color--light-gray"
    />
    <p class="u-space--top u-space--bottom">
      Triple:
    </p>
    <v-spacer
      size="triple"
      class="u-background-color--light-gray"
    />
    <p class="u-space--top u-space--bottom">
      Quad:
    </p>
    <v-spacer
      size="quad"
      class="u-background-color--light-gray"
    />
  </div>
</template>

<script>
import VSpacer from '../VSpacer'

export default {
  name: 'SpacingExamples',
  components: { VSpacer }
}
</script>

<style scoped>
.u-background-color--light-gray {
  background: RGB(var(--color-light-gray));
}
</style>
