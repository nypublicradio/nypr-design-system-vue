<template>
  <li class="accordion-item">
    <div
      @click="open"
      @keypress.enter.space="open"
      class="accordion-header"
      :class="{'accordion-header-active': visible, 'mobile-only': isMobileOnly}"
      tabindex="0"
    >
      <slot name="header"></slot>
      <div class="accordion-icon"></div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >

      <div
        class="accordion-content"
        v-show="visible"
      >
        <ul>
          <slot name="content"></slot>
        </ul>
      </div>

    </transition>

  </li>
</template>

<script>
export default {
  props: {
    openOnLoad: {
      Boolean: false
    }
  },
  inject: ['Accordion'],
  data () {
    return {
      active: false,
      window: {
        width: 0
      }
    }
  },
  computed: {
    visible () {
      return this.active
    },
    isMobileOnly () {
      return this.mobileOnly
    }
  },
  methods: {
    open () {
      // check if multiple accordions are allowed to be open at once
      if (this.Accordion.allowMultiple) {
        this.active = !this.visible
      } else {
        if (this.visible) {
          this.active = false
        } else {
          this.closeAll()
          this.active = true
        }
      }
    },
    openAll () {
      for (let i = 0; i < this.$parent.$children.length; i++) {
        this.$parent.$children[i].$data.active = true
      }
    },
    closeAll () {
      for (let i = 0; i < this.$parent.$children.length; i++) {
        this.$parent.$children[i].$data.active = false
      }
    },
    openFirst () {
      this.closeAll()
      this.$parent.$children[0].$data.active = true
    },
    start (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end (el) {
      el.style.height = ''
    },
    handleResize () {
      this.window.width = window.innerWidth
      if (this.window.width < 1240) {
        if (this.Accordion.mobileOnly) {
          this.openFirst()
        }
      } else {
        if (this.Accordion.mobileOnly) {
          this.openAll()
        }
      }
    }
  },
  created () {
    this.mobileOnly = false
    // open the first item in each accordion
    this.openFirst()
    // open all accordions on desktop
    // open only the first accordion on mobile
    if (this.Accordion.mobileOnly) {
      this.active = true
      this.mobileOnly = true
      if (this.window.width < 1240) {
        this.closeAll()
        this.openFirst()
      } else {
        this.openAll()
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    // close all accordions if closeAll prop is true
    if (this.Accordion.closeAll) {
      this.closeAll()
    }
    // check openOnLoad prop on accordion items and open any set to true
    if (this.openOnLoad) {
      this.open()
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style
  lang="scss"
  scoped
>
// for the mobileOnly option - set this breakpoint that transforms content into accordions on mobile only
$breakpoint-mobile: 1240px;
.accordion-item {
  position: relative;

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .accordion-icon {
      position: relative;

      &:after {
        position: absolute;
        right: 0;
        top: -.5rem;
        content: "\002B";
        font-size: 2rem;
      }
    }

    &.mobile-only {
      pointer-events: none;
      cursor: default;
      @media all and (max-width: $breakpoint-mobile) {
        pointer-events: auto;
        cursor: pointer;
      }

      .accordion-icon {
        display: none;
        @media all and (max-width: $breakpoint-mobile) {
          display: block;
        }
      }
    }
  }

  .accordion-header-active {
    .accordion-icon {
      &:after {
        content: "\2212";
      }
    }
  }

  .accordion-enter-active,
  .accordion-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
  }

  .accordion-enter,
  .accordion-leave-to {
    height: 0 !important;
    opacity: 0;
  }
}
</style>
