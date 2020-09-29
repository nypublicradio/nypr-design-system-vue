import { mount, shallowMount } from '@vue/test-utils'
import ShareTools from '../components/ShareTools'
import AudioIcon from '../components/icons/AudioIcon'
import { describe, test, expect } from '@jest/globals'

describe('ShareTools', () => {
  test('label prop works', () => {
    const label = 'The Label'
    const wrapper = mount(ShareTools, {
      propsData: {
        label: label
      }
    })
    // check if prop works
    expect(wrapper.props().label).toBe(label)
    // check if it was rendered correctly
    const div = wrapper.find('.c-share-tools__label')
    expect(div.text()).toContain('The Label')
  })

  test('slot works', () => {
    const wrapper = shallowMount(ShareTools, {
      slots: {
        default: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })
})
