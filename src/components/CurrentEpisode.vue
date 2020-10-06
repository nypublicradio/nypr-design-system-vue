<template>
  <div
    class="current-episode"
    :class="{'is-active':active}"
  >
    <span class="current-episode-intro">{{ intro }}</span>
    <span class="current-episode-tease">{{ tease }}</span>
    <img
      class="current-episode-image"
      :src="image"
    />
    <span class="current-episode-image-desc">{{ imageDescription }}</span>
  </div>
</template>

<script>
export default {
  name: 'CurrentEpisode',
  props: {
    intro: {
      type: String,
      default: null
    },
    tease: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    imageDescription: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.current-episode {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 550px;
  min-width: 550px;
  background: gainsboro;
  @include typeface(body, 4);
  color: RGB(var(--color-text));
  cursor: pointer;
  padding-bottom: var(--space-3);

  &.is-active {
    .current-episode-image-desc {
      background:RGB(var(--color-dark-gray));
      color: white;
      width: 250px;
      margin: 0px var(--space-3) 0px var(--space-3);
      padding: var(--space-3);
      }
    }
}

.current-episode-intro {
  font-family: var(--font-family-body);
  text-transform: uppercase;
}

.current-episode-tease {
  font-weight: bold;

}
.current-episode-image {
  width: 250px;
  min-width: 250px;
}

.current-episode-intro, .current-episode-tease, .current-episode-image {
  margin: var(--space-3) var(--space-3) 0px var(--space-3);
}

</style>
