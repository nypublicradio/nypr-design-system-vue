import { shallowMount } from '@vue/test-utils'
import SecondaryNavigation from '../components/SecondaryNavigation'
import { describe, test, expect } from '@jest/globals'

describe('SecondaryNavigation', () => {
  test('orientation prop works', () => {
    const orientation = 'horizontal'
    const wrapper = shallowMount(SecondaryNavigation, {
      propsData: {
        orientation: orientation
      }
    })
    // check if prop was passed correctly
    const div = wrapper.find('.c-secondary-nav__list')
    expect(div.attributes('class')).toContain(orientation)
  })

  test('navItems prop works', () => {
    const navItems = [
      {
        url: 'http://www.google.com',
        text: 'Secondary Link 1'
      }
    ]
    const wrapper = shallowMount(SecondaryNavigation, {
      propsData: {
        navItems: navItems
      }
    })
    // check if prop was passed correctly
    const div = wrapper.find('.c-secondary-nav__item a')
    expect(div.text()).toBe(navItems[0].text)
    expect(div.attributes('href')).toContain(navItems[0].url)
  })
})
