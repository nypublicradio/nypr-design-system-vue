import { shallowMount } from '@vue/test-utils'
import StreamSwitcher from '../components/StreamSwitcher'
import AudioIcon from '../components/icons/AudioIcon'
import { describe, test, expect } from '@jest/globals'

describe('ShareTools', () => {
  test('slot works', () => {
    const wrapper = shallowMount(StreamSwitcher, {
      slots: {
        default: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })
})
