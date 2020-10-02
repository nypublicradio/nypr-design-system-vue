<template>
  <div class="colors">
    <div class="u-background-color--water-blue">
      <span>water-blue</span>
    </div>
    <div class="u-background-color---denim-blue">
      <span>denim-blue</span>
    </div>
    <div class="u-background-color--dark-denim-blue">
      <span>dark-denim-blue</span>
    </div>
    <div class="u-background-color--light-gray">
      <span>light gray</span>
    </div>
    <div class="u-background-color--dark-gray">
      <span>dark gray</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WnycColors'
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

.u-background-color--water-blue {
  background: RGB(var(--color-water-blue));
}

.u-background-color---denim-blue {
  background: RGB(var(--color-denim-blue));
}

.u-background-color--dark-denim-blue {
  background: RGB(var(--color-dark-denim-blue));
}

.u-background-color--light-gray {
  background: RGB(var(--color-light-gray));
}

.u-background-color--dark-gray {
  background: RGB(var(--color-dark-gray));
}
</style>
