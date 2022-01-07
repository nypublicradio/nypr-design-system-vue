import { mount, shallowMount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import SecondaryNavigation from '../components/SecondaryNavigation'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('SecondaryNavigation', () => {
  const orientation = 'horizontal'
  const navItems = [
    {
      url: 'https://www.google.com',
      text: 'Secondary Link 1',
      type: 'external_link'
    }
  ]
  test('orientation prop works', () => {
    const wrapper = shallowMount(SecondaryNavigation, {
      propsData: {
        orientation
      }
    })
    // check if prop was passed correctly
    const div = wrapper.find('.c-secondary-nav__list')
    expect(div.attributes('class')).toContain(orientation)
  })

  test('navItems prop works', () => {
    const wrapper = shallowMount(SecondaryNavigation, {
      propsData: {
        navItems
      }
    })
    // check if prop was passed correctly
    const div = wrapper.find('.c-secondary-nav__item a')
    expect(div.text()).toContain(navItems[0].text)
    expect(div.attributes('href')).toContain(navItems[0].url)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(SecondaryNavigation, {
      propsData: { orientation, navItems }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
