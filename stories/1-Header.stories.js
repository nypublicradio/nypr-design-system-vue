import TheHeader from '../src/components/TheHeader'
import WnycLogo from '../src/components/icons/wnyc/WnycLogo'

export default {
  title: 'Components/Organisms/The Header'
}

export const Example = () => ({
  components: {
    TheHeader,
    WnycLogo
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <the-header>
        <wnyc-logo />
      </the-header>
    </div>
  `
})
