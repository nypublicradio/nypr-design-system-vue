<template>
  <a
    class="button"
    :class="{'disabled': disabled}"
    :href="link"
  >
    <slot>click here</slot>
  </a>
</template>

<script>
  export default {
    name: 'VButton',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: null
      },
      link: {
        type: String,
        default: null
      }
    },
    computed: {
      hasIcon () {
        return !!this.$props.icon
      }
    }
  }
</script>

<style lang="scss">
  .button,
  .button:visited,
  .button:active {
    display: inline-block;
    background: var(--button-background);
    border: var(--button-border);
    color: var(--button-text);
    text-transform: var(--button-text-transform);
    font-weight: var(--button-font-weight);
    font-size: var(--button-font-size);
    padding: var(--button-padding);
    transition: var(--transition);
    border-radius: var(--button-border-radius);
    letter-spacing: .1rem;

    &:hover {
      background: var(--button-background-hover);
      border: var(--button-border-hover);
      color: var(--button-text-hover);
      text-decoration: none;
    }
  }

  .button.disabled {
    pointer-events: none;
    opacity: .25;
  }

  .inline-button {
    height: var(--forms-input-height);
    line-height: var(--forms-input-height);
    padding: var(--forms-inline-button-padding);
    margin-left: .5rem;
  }
</style>
