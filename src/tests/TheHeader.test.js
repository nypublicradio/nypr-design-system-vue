import { mount } from '@vue/test-utils'
import TheHeader from '../components/TheHeader'
import { describe, test, expect } from '@jest/globals'

describe('TheHeader', () => {
  test('component renders', () => {
    // need to mock the route since the header component detects the current route
    const $route = {
      fullPath: '/Home'
    }
    const wrapper = mount(TheHeader, {
      mocks: {
        $route
      },
      stubs: ['router-link']
    })
    expect(wrapper.exists())
  })

  test('header on home page has class "home"', () => {
    // need to mock the route since the header component detects the current route
    const $route = {
      fullPath: 'Home'
    }
    const wrapper = mount(TheHeader, {
      mocks: {
        $route
      },
      stubs: ['router-link']
    })
    const div = wrapper.find('.home')
    expect(div.exists())
  })

  test('header on other pages does not have the class "home"', () => {
    // need to mock the route since the header component detects the current route
    const $route = {
      fullPath: 'Contact'
    }
    const wrapper = mount(TheHeader, {
      mocks: {
        $route
      },
      stubs: ['router-link']
    })
    expect(wrapper.find('.home').exists()).toBe(false)
  })
})
