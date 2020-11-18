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
