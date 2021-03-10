import VSearch from '../../../src/components/VSearch'
import SearchIcon from '../../../src/components/icons/SearchIcon'

export default {
  title: 'Components/Molecules/Search'
}

export const Default = () => ({
  components: {
    VSearch
  },
  template: `
    <v-search action="http://www.google.com" />
  `
})

export const CustomPlaceholder = () => ({
  components: {
    VSearch
  },
  template: `
    <v-search
      action="http://www.google.com"
      placeholder="A custom placeholder..."
    />
  `
})

export const WithCloseButton = () => ({
  components: {
    VSearch
  },
  template: `
    <v-search
      showCloseIcon
      action="http://www.google.com"
      placeholder="A custom placeholder..."
    />
  `
})

export const GothamistHeaderExample = () => ({
  components: {
    VSearch,
    SearchIcon
  },
  data () {
    return {
      searchIsActive: false
    }
  },
  template: `
    <div>
    <search-icon
      class="u-icon--xs"
      @click.native="searchIsActive = true"
    />
    <transition name="slide-right">
      <v-search
        v-if="searchIsActive"
        show-close-icon
        action="/search"
        @searchBarClose="searchIsActive = false"
      />
    </transition>
    </div>
  `
})
