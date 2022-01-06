<template>
  <div class="collection">
    <div class="collection-title" v-html="title" />
    <div class="collection-items l-grid l-grid--2up">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCollection',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.collection {
  position: relative;
  padding: var(--space-2) var(--space-3) var(--space-3);
  background-color: RGB(var(--color-background-highlight));
}
.collection .collection-title {
  font-weight: bold;
  margin-bottom: var(--space-2);
}
</style>
