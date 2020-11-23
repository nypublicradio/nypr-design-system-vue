<template>
  <div class="responsive-embed">
    <iframe
      width="1240"
      height="700"
      :src="url"
      allowfullscreen
      :aria-label="label"
    />
  </div>
</template>

<script>
export default {
  name: 'MediaBlock',
  props: {
    label: {
      type: String,
      default: 'embedded video'
    },
    url: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.responsive-embed {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.responsive-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
