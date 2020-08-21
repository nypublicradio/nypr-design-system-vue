import TheHeader from '../src/components/TheHeader'

export default {
  title: 'The Header',
  component: TheHeader
}

export const Example = () => ({
  components: { TheHeader },
  template: `
    <div class="sbdocs-large-container">
    <the-header />
    </div>`
})
