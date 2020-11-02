import StreamSwitcher from '../../../src/components/StreamSwitcher'
import StreamSwitcherCard from '../../../src/components/StreamSwitcherCard'

export default {
  title: 'Components/Organisms/Stream Switcher',
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export const Horizontal = () => ({
  components: {
    StreamSwitcher,
    StreamSwitcherCard
  },
  template: `
    <stream-switcher>
      <stream-switcher-card
        station="WNYC 93.9 FM"
        title="BBC World Service"
        up-next-title="New Sounds"
        :active="true"
        :playing="true"
      />
      <stream-switcher-card
        station="WNYC 93.9 FM"
        title="The Takeaway"
        up-next-title="All Of It"
      />
      <stream-switcher-card
        station="WNYC 93.9 FM"
        title="BBC World Service"
        up-next-title="New Sounds"
      />
    </stream-switcher>
  `
})

export const Vertical = () => ({
  components: {
    StreamSwitcher,
    StreamSwitcherCard
  },
  template: `
    <stream-switcher orientation="vertical">
      <stream-switcher-card
        station="WNYC 93.9 FM"
        title="BBC World Service"
        :active="true"
        :playing="true"
      />
      <stream-switcher-card
        station="WNYC 93.9 FM"
        title="The Takeaway"
      />
      <stream-switcher-card
        station="WNYC 93.9 FM"
        title="BBC World Service"
      />
    </stream-switcher>
  `
})
