import { mount, shallowMount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import VCollection from '../components/VCollection'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VCollection', () => {
  const title = 'test title'
  test('title prop works', () => {
    const wrapper = shallowMount(VCollection, {
      propsData: {
        title
      }
    })
    // check if prop works
    const div = wrapper.find('.collection-title')
    expect(div.text()).toContain(title)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VCollection, {
      propsData: {
        title
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
