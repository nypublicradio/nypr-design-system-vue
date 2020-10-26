import SecondaryNavigation from '../src/components/SecondaryNavigation'
import TheHeader from '../src/components/TheHeader'
import WnycLogo from '../src/components/icons/wnyc/WnycLogo'
import ShareTools from '../src/components/ShareTools'
import ShareToolsItem from '../src/components/ShareToolsItem'
import SearchIcon from '../src/components/icons/SearchIcon'

export default {
  title: 'Components/Organisms/The Header'
}

export const Default = () => ({
  components: {
    SecondaryNavigation,
    TheHeader,
    WnycLogo,
    ShareTools,
    ShareToolsItem,
    SearchIcon
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <the-header donate-url="http://www.google.com">
      <template v-slot:logo>
        <wnyc-logo />
      </template>
      <template v-slot:navigation>
        <secondary-navigation
          orientation="horizontal"
          :nav-items="[
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3',
        }
      ]"
        />
      </template>
      <template v-slot:social>
      <share-tools>
        <share-tools-item service="facebook" username="WNYC" />
        <share-tools-item service="twitter" username="WNYC" />
        <share-tools-item service="instagram" username="WNYC" />
        <share-tools-item service="youtube" username="UCbysmY4hyViQAAYEzOR-uCQ" />
      </share-tools>
      </template>
      <template v-slot:search>
        <search-icon />
      </template>
    </the-header>
    </div>
  `
})

export const HeaderConfig1 = () => ({
  components: {
    SecondaryNavigation,
    TheHeader,
    WnycLogo,
    ShareTools,
    ShareToolsItem,
    SearchIcon
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <the-header  title="Headline With Lots of Text Can Sit Here" donate-url="http://www.google.com">
      <template v-slot:logo>
        <wnyc-logo />
      </template>
      <template v-slot:navigation>
    </template>
    <template v-slot:social>
      <share-tools>
        <share-tools-item service="facebook" username="WNYC" />
        <share-tools-item service="twitter" username="WNYC" />
        <share-tools-item service="instagram" username="WNYC" />
        <share-tools-item service="youtube" username="UCbysmY4hyViQAAYEzOR-uCQ" />
      </share-tools>
      </template>
      <template v-slot:search>
      <search-icon />
    </template>
    </the-header>
    </div>
  `
})

export const HeaderConfig2 = () => ({
  components: {
    SecondaryNavigation,
    TheHeader,
    WnycLogo,
    SearchIcon
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <the-header donate-url="http://www.google.com">
      <template v-slot:logo>
        <wnyc-logo />
      </template>
      <template v-slot:search>
      <search-icon />
    </template>
    </the-header>
    </div>
  `
})

export const HeaderConfig3 = () => ({
  components: {
    SecondaryNavigation,
    TheHeader,
    WnycLogo,
    SearchIcon
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <the-header donate-url="http://www.google.com">
      <template v-slot:logo>
        <wnyc-logo />
      </template>
      <template v-slot:navigation>
        <secondary-navigation
          orientation="horizontal"
          :nav-items="[
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3',
        }
      ]"
        />
      </template>
      <template v-slot:search>
      <search-icon />
    </template>
    </the-header>
    </div>
  `
})

export const HeaderConfig4 = () => ({
  components: {
    SecondaryNavigation,
    TheHeader,
    WnycLogo,
    SearchIcon
  },
  template: `
    <div class="sbdocs-xsmall-container sbdocs-container-margin">
    <the-header donate-url="http://www.google.com">
      <template v-slot:logo>
        <wnyc-logo />
      </template>
      <template v-slot:search>
      <search-icon />
    </template>
    </the-header>
    </div>
  `
})
