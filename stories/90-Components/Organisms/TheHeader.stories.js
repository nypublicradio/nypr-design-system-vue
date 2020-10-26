import SecondaryNavigation from '../../../src/components/SecondaryNavigation'
import TheHeader from '../../../src/components/TheHeader'
import WnycLogo from '../../../src/components/icons/wnyc/WnycLogo'

export default {
  title: 'Components/Organisms/The Header'
}

export const HeaderConfig1 = () => ({
  components: {
    SecondaryNavigation,
    TheHeader,
    WnycLogo
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
    </the-header>
    </div>
  `
})
