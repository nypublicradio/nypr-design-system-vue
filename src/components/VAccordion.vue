<template>
  <div
    class="accordion"
    :aria-expanded="active"
  >
    <div
      :id="id"
      class="accordion-header"
      :class="{'accordion-header-active': visible}"
      role="button"
      tabindex="0"
      @click="open"
      @keypress.enter.space="open"
    >
      <div class="accordion-header-wrapper">
        <slot name="header" />
      </div>
      <div class="accordion-icon">
        <simple-arrow-down />
      </div>
    </div>
    <transition name="accordion">
      <div
        v-show="visible"
        class="accordion-content"
        role="region"
        :aria-labelledby="id"
        :style="'max-height: '+height+'px'"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script>
import SimpleArrowDown from '../components/icons/SimpleArrowDown'

export default {
  components: {
    SimpleArrowDown
  },
  props: {
    shouldOpenOnLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: this.shouldOpenOnLoad,
      height: '500px'
    }
  },
  computed: {
    id () {
      return Math.floor(Math.random() * Math.floor(1000))
    },
    visible () {
      return this.active
    }
  },
  updated () {
    this.height = this.$slots.content[0].context.$el.clientHeight
  },
  methods: {
    open () {
      this.active = !this.visible
    }
  }
}
</script>

<style lang="scss">
.accordion .accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.accordion .accordion-header-wrapper {
  width: 100%;
  padding-right: var(--space-2);
}

.accordion .accordion-icon {
  height: 20px;
  transition: var(--animation-duration-slow);
}

.accordion .accordion-header-active .accordion-icon {
  transform: rotate(180deg);
}

.accordion-enter-active {
  transition: max-height var(--animation-duration-slow);
}

.accordion-leave-active {
  transition: max-height var(--animation-duration-slow) var(--animation-easing-outgoing);
}

.accordion-enter-to, .accordion-leave {
  overflow: hidden;
}

.accordion-enter, .accordion-leave-to {
  overflow: hidden;
  max-height: 0 !important; // need important to override inline style
}
</style>
