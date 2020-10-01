<template>
  <gothamist-theme-wrapper>
    <div class="colors">
      <div class="u-background-color--brick-red">
        <span>brick-red</span>
      </div>
      <div class="u-background-color---reddish-orange">
        <span>reddish-orange</span>
      </div>
      <div class="u-background-color--banana-yellow">
        <span>banana-yellow</span>
      </div>
      <div class="u-background-color--taxicab-yellow">
        <span>taxicab-yellow</span>
      </div>
      <div class="u-background-color--dusk-blue">
        <span>dusk-blue</span>
      </div>
      <div class="u-background-color--brown-grey">
        <span>brown-grey</span>
      </div>
      <div class="u-background-color--dirty-salmon">
        <span>dirty-salmon</span>
      </div>
      <div class="u-background-color--purple">
        <span>purple</span>
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
  </gothamist-theme-wrapper>
</template>

<script>
import GothamistThemeWrapper from '../storybook/GothamistThemeWrapper'

export default {
  name: 'GothamistColors',
  components: { GothamistThemeWrapper }
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

.u-background-color--brick-red {
  background: RGB(var(--color-brick-red));
}

.u-background-color---reddish-orange {
  background: RGB(var(--color-reddish-orange));
}

.u-background-color--banana-yellow {
  background: RGB(var(--color-banana-yellow));
}

.u-background-color--taxicab-yellow {
  background: RGB(var(--color-taxicab-yellow));
}

.u-background-color--dusk-blue {
  background: RGB(var(--color-dusk-blue));
}

.u-background-color--brown-grey {
  background: RGB(var(--color-brown-grey));
}

.u-background-color--dirty-salmon {
  background: RGB(var(--color-dirty-salmon));
}

.u-background-color--purple {
  background: RGB(var(--color-purple));
}

.u-background-color--light-gray {
  background: RGB(var(--color-light-gray));
}

.u-background-color--gray {
  background: RGB(var(--color-gray));
}

.u-background-color--dark-gray {
  background: RGB(var(--color-dark-gray));
}
</style>
