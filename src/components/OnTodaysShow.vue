<template>
  <div class="on-todays-show">
    <h3 class="on-todays-show-title">
      On Today's Show
    </h3>
    <p
      v-if="headline"
      class="on-todays-show-headline"
    >
      {{ headline }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'OnTodaysShow',
  props: {
    headline: {
      default: null,
      type: String
    }
  }
}
</script>

<style lang="scss">
.on-todays-show .on-todays-show-title {
  @include typeface(header, 8);
  margin-bottom: var(--space-4);
}

.on-todays-show .on-todays-show-headline {
  @include typeface(header, 10);
}
</style>
