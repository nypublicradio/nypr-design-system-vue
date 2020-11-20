import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import VSearch from '../components/VSearch'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VSearch', () => {
  const action = 'http://www.google.com'
  const placeholder = 'Search'
  test('action prop works', () => {
    const wrapper = mount(VSearch, {
      propsData: {
        action: action
      }
    })
    // check if action prop works and was rendered correctly
    const div = wrapper.find('form')
    expect(div.attributes('action')).toBe(action)
  })
  test('placeholder prop works', () => {
    const wrapper = mount(VSearch, {
      propsData: {
        placeholder: placeholder
      }
    })
    // check if placeholder prop works and was rendered correctly
    const div = wrapper.find('input')
    expect(div.attributes('placeholder')).toBe(placeholder)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VSearch, {
      propsData: {
        action,
        placeholder
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
