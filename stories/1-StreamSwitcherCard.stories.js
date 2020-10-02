import StreamSwitcherCard from '../src/components/StreamSwitcherCard'

export default {
  title: 'Components/Molecules/Stream Switcher Card'
}

export const Inactive = () => ({
  components: {
    StreamSwitcherCard
  },
  template: `
    <stream-switcher-card
      station="WNYC 93.9 FM"
      showTitle="The Takeaway"
      image="https://media.wnyc.org/i/1400/1400/l/80/1/TheTakeway_Square_NoWNYCStudios.png"
      upNext="All Things Considered"
      time="in 15 min"
    />`
})

export const Active = () => ({
  components: {
    StreamSwitcherCard
  },
  template: `
    <stream-switcher-card
      image="https://media.wnyc.org/i/1400/1400/l/80/1/TheTakeway_Square_NoWNYCStudios.png"
      station="WNYC 93.9 FM"
      showTitle="BBC World Service"
      upNext="WNYC’s Special Convention Coverage 2020"
      time="in 99 mins"
      :active="true"
    />`
})

export const Playing = () => ({
  components: {
    StreamSwitcherCard
  },
  template: `
    <stream-switcher-card
      image="https://media.wnyc.org/i/1400/1400/l/80/1/TheTakeway_Square_NoWNYCStudios.png"
      station="WNYC 93.9 FM"
      showTitle="BBC World Service"
      upNext="WNYC’s Special Convention Coverage 2020"
      time="in 99 mins"
      :active="true"
      :playing="true"
    />`
})
