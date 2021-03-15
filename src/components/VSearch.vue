<template>
  <div
    v-click-outside="close"
    class="search-bar"
  >
    <search-icon
      v-if="showSearchIcon"
      ref="searchButton"
      class="search-bar-search-icon u-icon--xs"
      @click.native="open"
    />
    <transition :name="transition">
      <div
        v-if="searchIsActive"
        class="search-bar-form-wrapper"
      >
        <form
          class="search-bar-form"
          aria-hidden="true"
          role="search"
          :action="action"
          method="get"
        >
          <label
            for="search"
            class="is-vishidden"
          >
            {{ placeholder }}
          </label>
          <v-button
            v-if="showCloseIcon"
            class="search-bar-close"
            tabindex="0"
            @click="close"
            @keypress.enter.space.prevent="close"
          >
            <close-icon />
          </v-button>
          <input
            id="search"
            name="q"
            :placeholder="placeholder"
            class="search-bar-input"
            type="search"
          >
          <v-button
            class="search-bar-submit"
            tabindex="0"
            @click="$emit('searchBarSubmit', $event);"
            @keypress.enter.space.prevent="$emit('searchBarSubmit', $event);"
          >
            <search-icon />
          </v-button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import CloseIcon from '../components/icons/CloseIcon'
import SearchIcon from '../components/icons/SearchIcon'
import VButton from '../components/VButton'

export default {
  name: 'VSearch',
  components: {
    CloseIcon,
    SearchIcon,
    VButton
  },
  directives: {
    'click-outside': {
      bind: function (el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) {
            warn += `Found in component '${compName}'`
          }

          console.warn(warn)
        }
        // console.log('clickedOnExcludedElement')
        // console.log(clickedOnExcludedElement)
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        // See if this excluded element
        // is the same element the user just clicked on
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
      },

      unbind: function (el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null
      }
    }
  },
  props: {
    action: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Search'
    },
    showCloseIcon: {
      type: Boolean,
      default: false
    },
    showSearchIcon: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'slide-right'
    }
  },
  data () {
    return {
      searchIsActive: true
    }
  },
  beforeMount () {
    if (this.showSearchIcon) {
      this.searchIsActive = false
    }
  },
  methods: {
    close () {
      if (this.showSearchIcon) {
        this.searchIsActive = false
      }
    },
    open () {
      this.searchIsActive = true
    }
  }
}
</script>

<style lang="scss">
.search-bar {
  --search-height: 48px;
  --search-width: 250px;
  position: relative;
  width: var(--search-width);
  height: var(--search-height);
}

.search-bar .search-bar-search-icon {
  position: absolute;
  top: 16px;
  z-index: 1;
}

.search-bar .search-bar-form-wrapper {
  position: absolute;
  z-index: 2;
}

.search-bar .search-bar-form {
  display: flex;
  width: var(--search-width);
}

.search-bar .search-bar-input {
  border: solid 1px RGB(var(--color-button));
  height: var(--search-height);
  line-height: var(--search-height);
  border-radius: 0 !important;

  &::placeholder {
    color: RGB(var(--color-gray));
  }
}

.search-bar .button {
  width: var(--search-height);
  height: var(--search-height);
}

.search-bar .search-bar-close {
  background: RGB(var(--color-background));
  border: solid 1px RGB(var(--color-button));
  border-right: none;
  padding: 18px 0 18px 8px;

  &:hover {
    opacity: 1;
  }
}

.search-bar .search-bar-close path {
  fill: RGB(var(--color-button));
}

.search-bar-close + .search-bar-input {
  border-left: none;
}
</style>
