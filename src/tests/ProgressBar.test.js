import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import ProgressBar from '../components/ProgressBar'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('ProgressBar', () => {
  test('percent prop works: double', () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        percent: 50
      }
    })
    // check if size prop works and was rendered correctly
    const div = wrapper.find('.progress-bar-progress')
    expect(div.attributes().style).toBe('width: 50%;')
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(ProgressBar)
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
