<template>
  <div
    class="c-share-tools"
    :class="layout"
  >
    <span
      v-if="label"
      class="c-share-tools__label u-font--secondary-style u-font--xs u-color--white"
    >
      {{ label }}
    </span>
    <div class="c-share-tools__group">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareTools',
  props: {
    label: {
      type: String,
      default: null
    },
    layout: {
      type: String,
      default: 'horizontal'
    }
  }
}
</script>

<style lang="scss">
.c-share-tools {
  display: flex;
  align-items: center;

  @include media("<=small") {
    flex-wrap: wrap;
  }

  &.vertical {
    flex-direction: column;
    align-items: flex-start;
  }
}

@include media("<=small") {
  .c-share-tools__label {
    flex-basis: 100%;
    margin: 0 0 2px 0;

    + .c-share-tools__group > .c-share-tools__link:first-of-type {
      margin-left: -5px; /* align first icon with label if present*/
    }
  }

  .c-share-tools__link {
    margin: 0;
  }

  .c-share-tools__group {
    flex-wrap: wrap;
  }

  .c-share-tools__group > * + * {
    margin: 0 0 0 var(--space-1);
  }
}

.c-share-tools .c-share-tools__label {
  @include typeface(small, 4);
  margin-right: var(--space-2);
}

.c-share-tools.vertical .c-share-tools__label {
  margin-bottom: var(--space-1);
  margin-left: 19px;
}

.c-share-tools__group {
  display: flex;
  align-items: center;
}
</style>
