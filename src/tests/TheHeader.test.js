import { mount, shallowMount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import TheHeader from '../components/TheHeader'
import AudioIcon from '../components/icons/AudioIcon'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('TheHeader', () => {
  const donateUrl = 'http://www.test.com'
  const title = 'this is a title'
  test('title prop works', () => {
    const wrapper = shallowMount(TheHeader, {
      propsData: {
        donateUrl,
        title
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.main-player-title')
    expect(div.text()).toBe(title)
  })

  test('donateUrl prop works', () => {
    const wrapper = shallowMount(TheHeader, {
      propsData: {
        donateUrl,
        title
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.c-main-header__donate')
    expect(div.attributes('href')).toBe(donateUrl)
  })

  test('menu slot works', () => {
    const wrapper = shallowMount(TheHeader, {
      slots: {
        menu: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('logo slot works', () => {
    const wrapper = shallowMount(TheHeader, {
      slots: {
        logo: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('navigation slot works', () => {
    const wrapper = shallowMount(TheHeader, {
      slots: {
        navigation: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('social slot works', () => {
    const wrapper = shallowMount(TheHeader, {
      slots: {
        social: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('search slot works', () => {
    const wrapper = shallowMount(TheHeader, {
      slots: {
        search: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(TheHeader, {
      propsData: {
        donateUrl,
        title
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
