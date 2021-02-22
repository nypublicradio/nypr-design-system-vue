import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import MainPlayer from '../components/MainPlayer'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'
import 'jest-canvas-mock'

expect.extend(toHaveNoViolations)

describe('MainPlayer', () => {
  const image = 'http://placehold.it/175x175'
  const title = 'The Show'
  const titleLink = 'http://www.titlelink.com'
  const details = 'lorem ipsum dolor'
  const detailsLink = 'http://www.detailslink.com'
  const time = 'right now'
  test('image prop works', () => {
    const wrapper = mount(MainPlayer, {
      propsData: {
        image: image,
        title: title
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('img')
    expect(div.attributes('src')).toBe(image)
    expect(div.attributes('alt')).toBe(title)
  })

  test('title prop works', () => {
    const wrapper = mount(MainPlayer, {
      propsData: {
        title: title
      }
    })
    // check if the title prop works
    expect(wrapper.text()).toContain(title)
    // check if the title was rendered correctly
    const div = wrapper.find('.main-player-title')
    expect(div.text()).toBe(title)
  })

  test('title-link prop works', () => {
    const wrapper = mount(MainPlayer, {
      propsData: {
        title: title,
        titleLink: titleLink
      }
    })
    // check if titleLink prop works and was rendered correctly
    const div = wrapper.find('.main-player-title a')
    expect(div.attributes('href')).toBe(titleLink)
  })

  test('details prop works', () => {
    const wrapper = mount(MainPlayer, {
      propsData: {
        details: details
      }
    })
    // check if prop works
    expect(wrapper.text()).toContain(details)
    // check if prop was rendered correctly
    const div = wrapper.find('.main-player-details')
    expect(div.text()).toContain(details)
  })

  test('detailsLink prop works', () => {
    const wrapper = mount(MainPlayer, {
      propsData: {
        details: details,
        detailsLink: detailsLink
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.main-player-details-link')
    expect(div.attributes().href).toBe(detailsLink)
  })

  test('time prop works', () => {
    const wrapper = mount(MainPlayer, {
      propsData: {
        time: time
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.live-indicator')
    expect(div.text()).toContain(time)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(MainPlayer, {
      propsData: {
        image,
        titleLink,
        title,
        detailsLink,
        details,
        time
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
