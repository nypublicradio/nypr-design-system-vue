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
      @keypress.enter.space.prevent="open"
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
import 'focus-visible'

export default {
  components: {
    SimpleArrowDown
  },
  props: {
    shouldOpenOnLoad: {
      type: Boolean,
      default: false
    },
    closedOnMobile: {
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
  mounted () {
    if (this.closedOnMobile && window.innerWidth < 850) {
      this.close()
    }
  },
  updated () {
    this.height = this.$slots.content[0].context.$el.clientHeight
  },
  methods: {
    close () {
      this.active = false
    },
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
  transition: var(--animation-duration-standard);
}

.accordion .accordion-header-active .accordion-icon {
  transform: rotate(180deg);
}

.accordion-enter-active {
  transition: all var(--animation-duration-standard) var(--animation-easing-standard);
}

.accordion-leave-active {
  transition: all var(--animation-duration-standard) var(--animation-easing-outgoing);
}

.accordion-enter, .accordion-leave-to {
  max-height: 0 !important; // needs important to override inline style
  opacity: 0;
}
</style>
