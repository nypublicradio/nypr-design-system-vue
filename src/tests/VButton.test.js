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
    expect(wrapper.text()).toBe(label)
  })

  test('link attribute works', () => {
    const href = 'http://www.foo.com'
    const wrapper = shallowMount(VButton, {
      attrs: {
        href: href
      }
    })
    expect(wrapper.attributes().href).toBe(href)
  })

  test('disabled prop works', () => {
    const disabled = true
    const wrapper = shallowMount(VButton, {
      propsData: {
        disabled: disabled
      }
    })
    expect(wrapper.props().disabled).toBe(disabled)
  })

  test('slot works', () => {
    const wrapper = shallowMount(VButton, {
      slots: {
        default: AudioIcon
      }
    })
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })
})
