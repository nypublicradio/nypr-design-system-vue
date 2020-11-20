import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import VSpacer from '../components/VSpacer'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VSpacer', () => {
  test('size prop works: null', () => {
    const wrapper = mount(VSpacer)
    // check if default size works and was rendered correctly
    const div = wrapper.find('.v-spacer')
    expect(div.classes()).toContain('u-padding--top')
  })

  test('size prop works: double', () => {
    const wrapper = mount(VSpacer, {
      propsData: {
        size: 'double'
      }
    })
    // check if size prop works and was rendered correctly
    const div = wrapper.find('.v-spacer')
    expect(div.classes()).toContain('u-padding--double--top')
  })

  test('size prop works: triple', () => {
    const wrapper = mount(VSpacer, {
      propsData: {
        size: 'triple'
      }
    })
    // check if size prop works and was rendered correctly
    const div = wrapper.find('.v-spacer')
    expect(div.classes()).toContain('u-padding--triple--top')
  })

  test('size prop works: quad', () => {
    const wrapper = mount(VSpacer, {
      propsData: {
        size: 'quad'
      }
    })
    // check if size prop works and was rendered correctly
    const div = wrapper.find('.v-spacer')
    expect(div.classes()).toContain('u-padding--quad--top')
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VSpacer)
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
