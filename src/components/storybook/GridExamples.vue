<template>
  <div class="grid">
    <div class="l-grid l-grid--2up u-space--bottom">
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Two Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Two Column
      </div>
    </div>
    <div class="l-grid l-grid--3up u-space--bottom">
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Three Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Three Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Three Column
      </div>
    </div>
    <div class="l-grid l-grid--4up u-space--bottom">
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Four Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Four Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Four Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Four Column
      </div>
    </div>
    <div class="l-grid l-grid--5up u-space--bottom">
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Five Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Five Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Five Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Five Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Five Column
      </div>
    </div>
    <div class="l-grid l-grid--2x3 u-space--bottom">
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        1/3 Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        2/3 Column
      </div>
    </div>
    <div class="l-grid l-grid--3x2 u-space--bottom">
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        2/3 Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        1/3 Column
      </div>
    </div>
    <div class="l-grid l-grid--1x4 u-space--bottom">
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        1/4 Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        3/4 Column
      </div>
    </div>
    <div class="l-grid l-grid--4x1 l-grid--full-width-small u-space--double--bottom">
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        3/4 Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        1/4 Column
      </div>
    </div>
    <h3 class="u-space--bottom">
      With large gutters:
    </h3>
    <div class="l-grid l-grid--2up l-grid--large-gutters u-space--double--bottom">
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Two Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Two Column
      </div>
    </div>
    <h3 class="u-space--bottom">
      With no gutters:
    </h3>
    <div class="l-grid l-grid--no-gutters l-grid--2up u-space--double--bottom">
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Two Column
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        Two Column
      </div>
    </div>
    <h3 class="u-space--bottom">
      Reordering:
    </h3>
    <div class="l-grid l-grid--2up u-space--double--bottom">
      <div class="u-background-color--light-gray u-padding--half u-align--center l-grid--order-1-large">
        Second on
        small breakpoint, first elsewhere
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center l-grid--order-2-large">
        First on
        small breakpoint, second elsewhere
      </div>
    </div>
    <h3 class="u-space--bottom">
      Vertical Alignment:
    </h3>
    <div class="l-grid l-grid--1x4 l-grid--top u-space--bottom">
      <div>
        <img
          :src="placeholder"
          alt="placeholder image"
        >
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        top
      </div>
    </div>
    <div class="l-grid l-grid--1x4 l-grid--middle u-space--bottom">
      <div>
        <img
          :src="placeholder"
          alt="placeholder image"
        >
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        middle
      </div>
    </div>
    <div class="l-grid l-grid--1x4 l-grid--bottom u-space--bottom">
      <div>
        <img
          :src="placeholder"
          alt="placeholder image"
        >
      </div>
      <div class="u-background-color--light-gray u-padding--half u-align--center">
        bottom
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridExamples',
  props: {
    placeholder: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.u-background-color--light-gray {
  background: RGB(var(--color-light-gray));
}
</style>
