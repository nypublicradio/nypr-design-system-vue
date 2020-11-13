import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'
import VPerson from '../components/VPerson'

expect.extend(toHaveNoViolations)

expect.extend(toHaveNoViolations)
describe('VPerson', () => {
  test('it renders props', () => {
    const image = 'http://placehold.it/175x175'
    const name = 'Title'
    const nameLink = 'https://example.com'
    const role = 'Subtitle'
    const wrapper = mount(VPerson, {
      propsData: { person: { image, name, nameLink, role } }
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image')
    const titleLinkTag = wrapper.find('.card-title-link')
    const subtitleTag = wrapper.find('.card-subtitle')
    expect(img.attributes('src')).toBe(image)
    expect(titleLinkTag.text()).toContain(name)
    expect(titleLinkTag.attributes('href')).toBe(nameLink)
    expect(subtitleTag.text()).toContain(role)
  })

  test('it passes basic accessibility tests', async () => {
    const image = 'http://placehold.it/175x175'
    const name = 'Title'
    const nameLink = 'https://example.com'
    const role = 'Subtitle'
    const wrapper = mount(VPerson, {
      propsData: { person: { image, name, nameLink, role } }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
