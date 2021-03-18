<template>
  <div class="pull-quote">
    <p class="pull-quote-quote">
      <span class="o-bg-text-accent">
        {{ quote }}
      </span>
    </p>
    <span class="pull-quote-author">{{ author }}</span>
  </div>
</template>

<script>
export default {
  name: 'PullQuote',
  props: {
    quote: {
      type: String,
      default: null
    },
    author: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
/**
 * Pullquote (beefed up blockquote)
 */
.pull-quote {
  margin: auto var(--space-3);
  text-align: center;
  background: none;
  border: none;

  @include media('>medium') {
    margin: auto calc(var(--grid-col-width) + var(--grid-gutter)) var(--space-7);
  }
}

.pull-quote p {
  font-weight: bold;
  font-size: var(--font-size-11);
  line-height: 1.05;
  background: none;
  margin: var(--space-3) 0 0;
  display: inline-block;

  @include media('>medium') {
    font-size: var(--font-size-14);
  }
}

.pull-quote p span {
  quotes: "\201C""\201D""\2018""\2019";
  background-position: bottom;
}

.pull-quote p span:before,
.pull-quote p span:after {
  @include typeface(header, 11);
}

.pull-quote p span:before {
  content: open-quote;
}

.pull-quote p span:after {
  content: close-quote;
}

.o-pullquote-author {
  color: RGB(var(--color-text-muted));
  @include typeface(small, 1);
  @include media(">=medium") {
    @include typeface(small, 3);
  }
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
