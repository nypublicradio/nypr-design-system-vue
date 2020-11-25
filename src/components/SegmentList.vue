<template>
  <div class="segment-list">
    <v-accordion
      should-open-on-load
      closed-on-mobile
    >
      <template v-slot:header>
        <h3 class="segment-list-title">
          Segments
        </h3>
      </template>
      <template v-slot:content>
        <slot />
      </template>
    </v-accordion>
  </div>
</template>

<script>
import VAccordion from '../components/VAccordion'

export default {
  name: 'SegmentList',
  components: {
    VAccordion
  }
}
</script>

<style lang="scss">
.segment-list .segment-list-title {
  @include typeface(body, 4);
  text-transform: uppercase;
  font-weight: bold;
}

.segment-list .accordion-header {
  justify-content: normal !important;
  margin-bottom: var(--space-1);
}

.segment-list .accordion-header-wrapper {
  width: auto !important;
}
</style>
