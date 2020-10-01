import WhitelabelColors from '../src/components/storybook/WhitelabelColors'

export default {
  title: 'Foundations/Colors'
}

export const Whitelabel = () => ({
  components: { WhitelabelColors },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <whitelabel-colors />
    </div>
    `
})
