import LiveIndicator from '../src/components/LiveIndicator'

export default {
  title: 'Components/Molecules/Live Indicator',
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export const Default = () => ({
  components: {
    LiveIndicator
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <live-indicator label="3:00 PM - 4:00 PM" />
    </div>`
})
