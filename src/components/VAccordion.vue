<template>
  <div class="accordion">
    <div
      class="accordion-header"
      :class="{'accordion-header-active': visible}"
      tabindex="0"
      @click="open"
      @keypress.enter.space="open"
    >
      <slot name="header" />
      <div class="accordion-icon">
        <simple-arrow-down v-if="active" />
        <simple-arrow-up v-else />
      </div>
    </div>
    <transition name="accordion">
      <div
        v-show="visible"
        class="accordion-content"
        :style="'max-height: '+height+'px'"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script>
import SimpleArrowDown from '../components/icons/SimpleArrowDown'
import SimpleArrowUp from '../components/icons/SimpleArrowUp'

export default {
  components: {
    SimpleArrowDown,
    SimpleArrowUp
  },
  props: {
    openOnLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: this.openOnLoad,
      height: '500px'
    }
  },
  computed: {
    visible () {
      return this.active
    }
  },
  updated () {
    this.height = this.$slots.content[0].elm.clientHeight
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

.accordion .accordion-icon {
  height: 20px;
}

.accordion-enter-active {
  transition: max-height var(--animation-duration-standard);
}

.accordion-leave-active {
  transition: max-height var(--animation-duration-standard);
}

.accordion-enter-to, .accordion-leave {
  overflow: hidden;
}

.accordion-enter, .accordion-leave-to {
  overflow: hidden;
  max-height: 0 !important; // need important to override inline style
}
</style>
