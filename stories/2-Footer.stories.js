import TheFooter from '../src/components/TheFooter'

export default {
  title: 'The Footer',
  component: TheFooter
}

export const Example = () => ({
  components: { TheFooter },
  template: `
    <div class="sbdocs-large-container">
    <the-footer />
    </div>`
})
