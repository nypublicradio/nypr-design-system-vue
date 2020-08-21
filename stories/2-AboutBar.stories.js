import TheAboutBar from '../src/components/TheAboutBar'

export default {
  title: 'The About Bar',
  component: TheAboutBar
}

export const Example = () => ({
  components: { TheAboutBar },
  template: `
    <div class="sbdocs-large-container">
    <the-about-bar />
    </div>`
})
