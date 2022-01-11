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
        ref="content"
        class="accordion-content"
        role="region"
        :aria-labelledby="id"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap } from 'gsap'
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
      active: this.shouldOpenOnLoad
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
    } else if (this.shouldOpenOnLoad) {
      gsap.set(this.$refs.content, { height: 'auto' })
    }
  },
  updated () {
    // this.height = this.$refs.content.firstChild.nextElementSibling.offsetHeight
  },
  methods: {
    close () {
      this.active = false
      gsap.set(this.$refs.content, { height: 0 })
    },
    open () {
      this.active = !this.visible
      this.active ? gsap.to(this.$refs.content, { height: 'auto' }) : gsap.to(this.$refs.content, { height: 0 })
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

.accordion .accordion-content {
  position: relative;
  height: 0;
  overflow: hidden;
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
