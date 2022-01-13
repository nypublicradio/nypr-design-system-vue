import VSearch from '../../../src/components/VSearch'

export default {
  title: 'Components/Molecules/Search'
}

export const Default = () => ({
  components: {
    VSearch
  },
  template: `
    <v-search  closed-on-load
      show-close-icon action="http://www.google.com" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
      closed-on-load
      show-close-icon
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
      closed-on-load
      show-close-icon
      action="http://www.google.com"
      placeholder="A custom placeholder..."
      transition="slide-left"
    />
  `
})
