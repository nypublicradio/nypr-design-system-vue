import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import VSpacer from '../components/VSpacer'

describe('VSpacer', () => {
  test('size prop works: null', () => {
    const wrapper = mount(VSpacer)
    // check if default size works and was rendered correctly
    const div = wrapper.find('.v-spacer')
    expect(div.classes()).toContain('u-padding--top')
  })
})

describe('VSpacer', () => {
  test('size prop works: double', () => {
    const value = 'double'
    const wrapper = mount(VSpacer, {
      propsData: {
        size: value
      }
    })
    // check if size prop works and was rendered correctly
    const div = wrapper.find('.v-spacer')
    expect(div.classes()).toContain('u-padding--double--top')
  })
})

describe('VSpacer', () => {
  test('size prop works: triple', () => {
    const value = 'triple'
    const wrapper = mount(VSpacer, {
      propsData: {
        size: value
      }
    })
    // check if size prop works and was rendered correctly
    const div = wrapper.find('.v-spacer')
    expect(div.classes()).toContain('u-padding--triple--top')
  })
})

describe('VSpacer', () => {
  test('size prop works: quad', () => {
    const value = 'quad'
    const wrapper = mount(VSpacer, {
      propsData: {
        size: value
      }
    })
    // check if size prop works and was rendered correctly
    const div = wrapper.find('.v-spacer')
    expect(div.classes()).toContain('u-padding--quad--top')
  })
})
