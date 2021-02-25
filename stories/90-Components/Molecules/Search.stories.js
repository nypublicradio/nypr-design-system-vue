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
