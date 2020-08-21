import TheBrandBar from '../src/components/TheBrandBar'

export default {
  title: 'The Brand Bar',
  component: TheBrandBar
}

export const Example = () => ({
  components: { TheBrandBar },
  template: `
    <div class="sbdocs-large-container">
    <the-brand-bar />
    </div>`
})
