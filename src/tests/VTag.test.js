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
        text,
        href
      }
    })
    // check if prop works
    expect(wrapper.text()).toBe(text)
  })

  test('link attribute works', () => {
    const wrapper = shallowMount(VTag, {
      propsData: {
        text,
        href
      }
    })
    // check if prop works and rendered correctly
    const div = wrapper.find('a')
    expect(div.attributes().href).toBe(href)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VTag, {
      propsData: {
        text,
        href
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
