import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'
import VCard from '../components/VCard'

expect.extend(toHaveNoViolations)

describe('VCard', () => {
  test('it renders props', () => {
    const image = 'http://placehold.it/175x175'
    const title = 'Title'
    const titleLink = 'https://example.com'
    const subtitle = 'Subtitle'
    const wrapper = mount(VCard, {
      propsData: { image, title, titleLink, subtitle }
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image')
    const imgLinkTag = wrapper.find('.card-image-link')
    const titleLinkTag = wrapper.find('.card-title-link')
    const subtitleTag = wrapper.find('.card-subtitle')
    expect(img.attributes('src')).toBe(image)
    expect(img.attributes('alt')).toBe(title)
    expect(imgLinkTag.attributes('href')).toBe(titleLink)
    expect(titleLinkTag.text()).toContain(title)
    expect(titleLinkTag.attributes('href')).toBe(titleLink)
    expect(subtitleTag.text()).toContain(subtitle)
  })

  test('it renders without a link', () => {
    const image = 'http://placehold.it/175x175'
    const title = 'Title'
    const subtitle = 'Subtitle'
    const wrapper = mount(VCard, {
      propsData: { image, title, subtitle }
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image')
    const titleTag = wrapper.find('.card-title')
    const subtitleTag = wrapper.find('.card-subtitle')
    expect(wrapper.find('.card-title-link').exists()).toBe(false)
    expect(img.attributes('src')).toBe(image)
    expect(img.attributes('alt')).toBe('')
    expect(titleTag.text()).toContain(title)
    expect(subtitleTag.text()).toContain(subtitle)
  })

  test('it renders without an image', () => {
    const title = 'Title'
    const titleLink = 'https://example.com'
    const subtitle = 'Subtitle'
    const wrapper = mount(VCard, {
      propsData: { title, titleLink, subtitle }
    })
    // check if prop works and was rendered correctly
    const titleTag = wrapper.find('.card-title')
    const titleLinkTag = wrapper.find('.card-title-link')
    const subtitleTag = wrapper.find('.card-subtitle')
    expect(wrapper.find('.card-image').exists()).toBe(false)
    expect(titleTag.text()).toContain(title)
    expect(titleLinkTag.text()).toContain(title)
    expect(titleLinkTag.attributes('href')).toBe(titleLink)
    expect(subtitleTag.text()).toContain(subtitle)
  })

  test('it passes basic accessibility tests', async () => {
    const image = 'http://placehold.it/175x175'
    const alt = 'Title'
    const title = 'Title'
    const titleLink = 'https://example.com'
    const subtitle = 'Subtitle'
    const wrapper = mount(VCard, {
      propsData: { image, alt, title, titleLink, subtitle }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
