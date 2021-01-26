import { mount, shallowMount } from '@vue/test-utils'
import VCounter from '../components/VCounter'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VCounter', () => {
  const icon = 'gallery'
  const text = 'Photos'
  const href = 'http://www.google.com'
  test('icon prop works', () => {
    const wrapper = shallowMount(VCounter, {
      propsData: {
        icon: icon,
        text: text,
        href: href
      }
    })
    // check if prop works
    const div = wrapper.find('.o-icon')
    expect(div.exists()).toBe(true)
  })
  test('text prop works', () => {
    const wrapper = shallowMount(VCounter, {
      propsData: {
        icon: icon,
        text: text,
        href: href
      }
    })
    // check if prop works
    expect(wrapper.text()).toContain(text)
  })
  test('href prop works', () => {
    const wrapper = shallowMount(VCounter, {
      propsData: {
        icon: icon,
        text: text,
        href: href
      }
    })
    // check if prop works
    const div = wrapper.find('a')
    expect(div.attributes().href).toBe(href)
  })
  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VCounter, {
      propsData: {
        icon: icon,
        text: text,
        href: href
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
