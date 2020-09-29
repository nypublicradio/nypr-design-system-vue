import TheHeader from '../src/components/TheHeader'
import WnycLogo from '../src/components/icons/wnyc/WnycLogo'

export default {
  title: 'Components/Organisms/The Header'
}

export const MinimalistHeader = () => ({
  components: {
    TheHeader,
    WnycLogo
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <the-header donate-url="http://www.google.com">
        <wnyc-logo />
      </the-header>
    </div>
  `
})
