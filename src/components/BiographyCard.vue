<template>
  <div
    class="biography-card"
    :class="layout"
  >
    <div
      class="l-grid"
      :class="{'l-grid--1x4 l-grid--1up--small': isHorizontal}"
    >
      <a
        v-if="hasLink && hasImage"
        :href="link"
      >
        <img
          :src="image"
          :alt="altText"
        >
      </a>
      <div
        v-if="!hasLink && hasImage"
        class="name"
      >
        <img
          :src="image"
          :alt="altText"
        >
      </div>
    </div>
    <div>
      <div class="name">
        <a
          v-if="hasLink && hasName"
          :href="link"
          class="biography-card-name"
        >{{ name }}</a>
      </div>
      <div
        v-if="!hasLink && hasName"
        class="name"
      >
        {{ name }}
      </div>
      <div
        v-if="hasTitle"
        class="biography-card-title u-space--bottom"
      >
        {{ title }}
      </div>
      <div
        v-if="hasSlot"
      />
      <slot />
      <div
        v-if="hasSlot"
        class="biography-card-description u-space--top"
      />
      <div
        v-if="hasCta && hasLink"
        class="biography-card-cta u-space--top"
      >
        <a :href="link">{{ cta }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TeamMemberCard',
    props: {
      name: {
        type: String,
        default: null
      },
      image: {
        type: String,
        default: null
      },
      altText: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      cta: {
        type: String,
        default: 'Read More'
      },
      link: {
        type: String,
        default: null
      },
      layout: {
        type: String,
        default: 'vertical'
      }
    },
    computed: {
      hasSlot () {
        return !!this.$slots
      },
      hasImage () {
        return !!this.$props.image
      },
      hasLink () {
        return !!this.$props.link
      },
      hasCta () {
        return !!this.$props.cta
      },
      hasName () {
        return !!this.$props.name
      },
      hasTitle () {
        return !!this.$props.title
      },
      isHorizontal () {
        return this.$props.layout === 'horizontal'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .biography-card {
    font-size: var(--font-size-5);
    line-height: var(--line-height-5);
  }

  .biography-card .biography-card-name {
    font-weight: 500;
    color: var(--color-text);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .biography-card .biography-card-title {
    color: var(--color-text-muted);
  }
</style>
