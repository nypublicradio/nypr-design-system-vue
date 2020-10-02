import { withKnobs, select } from '@storybook/addon-knobs'
import VButton from '../src/components/VButton'
import ThemeSwitcher from '../src/components/storybook/ThemeSwitcher'

const label = 'Themes'
const options = {
  Whitelabel: 'WhitelabelThemeWrapper',
  Gothamist: 'GothamistThemeWrapper',
  Wnyc: 'WnycThemeWrapper',
  Wqxr: 'WqxrThemeWrapper'
}
const defaultValue = 'WhitelabelThemeWrapper'

export default {
  title: 'Knob Test',
  decorators: [withKnobs]
}

export const Buttons = () => ({
  components: {
    VButton,
    ThemeSwitcher
  },
  props: {
    theme: {
      type: String,
      default: select(label, options, defaultValue)
    }
  },
  template: `
    <theme-switcher :theme="theme">
      <div class="l-grid l-grid--4up">
        <div>
          <v-button
            href="http://www.google.com"
            class="mod-small"
            label="Small Button"
          />
        </div>
        <div>
          <v-button
            href="http://www.google.com"
            label="Regular Button"
          />
        </div>
        <div>
          <v-button
            href="http://www.google.com"
            class="mod-large"
            label="Large Button"
          />
        </div>
        <div>
          <v-button
            href="http://www.google.com"
            class="mod-large"
            label="Disabled Button"
            disabled
          />
        </div>
      </div>
    </theme-switcher>`
})
