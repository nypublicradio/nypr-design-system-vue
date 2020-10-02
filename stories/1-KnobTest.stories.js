import { withKnobs, select } from '@storybook/addon-knobs'
import VButton from '../src/components/VButton'

const label = 'Themes'
const options = {
  Whitelabel: 'whitelabel',
  Gothamist: 'gothamist',
  Wnyc: 'wnyc',
  Wqxr: 'wqxr'
}
const defaultValue = 'whitelabel'

export default {
  title: 'Knob Test',
  decorators: [withKnobs]
}

export const Buttons = () => ({
  components: {
    VButton
  },
  props: {
    theme: {
      type: String,
      default: select(label, options, defaultValue)
    }
  },
  template: `
    <div :class="theme">
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
    </div>`
})
