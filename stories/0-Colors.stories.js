import WhitelabelColors from '../src/components/storybook/WhitelabelColors'
import WnycColors from '../src/components/storybook/WnycColors'
import WqxrColors from '../src/components/storybook/WqxrColors'
import GothamistColors from '../src/components/storybook/GothamistColors'

export default {
  title: 'Foundations/Colors'
}

export const Whitelabel = () => ({
  components: { WhitelabelColors },
  template: `
    <whitelabel-colors />
    `
})

export const Gothamist = () => ({
  components: { GothamistColors },
  template: `
    <gothamist-colors />
    `
})

export const Wnyc = () => ({
  components: { WnycColors },
  template: `
    <wnyc-colors />
    `
})

export const Wqxr = () => ({
  components: { WqxrColors },
  template: `
    <wqxr-colors />
    `
})
