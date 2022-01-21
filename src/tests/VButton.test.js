import { mount, shallowMount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import VButton from '../components/VButton'
import AudioIcon from '../components/icons/AudioIcon'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VButton', () => {
  const label = 'new message'
  const href = 'http://www.foo.com'
  const disabled = true
  test('label prop works', () => {
    const wrapper = shallowMount(VButton, {
      propsData: {
        label
      }
    })
    // check if prop works
    expect(wrapper.text()).toBe(label)
    // check if it was rendered correctly
    const div = wrapper.find('.button-label')
    expect(div.text()).toBe(label)
  })

  test('link attribute works', () => {
    const wrapper = shallowMount(VButton, {
      attrs: {
        href
      }
    })
    // check if prop works and rendered correctly
    expect(wrapper.attributes().href).toBe(href)
  })

  test('disabled prop works', () => {
    const wrapper = shallowMount(VButton, {
      propsData: {
        disabled
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

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VButton, {
      propsData: {
        label,
        href,
        disabled
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
