<template>
  <v-card
    class="person-card"
    :image="image"
    :title="name"
    :title-link="nameLink"
    :subtitle="role"
    :image-height="120"
    :image-width="120"
  />
</template>

<script>
import VCard from './VCard'

/**
 * A component for displaying details about a person
 */
export default {
  components: {
    VCard
  },
  props: {
    /**
     *  A URL pointing to an image of the person.
     */
    image: {
      type: String,
      default: null
    },
    /**
     *  Full name of the person.
     */
    name: {
      type: String,
      default: null
    },
    /**
     *  A URL pointing to the person's bio page.
     */
    nameLink: {
      type: String,
      default: null
    },
    /**
     *  The person's role or job. e.g. Host, Guest, Author, etc.
     */
    role: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">

.card.person-card {
  --card-image-width: 112px;
  --card-image-height: 112px;
  width: 160px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  margin: var(space-4);
  @include media(">medium") {
    width: auto;
    flex-direction: row;
    text-align: left;
    --card-image-width: 100px;
    --card-image-height: 100px;
  }
}

.person-card .card-image {
  display: inline-block;
  border-radius: 50%;
  @include media(">medium") {
    display: block;
  }
}

.person-card .card-details {
  align-self: center;
  padding: 8px 16px;
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

.person-card.mod-horizontal-mobile {
  display: block;
  width: auto;
  flex-direction: row;
  text-align: left;
}

.person-card.mod-vertical-desktop {
  @include media(">medium") {
    display: inline-block;
    width: 200px;
    flex-direction: column;
    text-align: center;
  }
}
</style>
