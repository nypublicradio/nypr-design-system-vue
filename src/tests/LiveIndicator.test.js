import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import LiveIndicator from '../components/LiveIndicator'

describe('LiveIndicator', () => {
  test('label prop works', () => {
    const label = 'i am a label'
    const wrapper = mount(LiveIndicator, {
      propsData: {
        label: label
      }
    })
    // check if label prop works and was rendered correctly
    const div = wrapper.find('.live-indicator')
    expect(div.text()).toContain(label)
  })
})
