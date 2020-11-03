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
      up-next-title="All Of It"
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
      up-next-title="New Sounds"
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
      up-next-title="New Sounds"
      :active="true"
      :playing="true"
    />`
})
