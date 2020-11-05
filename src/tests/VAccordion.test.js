import { shallowMount } from '@vue/test-utils'
import VAccordion from '../components/VAccordion'
import AudioIcon from '../components/icons/AudioIcon'
import { describe, test, expect } from '@jest/globals'

describe('VAccordion', () => {
  test('header slot works', () => {
    const wrapper = shallowMount(VAccordion, {
      slots: {
        header: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })
  test('content slot works', () => {
    const wrapper = shallowMount(VAccordion, {
      slots: {
        content: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })
  test('shouldOpenOnLoad prop works', () => {
    const wrapper = shallowMount(VAccordion, {
      propsData: {
        shouldOpenOnLoad: true
      }
    })
    // check if it was rendered correctly
    const div = wrapper.find('.accordion-header-active')
    expect(div.exists()).toBe(true)
  })
})
