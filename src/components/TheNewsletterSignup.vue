<template>
  <section class="newsletter-signup l-container">
    <h3 class="u-space--bottom">
      Hand-picked music in your inbox.
    </h3>
    <p class="u-space--bottom">
      Fall in love with new music. Get our weekly e-newsletter to keep your ears open and curiosity piqued.
    </p>
    <div class="input-group u-space--bottom">
      <label
        for="inline-input"
        class="hide-ally-element"
      >
        subscribe to our newsletter
      </label>
      <input
        id="inline-input"
        class="input-group-field"
        type="email"
        placeholder="Enter your email to subscribe"
      >
      <v-button
        type="submit"
        class="inline-button"
        tabindex="0"
        :disabled="!!disabled"
      >
        Subscribe&nbsp;Now
      </v-button>
    </div>

    <fieldset class="newsletter-signup-terms">
      <legend class="hide-ally-element">
        Terms Of Use
      </legend>
      <input
        id="checkbox1"
        v-model="newsletterTerms"
        type="checkbox"
      >
      <label for="checkbox1">
        By submitting your information, you're agreeing to receive communications from New York Public Radio in
        accordance with our <a
          href="https://www.wnyc.org/terms/"
          class="newsletter-signup-terms-link"
          target="_blank"
          rel="noopener"
        >
          Terms of Use
        </a>.
      </label>
    </fieldset>
  </section>
</template>

<script>
  import VButton from './VButton'

  export default {
    name: 'NewsletterSignup',
    components: { VButton },
    data () {
      return {
        newsletterTerms: true
      }
    },
    computed: {
      disabled () {
        return !this.newsletterTerms
      }
    }
  }
</script>

<style lang="scss">
  .newsletter-signup .input-group-field {
    max-width: 600px;
  }

  .newsletter-signup [type=checkbox] + label {
    vertical-align: top;
  }

  .newsletter-signup .newsletter-signup-terms {
    font-size: var(--font-size-3);
    color: var(--color-light-gray);
  }

  .newsletter-signup .newsletter-signup-terms-link {
    color: var(--color-light-gray);
    text-decoration: none;
    border-bottom: solid 1px var(--color-light-gray);

    &:hover {
      text-decoration: none;
    }
  }
</style>
