import VMenu from '../../../src/components/VMenu'
import WnycLogo from '../../../src/components/icons/wnyc/WnycLogo'

export default {
  title: 'Components/Organisms/Menu'
}

export const Default = () => ({
  components: {
    VMenu,
    WnycLogo
  },
  template: `
    <v-menu>
    <template v-slot:logo>
      <wnyc-logo />
    </template>
    </v-menu>
  `
})
