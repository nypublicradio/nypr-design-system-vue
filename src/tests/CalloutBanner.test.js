import { mount, shallowMount } from '@vue/test-utils'
import CalloutBanner from '../components/CalloutBanner'
import AudioIcon from '../components/icons/AudioIcon'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('CalloutBanner', () => {
  test('message slot works', () => {
    const wrapper = shallowMount(CalloutBanner, {
      slots: {
        message: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(CalloutBanner, {
      slots: {
        default: AudioIcon
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })

  test('close works', async () => {
    const wrapper = mount(CalloutBanner, {
      slots: {
        default: AudioIcon
      }
    })
    const div = wrapper.find('.callout-banner')
    const divClose = wrapper.find('.callout-banner-close')
    expect(div.isVisible()).toBe(true)
    expect(wrapper.vm.active).toBe(true)
    divClose.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.active).toBe(false)
  })
})
