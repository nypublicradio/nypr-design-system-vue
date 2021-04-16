<template>
  <div
    class="search-bar"
  >
    <v-button
      v-if="closedOnLoad"
      ref="searchButton"
      tabindex="0"
      class="search-bar-search-icon u-icon--xs"
      @click.native="open"
      @keypress.enter.space.native.prevent="open"
    >
      <search-icon />
    </v-button>
    <transition :name="transition">
      <div
        v-if="searchIsOpen"
        class="search-bar-form-wrapper"
      >
        <form
          ref="searchForm"
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
            @keypress.native.enter.space.prevent="close"
          >
            <close-icon />
          </v-button>
          <input
            id="search"
            ref="searchInput"
            v-model="search"
            name="q"
            :placeholder="placeholder"
            class="search-bar-input"
            type="search"
            @keypress="listenToInput"
          >
          <v-button
            class="search-bar-submit"
            tabindex="0"
            @click="submit"
            @keypress.native.enter.space.prevent="submit"
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

let timeout

export default {
  name: 'VSearch',
  components: {
    CloseIcon,
    SearchIcon,
    VButton
  },
  props: {
    action: {
      type: String,
      default: null
    },
    closedOnLoad: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Search'
    },
    showCloseIcon: {
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
      searchIsOpen: true,
      search: ''
    }
  },
  beforeMount () {
    if (this.closedOnLoad) {
      this.close()
    }
  },
  methods: {
    close () {
      if (this.closedOnLoad) {
        this.searchIsOpen = false
      }
    },
    listenToInput () {
      // close the search bar if nothing is typed for 3 seconds
      clearTimeout(timeout)
      setTimeout(() => {
        this.close()
      }, 6000)
    },
    open (e) {
      this.$emit('searchBarOpen', e)
      this.searchIsOpen = true
      this.listenToInput()
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
      })
    },
    submit (e) {
      this.$emit('searchBarSubmit', e)
      this.$refs.searchForm.submit()
    }
  }
}
</script>

<style lang="scss">
.search-bar {
  --search-height: 48px;
  --search-width: 300px;
  position: relative;
  height: var(--search-height);
  min-width: var(--search-height);
  justify-content: center;
  display: flex;
}

.search-bar .search-bar-search-icon {
  position: absolute;
  cursor: pointer;
  z-index: 1;
  padding: 14px;
  width: var(--search-height);
  height: var(--search-height);
  background: none;

  svg path {
    fill: RGB(var(--color-text));
  }
}

.search-bar .search-bar-form-wrapper {
  position: absolute;
  z-index: 2;
  display: flex;
}

.search-bar .search-bar-form-wrapper .search-bar-donate {
  margin-right: var(--space-3);
  height: var(--search-height);
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

.search-bar .search-bar-close,
.search-bar .search-bar-submit {
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

.search-bar .search-bar-submit {
  min-width: var(--search-height);
}
</style>
