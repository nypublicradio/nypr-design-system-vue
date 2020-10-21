import LiveIndicator from '../src/components/LiveIndicator'

export default {
  title: 'Components/Molecules/Live Indicator'
}

export const Default = () => ({
  components: {
    LiveIndicator
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin" style="background: black; padding: 3rem">
      <live-indicator label="3:00 PM - 4:00 PM" />
    </div>`
})
