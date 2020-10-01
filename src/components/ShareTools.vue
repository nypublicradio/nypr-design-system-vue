<template>
  <div class="c-share-tools">
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

.c-share-tools__label {
  @include typeface(small, 4);
  margin-right: var(--space-2);
}

.c-share-tools__group {
  display: flex;
  align-items: center;
}

.c-share-tools--vertical .c-share-tools__group {
  flex-wrap: wrap;
}

.c-share-tools--vertical .c-share-tools__link {
  flex-basis: 100%;
  margin: 4px 0;
}

.c-share-tools--vertical .c-share-tools__link--print {
  @include media(">medium") {
    margin-bottom: 10px;
    background-image: linear-gradient(to right, transparent 50%, RGBA(var(--color-high-contrast), 0.358) 50%);
    background-position: center top;
    background-size: 16px 1px;
    background-repeat: repeat-x;
  }
}

.c-share-tools--vertical .c-share-tools__link--print svg {
  margin-top: 10px;
}
</style>
