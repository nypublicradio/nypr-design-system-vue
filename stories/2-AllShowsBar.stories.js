import TheAllShowsBar from '../src/components/TheAllShowsBar'

export default {
  title: 'The All Shows Bar',
  component: TheAllShowsBar
}

export const Example = () => ({
  components: { TheAllShowsBar },
  template: `
    <div class="sbdocs-large-container">
    <the-all-shows-bar />
    </div>`
})
