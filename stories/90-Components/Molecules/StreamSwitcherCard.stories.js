import StreamSwitcherCard from '../../../src/components/StreamSwitcherCard'

export default {
  title: 'Components/Molecules/Stream Switcher Card',
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export const Inactive = () => ({
  components: {
    StreamSwitcherCard
  },
  template: `
    <stream-switcher-card
      station="WNYC 93.9 FM"
      title="The Takeaway"
    />`
})

export const Active = () => ({
  components: {
    StreamSwitcherCard
  },
  template: `
    <stream-switcher-card
      station="WNYC 93.9 FM"
      title="BBC World Service"
      :active="true"
    />`
})

export const Playing = () => ({
  components: {
    StreamSwitcherCard
  },
  template: `
    <stream-switcher-card
      station="WNYC 93.9 FM"
      title="BBC World Service"
      :active="true"
      :playing="true"
    />`
})
