import { shallowMount } from '@vue/test-utils'
import VAccordion from '../components/VAccordion'
import AudioIcon from '../components/icons/AudioIcon'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

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
      props: {
        shouldOpenOnLoad: true
      }
    })
    // check if it was rendered correctly
    const div = wrapper.find('.accordion-header-active')
    expect(div.exists()).toBe(true)
  })

  test.skip('closedOnMobile prop works on mobile width', async () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 400
    })
    const wrapper = shallowMount(VAccordion, {
      props: {
        closedOnMobile: true,
        shouldOpenOnLoad: true
      }
    })
    // check if it was rendered correctly
    await wrapper.vm.$nextTick()
    const div = wrapper.find('.accordion-header-active')
    expect(div.exists()).toBe(false)
    expect(wrapper.vm.visible).toBe(false)
    expect(wrapper.vm.active).toBe(false)
  })

  test.skip('closedOnMobile prop works on desktop width', async () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    })
    const wrapper = shallowMount(VAccordion, {
      props: {
        closedOnMobile: true,
        shouldOpenOnLoad: true
      }
    })
    // check if it was rendered correctly
    await wrapper.vm.$nextTick()
    const div = wrapper.find('.accordion-header-active')
    expect(div.exists()).toBe(true)
    expect(wrapper.vm.visible).toBe(true)
    expect(wrapper.vm.active).toBe(true)
  })

  test.skip('it passes basic accessibility tests', async () => {
    const wrapper = shallowMount(VAccordion, {
      slots: {
        header: AudioIcon
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })

  test.skip('open function works', async () => {
    const wrapper = shallowMount(VAccordion, {
      slots: {
        header: AudioIcon,
        content: AudioIcon
      },
      props: {
        shouldOpenOnLoad: false
      }
    })
    const div = wrapper.find('.accordion-content')
    const headerDiv = wrapper.find('.accordion-header')
    headerDiv.trigger('click')
    await wrapper.vm.$nextTick()
    expect(div.isVisible()).toBe(true)
    expect(wrapper.vm.visible).toBe(true)
    expect(wrapper.vm.active).toBe(true)
  })

  test.skip('shouldOpenOnLoad prop works', () => {
    const wrapper = shallowMount(VAccordion, {
      slots: {
        header: AudioIcon
      }
    })
    wrapper.vm.close()
    // expect(wrapper.vm.active).toBe(false)
  })
})
