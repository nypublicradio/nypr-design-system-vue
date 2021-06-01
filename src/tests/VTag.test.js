import { mount, shallowMount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import VTag from '../components/VTag'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VTag', () => {
  const name = 'news'
  const slug = 'news'
  test('text prop works: null', () => {
    const wrapper = shallowMount(VTag, {
      propsData: {
        name,
        slug
      }
    })
    // check if prop works
    expect(wrapper.text()).toBe(name)
  })

  // this is using nuxt-link, so we need to find the "to" attribute instead of "href"
  test('link attribute works', () => {
    const wrapper = shallowMount(VTag, {
      propsData: {
        name,
        slug
      }
    })
    // check if prop works and rendered correctly
    const div = wrapper.find('a')
    expect(div.attributes().to).toBe(slug)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VTag, {
      propsData: {
        name,
        slug
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
