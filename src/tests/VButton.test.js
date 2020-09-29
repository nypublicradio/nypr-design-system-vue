import { shallowMount } from '@vue/test-utils'
import VButton from '../components/VButton'
import AudioIcon from '../components/icons/AudioIcon'
import { describe, test, expect } from '@jest/globals'

describe('VButton', () => {
  test('label prop works', () => {
    const label = 'new message'
    const wrapper = shallowMount(VButton, {
      propsData: {
        label: label
      }
    })
    // check if prop works
    expect(wrapper.text()).toBe(label)
    // check if it was rendered correctly
    const div = wrapper.find('.button-label')
    expect(div.text()).toBe(label)
  })

  test('link attribute works', () => {
    const href = 'http://www.foo.com'
    const wrapper = shallowMount(VButton, {
      attrs: {
        href: href
      }
    })
    // check if prop works and rendered correctly
    expect(wrapper.attributes().href).toBe(href)
  })

  test('disabled prop works', () => {
    const disabled = true
    const wrapper = shallowMount(VButton, {
      propsData: {
        disabled: disabled
      }
    })
    // check if prop works
    expect(wrapper.props().disabled).toBe(disabled)
    // check if it was rendered correctly
    const div = wrapper.find('.disabled')
    expect(div.exists()).toBe(true)
  })

  test('slot works', () => {
    const wrapper = shallowMount(VButton, {
      slots: {
        default: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })
})
