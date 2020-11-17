<template>
  <v-card
    class="person-card"
    :image="person.image"
    :title="person.name"
    :title-link="person.nameLink"
    :subtitle="person.role"
  />
</template>

<script>
import VCard from './VCard'

export default {
  components: {
    VCard
  },
  props: {
    person: {
      type: Object,
      default () { return {} }
    }
  }
}
</script>

<style lang="scss">
.person-card {
  --card-image-width: 72px;
  --card-image-height: 72px;
  width: auto;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  margin: var(space-4);
    @include media(">medium") {
    --card-image-width: 112px;
    --card-image-height: 112px;
  }
}

  .person-card .card-image {
    border-radius: 50%;
  }

  .person-card .card-details {
    align-self: center;
  }

    .person-card .card-details > *:not(:last-child) {
      margin-bottom: var(--space-1);
    }

  .person-card .card-title {
    font-family: var(--font-family-body);
    font-size: var(--font-size-2);
    line-height: 1.25;
    font-weight: bold;
    @include media(">medium") {
      font-size: var(--font-size-6);
    }
  }

  .person-card .card-subtitle {
    font-family: var(--font-family-body);
    font-size: var(--font-size-1);
    line-height: 1.25;
    text-transform: uppercase;
    @include media(">medium") {
      font-size: var(--font-size-3);
    }
  }

</style>
