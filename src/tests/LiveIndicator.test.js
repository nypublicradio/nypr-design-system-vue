import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import LiveIndicator from '../components/LiveIndicator'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('LiveIndicator', () => {
  const label = 'i am a label'
  test('label prop works', () => {
    const wrapper = mount(LiveIndicator, {
      propsData: {
        label: label
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
