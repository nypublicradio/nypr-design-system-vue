<template>
  <div class="gallery-preview">
    <div
      v-for="(photo, index) in photos"
      :key="index"
      class="gallery-preview-image"
    >
      <img
        :src="photo.url"
        :alt="photo.alt"
      >
    </div>
    <div class="gallery-preview-view-all">
      <span>View All</span>
      <span>{{ count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryPreview',
  props: {
    count: {
      type: Number,
      default: null
    },
    photos: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss">
.gallery-preview {
  display: flex;
  width: 100%;
  justify-content: space-between;
  justify-content: center;
}
.gallery-preview-view-all {
  width: 150px;
  height: 150px;
}
</style>
