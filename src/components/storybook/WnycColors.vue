<template>
  <wnyc-theme-wrapper>
    <div class="colors">
      <div class="u-background-color--cool-white">
        <span>cool-white</span>
      </div>
      <div class="u-background-color---blue">
        <span>ceramic-blue</span>
      </div>
      <div class="u-background-color--concrete">
        <span>concrete</span>
      </div>
      <div class="u-background-color--red">
        <span>red</span>
      </div>
      <div class="u-background-color--dark-red">
        <span>dark-red</span>
      </div>
      <div class="u-background-color--reddish-orange">
        <span>reddish-orange</span>
      </div>
      <div class="u-background-color--light-gray">
        <span>light gray</span>
      </div>
      <div class="u-background-color--gray">
        <span>gray</span>
      </div>
      <div class="u-background-color--dark-gray">
        <span>dark gray</span>
      </div>
    </div>
  </wnyc-theme-wrapper>
</template>

<script>
import WnycThemeWrapper from '../storybook/WnycThemeWrapper'

export default {
  name: 'WnycColors',
  components: { WnycThemeWrapper }
}
</script>

<style
  lang="scss"
  scoped
>
.colors div {
  width: 200px;
  height: 100px;
  display: inline-block;
  margin: 1rem;

  span {
    background: white;
    padding: .5rem;
  }
}

.u-background-color--cool-white {
  background: RGB(var(--color-cool-white));
}

.u-background-color---blue {
  background: RGB(var(--color-blue));
}

.u-background-color--concrete {
  background: RGB(var(--color-concrete));
}

.u-background-color--red {
  background: RGB(var(--color-red));
}

.u-background-color--dark-red {
  background: RGB(var(--color-dark-red));
}

.u-background-color--reddish-orange {
  background: RGB(var(--color-reddish-orange));
}

.u-background-color--gray {
  background: RGB(var(--color-gray));
}

.u-background-color--light-gray {
  background: RGB(var(--color-light-gray));
}

.u-background-color--dark-gray {
  background: RGB(var(--color-dark-gray));
}
</style>
