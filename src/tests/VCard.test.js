import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'
import VCard from '../components/VCard'

expect.extend(toHaveNoViolations)

describe('VCard', () => {
  test('it renders props', () => {
    const image = 'http://placehold.it/175x175'
    const alt = 'Title'
    const title = 'Title'
    const titleLink = 'https://example.com'
    const subtitle = 'Subtitle'
    const wrapper = mount(VCard, {
      propsData: { image, alt, title, titleLink, subtitle }
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image')
    const titleLinkTag = wrapper.find('.card-title-link')
    const subtitleTag = wrapper.find('.card-subtitle')
    expect(img.attributes('src')).toBe(image)
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
