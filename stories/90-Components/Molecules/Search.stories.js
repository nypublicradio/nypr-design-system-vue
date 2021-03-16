import VSearch from '../../../src/components/VSearch'

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

export const WithSearchIcon = () => ({
  components: {
    VSearch
  },
  template: `
    <v-search
      show-search-icon
      show-close-icon
      closed-on-load
      action="http://www.google.com"
      placeholder="A custom placeholder..."
    />
  `
})

export const WithSearchIconAndSlideLeftTransition = () => ({
  components: {
    VSearch
  },
  template: `
    <v-search
      show-search-icon
      show-close-icon
      closed-on-load
      action="http://www.google.com"
      placeholder="A custom placeholder..."
      transition="slide-left"
    />
  `
})

export const WithSearchIconAndDonateButton = () => ({
  components: {
    VSearch
  },
  template: `
    <v-search
      show-search-icon
      show-close-icon
      closed-on-load
      action="http://www.google.com"
      placeholder="A custom placeholder..."
      donateUrl="http://www.bing.com"
    />
  `
})
