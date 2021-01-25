import { mount, shallowMount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import VTag from '../components/VTag'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VTag', () => {
  const text = 'news'
  const href = 'http://www.foo.com'
  test('text prop works: null', () => {
    const wrapper = shallowMount(VTag, {
      propsData: {
        text: text
      }
    })
    // check if prop works
    expect(wrapper.text()).toBe(text)
  })

  test('link attribute works', () => {
    const wrapper = shallowMount(VTag, {
      attrs: {
        href: href
      }
    })
    // check if prop works and rendered correctly
    expect(wrapper.attributes().href).toBe(href)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VTag)
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
