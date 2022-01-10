import { mount, shallowMount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import StreamSwitcherCard from '../components/StreamSwitcherCard'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('StreamSwitcherCard', () => {
  const station = 'station'
  const title = 'title'
  test('station prop works', () => {
    const wrapper = shallowMount(StreamSwitcherCard, {
      propsData: {
        station,
        title
      }
    })
    // check if it was rendered correctly
    const div = wrapper.find('.stream-switcher-card-station')
    expect(div.text()).toBe(station)
  })

  test('title prop works', () => {
    const wrapper = shallowMount(StreamSwitcherCard, {
      propsData: {
        station,
        title
      }
    })
    // check if it was rendered correctly
    const div = wrapper.find('.stream-switcher-card-title')
    expect(div.text()).toBe(title)
  })

  test('active prop works if true', () => {
    const wrapper = mount(StreamSwitcherCard, {
      propsData: {
        station,
        title,
        active: true
      }
    })
    // check if it was rendered correctly
    const div = wrapper.find('.stream-switcher-card')
    expect(div.classes('is-active')).toBe(true)
  })

  test('active prop is false by default', () => {
    const wrapper = mount(StreamSwitcherCard, {
      propsData: {
        station,
        title
      }
    })
    // check if it was rendered correctly
    const div = wrapper.find('.stream-switcher-card')
    expect(div.classes('is-active')).toBe(false)
  })

  test('playing prop works if true', () => {
    const wrapper = mount(StreamSwitcherCard, {
      propsData: {
        station,
        title,
        playing: true
      }
    })
    // check if it was rendered correctly
    const div = wrapper.find('.stream-switcher-card')
    expect(div.classes('is-playing')).toBe(true)
  })

  test('playing prop is false by default', () => {
    const wrapper = mount(StreamSwitcherCard, {
      propsData: {
        station,
        title
      }
    })
    // check if it was rendered correctly
    const div = wrapper.find('.stream-switcher-card')
    expect(div.classes('is-playing')).toBe(false)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(StreamSwitcherCard, {
      propsData: {
        station,
        title
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
