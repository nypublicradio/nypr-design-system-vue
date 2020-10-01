<template>
  <div class="colors">
    <div class="u-background-color--cool-white"><span>cool-white</span></div>
    <div class="u-background-color--ceramic-blue"><span>ceramic-blue</span></div>
    <div class="u-background-color--concrete"><span>concrete</span></div>
    <div class="u-background-color--ember-red"><span>ember-red</span></div>
    <div class="u-background-color--cool-blue"><span>cool-blue</span></div>
    <div class="u-background-color--sky-blue"><span>sky-blue</span></div>
    <div class="u-background-color--sea-green"><span>sea-green</span></div>
    <div class="u-background-color--bright-purple"><span>bright-purple</span></div>
    <div class="u-background-color--light-gray"><span>light gray</span></div>
    <div class="u-background-color--gray"><span>gray</span></div>
    <div class="u-background-color--dark-gray"><span>dark gray</span></div>
  </div>
</template>

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

.u-background-color--ceramic-blue {
  background: RGB(var(--color-ceramic-blue));
}

.u-background-color--concrete {
  background: RGB(var(--color-concrete));
}

.u-background-color--ember-red {
  background: RGB(var(--color-ember-red));
}

.u-background-color--cool-blue {
  background: RGB(var(--color-cool-blue));
}

.u-background-color--sky-blue {
  background: RGB(var(--color-sky-blue));
}

.u-background-color--sea-green {
  background: RGB(var(--color-sea-green));
}

.u-background-color--bright-purple {
  background: RGB(var(--color-bright-purple));
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
