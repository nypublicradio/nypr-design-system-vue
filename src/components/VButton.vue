<template>
  <a
    class="button"
    role="button"
    tabindex="0"
    :class="{'disabled': disabled, 'is-icon-only': !label && this.$slots.default}"
    @click="$emit('click', $event);"
  >
    <slot />
    <span
      v-if="label"
      class="button-label"
    >
      {{ label }}
    </span>
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
    label: {
      type: String,
      default: 'click here'
    }
  }
}
</script>

<style lang="scss">
.button {
  /* normalize .button styles  */
  font: inherit;
  margin: 0;
  padding: 0;
  line-height: 1.15;
  overflow: visible;
  white-space: nowrap;
  text-decoration: none;
  text-transform: none;
  border: none;
  appearance: none;
}

// hide focus style from pointer interactions,
// but leave it for keyboard-like interactions where it is necessary
// https://github.com/WICG/focus-visible/blob/master/explainer.md#rationale
[data-js-focus-visible] .button:focus:not([data-focus-visible-added]) {
  outline: none;
}

.button:focus:not(:focus-visible) {
  outline: none;
}

.button:hover {
  text-decoration: none;
}

.button {
  padding: var(--space-1) var(--space-3);
  border-width: 0px;
  display: inline-flex;
  position: relative;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  border-color: RGB(var(--color-button));
  background-color: RGB(var(--color-button));
}

a.button {
  text-decoration: none;
}

.button:hover {
  color: RGB(var(--color-button-text-hover));
  background-color: RGBA(var(--color-button-hover), var(--opacity-button-hover));
  transform: var(--transform-button-hover);
}

.button:active {
  color: RGB(var(--color-button-text-pressed));
  background-color: RGBA(var(--color-button-pressed));
  transform: var(--transform-button-pressed);
}

.button.disabled {
  opacity: 50%;
  pointer-events: none;
}

.button-label {
  @include typeface(body, 7);
  color: RGB(var(--color-button-text));
  line-height: 32px;
}

.button-icon {
  margin: 0 var(--space-2);
}

.button-icon * {
  fill: RGB(var(--color-button-text));
}

/* Button sizes */

.button.mod-small {
  padding: calc(var(--space-1) / 2) var(--space-2);
}

.button.mod-large {
  padding: var(--space-2) var(--space-4);
}

/* Secondary buttons */

.button.mod-secondary {
  color: RGB(var(--color-button));
  border: 1px solid RGB(var(--color-button));
  background-color: transparent;
}

.button.mod-secondary .button-label {
  color: RGB(var(--color-button));
}

.button.mod-secondary:hover {
  color: RGBA(var(--color-button-hover), var(--opacity-button-hover));
  border: 1px solid RGBA(var(--color-button-hover), var(--opacity-button-hover));
}

/* Icon buttons */

.button.is-icon-only {
  padding: var(--space-2);
}

.button.is-icon-only .button-icon {
  margin: 0;
  padding: 0 4px;
  width: 24px;
  height: 24px;
}

.button.is-icon-only.mod-small {
  padding: var(--space-1);
}

.button.is-icon-only.mod-large {
  padding: var(--space-3);
}

/* Flat buttons */
// these should match the default link styles

.button.mod-flat {
  display: inline;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  color: RGB(var(--color-link));
  text-decoration: var(--text-decoration-link);
  transform: none;
}

.button.mod-flat .button-label {
  color: RGB(var(--color-button));
  text-decoration: var(--text-decoration-link);
}

.button.mod-flat:hover {
  color: RGBA(var(--color-link-hover), var(--opacity-link-hover));
  text-decoration: var(--text-decoration-link-hover);
  transform: none;
}

.button svg {
  width: 16px;
  height: 16px;
}

.button:not(.is-icon-only) svg {
  margin-right: var(--space-2);
}

.button svg,
.button svg path {
  fill: RGB(var(--color-button-text));
}
</style>
