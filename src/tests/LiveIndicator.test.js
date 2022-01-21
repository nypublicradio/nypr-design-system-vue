import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import LiveIndicator from '../components/LiveIndicator'
import axe from './axe-helper'
import 'jest-canvas-mock'

expect.extend(toHaveNoViolations)

describe('LiveIndicator', () => {
  const label = 'i am a label'
  test('label prop works', () => {
    const wrapper = mount(LiveIndicator, {
      propsData: {
        label
      }
    })
    // check if label prop works and was rendered correctly
    const div = wrapper.find('.live-indicator')
    expect(div.text()).toContain(label)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(LiveIndicator, {
      propsData: { label }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
