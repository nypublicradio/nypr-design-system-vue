import { shallowMount } from '@vue/test-utils'
import VButton from '../components/VButton'
import AudioIcon from '../components/icons/AudioIcon'
import { describe, test, expect } from '@jest/globals'

describe('VButton', () => {
  test('component renders', () => {
    const wrapper = shallowMount(VButton)
    expect(wrapper.exists())
  })

  test('label prop works', () => {
    const wrapper = shallowMount(VButton, {
      propsData: {
        label: 'Button'
      }
    })
    expect(wrapper.text()).toBe('Button')
  })

  test('link prop works', () => {
    const wrapper = shallowMount(VButton, {
      propsData: {
        href: 'http://www.foo.com'
      }
    })
    expect(wrapper.props().href).toBe('http://www.foo.com')
  })

  test('slot works', () => {
    const wrapper = shallowMount(VButton, {
      slots: {
        default: AudioIcon
      }
    })
    expect(wrapper.find(AudioIcon).isVueInstance()).toBe(true)
  })
})
