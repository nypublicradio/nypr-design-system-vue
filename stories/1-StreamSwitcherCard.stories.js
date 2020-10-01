import StreamSwitcherCard from '../src/components/StreamSwitcherCard'

export default {
  title: 'Components/Organisms/Stream Switcher Card'
}

export const inActive = () => ({
  components: {
    StreamSwitcherCard
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin" style="max-width:230px">
      <stream-switcher-card station="WNYC 93.9 FM" showTitle="The Takeaway" image="https://media.wnyc.org/i/1400/1400/l/80/1/TheTakeway_Square_NoWNYCStudios.png" upNext="All Things Considered" time="9 minutes"/>
    </div>`
})


export const Active = () => ({
  components: {
    StreamSwitcherCard
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin" style="max-width:230px">
      <stream-switcher-card station="WNYC 93.9 FM" showTitle="The Takeaway" image="https://media.wnyc.org/i/1400/1400/l/80/1/TheTakeway_Square_NoWNYCStudios.png" upNext="All Things Considered" time="9 minutes" active="true"/>
    </div>`
})
